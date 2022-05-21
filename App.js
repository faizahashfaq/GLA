/** @format */
import AppLoading from "expo-app-loading";
import useFonts from "./utils/fontsLoading";
import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";
import { GlobalProvider } from "./context/GlobalContext";
import GlobalNavigation from "./routes/GlobalNavigation";
import { initializeFirebase } from "./utils/firebaseConfig";
function App() {
	const [IsReady, SetIsReady] = useState(false);
	const LoadFonts = async () => {
		await useFonts();
	};
	// const db = initializeFirebase();
	// useEffect(async () => {
	// 	const snapshot = await db.collection("assets").get();
	// 	console.log(snapshot);
	// }, []);

	if (!IsReady) {
		return (
			<AppLoading
				startAsync={LoadFonts}
				onFinish={() => SetIsReady(true)}
				onError={() => {}}
			/>
		);
	}

	return (
		<GlobalProvider>
			<GlobalNavigation />
			<FlashMessage position={"top"} autoHide />
		</GlobalProvider>
	);
}

LogBox.ignoreLogs([
	"Setting a timer",
	"AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);
export default App;

// const styles = StyleSheet.create({
// 	background: {
// 		backgroundColor: theme.colors.background,
// 		width: responsiveWidth(100),
// 		height: responsiveHeight(100),
// 	},
// });
