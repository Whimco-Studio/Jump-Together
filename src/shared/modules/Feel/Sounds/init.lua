-- Sounds Module Script
-- Created Date: Friday September 22nd 2023 10:51:40 pm CEST
-- Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
-- Last Modified: Wednesday April 17th 2024 9:05:04 pm CEST
-- Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>

--// Services
local SoundService = game:GetService("SoundService")

--// Module
local Sounds = {}

-- Table that holds the sound assets
local SoundDictionary = {
	Bubbles = "rbxassetid://17184316404",
	ButtonPress = "rbxassetid://4925151540",
	WaterDeath = "rbxassetid://17184316187",
	CheckpointReached = "rbxassetid://104076683365642",
}

-- Function to play a sound
function Sounds.Play(SoundName: string, Volume: number, Parent: Instance?)
	local targetSound = SoundDictionary[SoundName]

	if not targetSound then
		warn(SoundName .. " does not exist.")
		return
	end

	Parent = Parent or SoundService

	if Parent:FindFirstChild(SoundName) then
		return
	end

	local Sound = Instance.new("Sound")
	Sound.SoundId = targetSound
	Sound.Volume = Volume
	Sound.Name = SoundName
	Sound.Parent = Parent

	-- Play the sound and destroy it after it finishes
	Sound:Play()

	local SoundEndedConnection
	SoundEndedConnection = Sound.Ended:Connect(function()
		Sound:Destroy()
		SoundEndedConnection:Disconnect()
	end)
end

-- Return the Sounds module
return Sounds
