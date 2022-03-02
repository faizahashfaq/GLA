/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ThemeContext, ThemeProvider } from "./theme/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { loadingFonts } from "./utils/fontsLoading";
import React from "react";
import {
	responsiveHeight,
	responsiveWidth,
} from "react-native-responsive-dimensions";
import Home from "./screens/Home";
import BottomNavigation from "./components/BottomNavigation";
import AppBar from "./components/AppBar";

const Stack = createNativeStackNavigator();
function App() {
	const theme = React.useContext(ThemeContext);
	const fonts = loadingFonts(useFonts);
	if (!fonts) {
		return <AppLoading />;
	}
	return (
		<NavigationContainer>
			<StatusBar backgroundColor="#fff" />
			<AppBar />
			<Stack.Navigator>
				<Stack.Group>
					<Stack.Screen
						name="Bottom Navigation"
						component={BottomNavigation}
						options={{ headerShown: false }}
					/>
				</Stack.Group>
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
