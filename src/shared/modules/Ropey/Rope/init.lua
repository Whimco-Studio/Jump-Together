-- Implementation of Rope.

--// Services
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

--// Modules
local Spring = require(script.Spring)

--// Constants
local ROPE_LENGTH = 5
local SPRING_MASS = 1000
local ROPE_STIFFNESS = ROPE_LENGTH * 100
local SPRING_DAMPER = 0.1
local VERTICAL_VELOCITY_BOUNDS = 1
local ROPE_FORCE = 100

--// Private Functions
local function CreateRopeBase()
	local RopeBase = Instance.new("Part")
	RopeBase.Size = Vector3.one
	RopeBase.Anchored = true
	RopeBase.CanCollide = false
	RopeBase.Parent = workspace
	RopeBase.Transparency = 1

	local RopeAttachment = Instance.new("Attachment")
	RopeAttachment.Parent = RopeBase

	return RopeBase, RopeAttachment
end

local function CreateRopeVisual(RopeBase1, RopeBase2)
	local rope = Instance.new("RopeConstraint") :: RopeConstraint
	rope.Attachment0 = RopeBase1:FindFirstChildOfClass("Attachment")
	rope.Attachment1 = RopeBase2:FindFirstChildOfClass("Attachment")
	rope.Length = ROPE_LENGTH
	rope.Visible = true
	rope.Parent = RopeBase1.Parent
	rope.Color = BrickColor.new("Brown")

	return rope
end

--// Class
local Rope = {}
Rope.__index = Rope

function Rope.new(PlayerOne: Player, PlayerTwo: Player)
	local info = {
		PlayerOne = PlayerOne,
		PlayerTwo = PlayerTwo,

		RopeBase1 = { CreateRopeBase() },
		RopeBase2 = { CreateRopeBase() },

		LocalBase = false,
		OtherBase = false,

		Connections = {},
	}

	info.RopeVisual = CreateRopeVisual(info.RopeBase1[1], info.RopeBase2[1])

	if PlayerOne == Players.LocalPlayer then
		info.LocalPlayer = PlayerOne
	elseif PlayerTwo == Players.LocalPlayer then
		info.LocalPlayer = PlayerTwo
	end

	setmetatable(info, Rope):Init()
	return info
end

function Rope:AddSpring()
	if self.PlayerOne == Players.LocalPlayer or self.PlayerTwo == Players.LocalPlayer then
		self.spring = Spring.new(SPRING_MASS, SPRING_DAMPER, ROPE_STIFFNESS, 5, 0, 0)
	end
end

function Rope:CheckForLocalPlayer()
	if self.PlayerOne == Players.LocalPlayer then
		self.LocalBase = self.RopeBase1
		self.OtherBase = self.RopeBase2
	elseif self.PlayerTwo == Players.LocalPlayer then
		self.LocalBase = self.RopeBase2
		self.OtherBase = self.RopeBase1
	end
end

function Rope:Init()
	self:CheckForLocalPlayer()
	self:GetRootParts()
	self:AddSpring()
end

function Rope:Update(deltaTime: number)
	task.defer(function()
		self:CFrameBasesToRoots(deltaTime)

		if self.LocalPlayer then
			self:ApplySpring()
		end
	end)
end

function Rope:AddDirectionalForces(Player: Player, RootPart: BasePart)
	if not self.LocalPlayer or Player ~= self.LocalPlayer then
		return
	elseif not RootPart then
		return
	end

	local Directional: VectorForce = RootPart:FindFirstChild("Directional") or Instance.new("VectorForce")
	Directional.Parent = RootPart
	Directional.RelativeTo = Enum.ActuatorRelativeTo.World
	Directional.Name = "Directional"

	Directional.Attachment0 = RootPart:FindFirstChild("DirectionalAttachment") or Instance.new("Attachment")
	Directional.Attachment0.Name = "DirectionalAttachment"
	Directional.Attachment0.Parent = RootPart
	Directional.Force = Vector3.zero

	self.Directional = Directional
end

