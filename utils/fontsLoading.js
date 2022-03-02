/** @format */

export const loadingFonts = (useFonts) => {
	let [fontLoaded] = useFonts({
		"CorsaGrotesk-Regular": require("../assets/fonts/corsa-grotesk-normal.otf"),
		"CorsaGrotesk-Medium": require("../assets/fonts/CorsaGrotesk-Medium.otf"),
		"CorsaGrotesk-Bold": require("../assets/fonts/CorsaGrotesk-Bold.otf"),
		"CorsaGrotesk-Black": require("../assets/fonts/CorsaGrotesk-Black.otf"),
	});
	return fontLoaded;
};
