/** @format */

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, useContext } from "react";
import BottomNavigation from "../components/BottomNavigation";
import RoutineNavigation from "./RoutineNavigation";
import LoginNavigation from "./LoginNavigation";
import GamificationNavigation from "./GamificationNavigation";
import SpeechNavigation from "./SpeechNavigation";
import { GlobalContext } from "../context/GlobalContext";

const Stack = createNativeStackNavigator();

const GlobalNavigation = () => {
	const { isLoggedIn } = useContext(GlobalContext);
	console.log(isLoggedIn);
	return (
		<NavigationContainer>
			<StatusBar />

			<Stack.Navigator>
				{!isLoggedIn ? (
					<Stack.Screen
						name='Startup'
						component={LoginNavigation}
						options={{ headerShown: false }}
					/>
				) : (
					<Stack.Group screenOptions={{ headerShown: false }}>
						<Stack.Screen
							name='Bottom Navigation'
							component={BottomNavigation}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							component={RoutineNavigation}
							name='Routine Navigation'
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name='Speech Navigation'
							component={SpeechNavigation}
						/>

						<Stack.Screen
							name='Gamification'
							component={GamificationNavigation}
						/>
					</Stack.Group>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default GlobalNavigation;
