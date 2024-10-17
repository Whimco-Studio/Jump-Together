--[[
--Created Date: Wednesday July 10th 2024 10:34:15 am CEST
--Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-------
--Last Modified: Wednesday July 10th 2024 11:08:32 am CEST
--Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
--]]
--// Services
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

--// Assets
local Particles = ReplicatedStorage.Assets.Particles

--// Module
local Particle = {}

Particle.ToggleEmitters = function(Parent, State)
	for _, Child: Instance in ipairs(Parent:GetDescendants()) do
		if Child:IsA("ParticleEmitter") or Child:IsA("Beam") then
			Child.Enabled = State
		end
	end
end

Particle.Create = function(ParticleName, Parent)
	if not Parent then
		return
	end

	local Effect = Particles:FindFirstChild(ParticleName):Clone()
	Effect.CFrame = Parent.CFrame
	Effect.Anchored = false
	Effect.Parent = Parent

	local CFrameOffset = Effect:GetAttribute("Offset") :: CFrame

	local Attachment = Instance.new("Attachment")
	Attachment.Parent = Effect

	if CFrameOffset then
		Attachment.CFrame = CFrameOffset
	end

	if Parent:FindFirstChild("Particle") then
		local RigidConstraint = Instance.new("RigidConstraint")
		RigidConstraint.Attachment0 = Attachment
		RigidConstraint.Attachment1 = Parent:FindFirstChild("Particle")
		RigidConstraint.Parent = Effect
	end

	Particle.ToggleEmitters(Effect, true)

	task.delay(Effect:GetAttribute("Duration"), function()
		Particle.ToggleEmitters(Effect, false)
		task.wait(Effect:GetAttribute("Duration"))
		Effect:Destroy()
	end)
end

return Particle