function Rope:GetRootParts()
	local PlayerOne = self.PlayerOne
	local PlayerTwo = self.PlayerTwo

	local PlayerOneCharacter = PlayerOne.Character
	local PlayerTwoCharacter = PlayerTwo.Character

	if PlayerOneCharacter and PlayerTwoCharacter then
		local PlayerOneHumanoid = PlayerOneCharacter:FindFirstChildOfClass("Humanoid")
		local PlayerTwoHumanoid = PlayerTwoCharacter:FindFirstChildOfClass("Humanoid")

		if PlayerOneHumanoid and PlayerTwoHumanoid then
			self.PlayerOneTorso = PlayerOneCharacter:FindFirstChild("HumanoidRootPart")
			self.PlayerTwoTorso = PlayerTwoCharacter:FindFirstChild("HumanoidRootPart")

			self.Connections["PlayerOneCharacterAdded"] = PlayerOne.CharacterAdded:Connect(function(Character)
				self.PlayerOneTorso = Character:WaitForChild("HumanoidRootPart")

				self:AddDirectionalForces(PlayerOne, self.PlayerOneTorso)
			end)

			self.Connections["PlayerTwoCharacterAdded"] = PlayerTwo.CharacterAdded:Connect(function(Character)
				self.PlayerTwoTorso = Character:WaitForChild("HumanoidRootPart")
				self:AddDirectionalForces(PlayerTwo, self.PlayerTwoTorso)
			end)

			self:AddDirectionalForces(PlayerOne, self.PlayerOneTorso)
			self:AddDirectionalForces(PlayerTwo, self.PlayerTwoTorso)
		end
	end
end

function Rope:CFrameBasesToRoots(deltaTime: number)
	local PlayerOneTorso = self.PlayerOneTorso
	local PlayerTwoTorso = self.PlayerTwoTorso

	if PlayerOneTorso and PlayerTwoTorso then
		local PlayerOneBase = self.RopeBase1[1]
		local PlayerTwoBase = self.RopeBase2[1]

		local PlayerOneCFrame = PlayerOneTorso.CFrame
		local PlayerTwoCFrame = PlayerTwoTorso.CFrame

		PlayerOneBase.CFrame = PlayerOneCFrame
		PlayerTwoBase.CFrame = PlayerTwoCFrame
	end
end

function Rope:ApplySpring()
	if not self.LocalPlayer or not self.Directional or not self.spring then
		return
	end

	local LocalBase = self.LocalBase[1] :: BasePart
	local OtherBase = self.OtherBase[1] :: BasePart

	local distance = (LocalBase.Position - OtherBase.Position).Magnitude

	if distance < ROPE_LENGTH then
		self.Directional.Force = Vector3.zero
		return
	end

	self.spring:SetOffset(distance)

	local forceDirection = (OtherBase.Position - LocalBase.Position).Unit
	local springForce = self.spring.Offset * forceDirection

	-- Check if springForce is valid
	if not (springForce.X ~= springForce.X) then -- Check if springForce is NaN
		-- Clamp the spring force to avoid excessively large values
		local maxForce = 100 -- Adjust this value as needed
		springForce = springForce.Unit * math.min(springForce.Magnitude, maxForce)

		-- Clamp the vertical component to avoid excessive vertical speeds
		springForce = Vector3.new(
			springForce.X,
			math.clamp(springForce.Y, -VERTICAL_VELOCITY_BOUNDS, VERTICAL_VELOCITY_BOUNDS),
			springForce.Z
		)

		if springForce.Magnitude < ROPE_FORCE then
			self.Directional.Force = springForce * 100
		else
			self.Directional.Force = Vector3.new(
				springForce.X * 0.1,
				math.clamp(springForce.Y, -VERTICAL_VELOCITY_BOUNDS, VERTICAL_VELOCITY_BOUNDS),
				springForce.Z * 0.1
			)
		end
		-- localHRP:ApplyImpulse(springForce)
	else
		print("Invalid Spring Force: NaN")
	end
end

function Rope:Disconnect()
	for _, c: RBXScriptConnection in pairs(self.Connections) do
		c:Disconnect()
	end
end

function Rope:Destroy()
	self:Disconnect()

	self.RopeBase1[1]:Destroy()
	self.RopeBase1[2]:Destroy()

	if self.spring then
		self.spring:Destroy()
	end

	if self.Directional then
		self.Directional:Destroy()
	end

	if self.LocalBase and self.LocalBase[1] then
		self.LocalBase[1]:Destroy()
	end

	if self.OtherBase and self.OtherBase[1] then
		self.OtherBase[1]:Destroy()
	end

	setmetatable(self, nil)
	table.clear(self)
	table.freeze(self)
end

return Rope
