/** @format */

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { ThemeContext, ThemeProvider } from "./theme/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import useFonts from "./utils/fontsLoading";
import React, { useState } from "react";
import {
	responsiveHeight,
	responsiveWidth,
} from "react-native-responsive-dimensions";
import Home from "./screens/Home";
import BottomNavigation from "./components/BottomNavigation";
import AppBar from "./components/AppBar";
import RoutineNavigation from "./screens/Routine/RoutineNavigation";

const Stack = createNativeStackNavigator();
function App() {
	const [IsReady, SetIsReady] = useState(false);

	const LoadFonts = async () => {
		await useFonts();
	};

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
		<NavigationContainer>
			<StatusBar />

			<Stack.Navigator>
				<Stack.Screen
					name="Bottom Navigation"
					component={BottomNavigation}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					component={RoutineNavigation}
					name="Routine Navigation"
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;

// const styles = StyleSheet.create({
// 	background: {
// 		backgroundColor: theme.colors.background,
// 		width: responsiveWidth(100),
// 		height: responsiveHeight(100),
// 	},
// });
