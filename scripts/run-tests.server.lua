local ReplicatedStorage = game:GetService("ReplicatedStorage")
local ServerScriptService = game:GetService("ServerScriptService")

local TestEZ = require(ReplicatedStorage.rbxts_include.node_modules["@rbxts"].testez.src)

TestEZ.TestBootstrap:run({
	ServerScriptService.TS.main,
	-- ReplicatedStorage.TS.test,
}, TestEZ.Reporters.TextReporter)
