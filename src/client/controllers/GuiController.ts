import { Controller, OnStart } from "@flamework/core";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import currencyApp from "client/ui/apps/currency/currency-app";

@Controller({})
export class GuiController implements OnStart {
	private playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");

	onStart () {
		const root = createRoot( new Instance( "Folder" ) )
		root.render(createPortal(currencyApp(), this.playerGui))
	}
}
