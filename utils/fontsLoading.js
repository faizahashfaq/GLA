/** @format */
import * as Font from "expo-font";

export default useFonts = async () =>
	await Font.loadAsync({
		"CorsaGrotesk-Regular": require("../assets/fonts/corsa-grotesk-normal.otf"),
		"CorsaGrotesk-Medium": require("../assets/fonts/CorsaGrotesk-Medium.otf"),
		"CorsaGrotesk-Bold": require("../assets/fonts/CorsaGrotesk-Bold.otf"),
		"CorsaGrotesk-Black": require("../assets/fonts/CorsaGrotesk-Black.otf"),
	});
