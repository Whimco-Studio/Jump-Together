-- Optimized Particles Module

--// Services
local RunService = game:GetService("RunService")

--// Dependencies
local Library = script.Parent
local Lerp = require(Library.Lerp)

--// Module
local Particles = {}

-- Constants
local MAX_PARTICLES = 100 -- Limit on the number of active particles to prevent performance issues

-- Helper function to validate and return a particle object
local function Checker(ParticlesObject: table | string)
	if type(ParticlesObject) ~= "table" and type(ParticlesObject) ~= "string" then
		error("First arg needs to be a table or string")
	end

	if type(ParticlesObject) == "string" then
		ParticlesObject = Particles[ParticlesObject]
	end

	return ParticlesObject
end

-- Reuse particle instances instead of creating and destroying them repeatedly
local function MakeParticle(Mesh: BasePart | MeshPart, CF: CFrame, Cache: { BasePart })
	local Particle
	if #Cache > 0 then
		Particle = table.remove(Cache)
		Particle.CFrame = CF
		Particle.Size = Vector3.new() -- Reset size
		Particle.Transparency = 0 -- Ensure particle is visible again
		Particle.Parent = workspace -- Re-parent it to make sure it's visible
	else
		Particle = Mesh[math.random(1, #Mesh)]:Clone()
		Particle.Size = Vector3.new()
		Particle.CanCollide = false
		Particle.CFrame = CF
		Particle.Anchored = true
		Particle.Parent = workspace
	end

	Particle.Orientation = Vector3.new(math.random(-360, 360), math.random(-360, 360), math.random(-360, 360))
	return Particle
end

-- Particle Class Constructor
function Particles.create(key: string | Instance, Humanoid: Humanoid, Mesh: MeshPart | {}, Offset): ParticleClass
	if not Humanoid or not Mesh then
		error("Humanoid and Mesh are required")
	end

	local self: ParticleClass = {
		key = key,
		Active = true,
		CanCreateParticle = true,
		Mesh = (Mesh:IsA("MeshPart") and not nil) and { Mesh } or Mesh,
		Base = Humanoid.Parent:FindFirstChild("HumanoidRootPart"),
		Humanoid = Humanoid,
		Connections = {},
		Cache = {}, -- Initialize cache for particle reuse
		ActiveParticles = 0, -- Track active particles to prevent performance overload
	}

	self.Offset = Offset or CFrame.new(0, -self.Base.Size.Y / 2, self.Base.Size.Z / 2)
	Particles[key] = self
	return self
end

-- Create a single particle, optimizing to prevent excessive particle count
function Particles.CreateParticle(key: string | {})
	local self = Checker(key)

	if self.ActiveParticles >= MAX_PARTICLES then
		-- print("Max Particles Reached")
		return -- Don't create more particles if the max limit is reached
	end

	local CurrentState = self.Humanoid:GetState()
	if
		self.Humanoid.Sit
		or CurrentState == Enum.HumanoidStateType.Jumping
		or CurrentState == Enum.HumanoidStateType.Freefall
		or CurrentState == Enum.HumanoidStateType.FallingDown
	then
		-- print("Not Creating Particle")
		return
	end

	local Particle = MakeParticle(self.Mesh, self.Base.CFrame * self.Offset, self.Cache)
	Lerp.Size(Particle, Particle.Size * math.random(70, 100) / 100, 0.25, true)

	-- print(Particle)

	self.ActiveParticles += 1
	task.defer(function()
		task.wait(1)
		-- Cache the particle for reuse
		table.insert(self.Cache, Particle)
		self.ActiveParticles -= 1
	end)
end

-- Create a radial pattern of particles, optimizing the process
function Particles.CreateRadialParticle(key: string | {}, Destination: Vector3)
	local self = Checker(key)

	if self.ActiveParticles >= MAX_PARTICLES then
		return -- Don't create more particles if the max limit is reached
	end

	local Particle = MakeParticle(self.Mesh, self.Base.CFrame * CFrame.new(0, -self.Base.Size.Y / 2, 0), self.Cache)

	Lerp.CFrameAndSize(Particle, CFrame.new(Destination), Particle.Size * math.random(70, 100) / 100, 0.25)
	Lerp.Size(Particle, Vector3.new(), 0.25)

	self.ActiveParticles += 1
	task.defer(function()
		task.wait(1)
		-- Cache the particle for reuse
		table.insert(self.Cache, Particle)
		self.ActiveParticles -= 1
	end)
end

-- Create particles in a radial pattern when the humanoid lands
function Particles.Landed(key: string | {})
	local self = Checker(key)

	if self.ActiveParticles >= MAX_PARTICLES then
		return -- Don't create more particles if the max limit is reached
	end

	local radius = self.Base.Size.Magnitude * 0.5
	local numParticles = math.random(3, 4)

	for i = 1, numParticles do
		local angle = i * 2 * math.pi / numParticles
		local position = Vector3.new(math.sin(angle), 0, math.cos(angle)) * radius

		task.defer(function() -- Spread out particle creation over multiple frames
			Particles.CreateRadialParticle(
				self,
				(self.Base.CFrame.Position - Vector3.new(0, self.Base.Size.Y / 2, 0)) + position
			)
		end)
	end
end

-- Connect particle system to humanoid events and movement
function Particles.Connect(key: string | {})
	local self = Checker(key)

	local function onMove()
		-- print("Moving 1", self.Humanoid.MoveDirection.Magnitude)
		if self.Humanoid.MoveDirection.Magnitude > 0 and not self.Active then
			self.Active = true
			-- print("Moving 2")
			while self.Active and self.Connections and self.Connections["MoveDirection"] do
				-- print("Creating Particle")
				Particles.CreateParticle(self)
				task.wait(0.05) -- Create particles less frequently
			end
		else
			self.Active = false
		end
	end

	self.Connections["MoveDirection"] = self.Humanoid:GetPropertyChangedSignal("MoveDirection"):Connect(onMove)

	self.Connections["HumanoidState"] = self.Humanoid.StateChanged:Connect(function(_, newState)
		if newState == Enum.HumanoidStateType.Landed then
			Particles.Landed(self)
		end
	end)
end

-- Disconnect and remove connections efficiently
function Particles.Disconnect(key: string | {}, connection: string?)
	local self = Checker(key)

	if connection then
		self.Connections[connection]:Disconnect()
		self.Connections[connection] = nil
	else
		for k, conn in pairs(self.Connections) do
			conn:Disconnect()
			self.Connections[k] = nil
		end
	end
end

-- Cleanup and free up memory
function Particles.Destroy(key: string | {})
	local self = Checker(key)
	Particles.Disconnect(self)
	table.clear(self.Cache)
	table.clear(self)
	table.freeze(self)
end

-- Toggle the particle system on or off
function Particles.Toggle(key: string | {}, activate: boolean)
	local self = Checker(key)
	if activate then
		Particles.Connect(self)
	else
		Particles.Disconnect(self)
	end
end

return Particles
