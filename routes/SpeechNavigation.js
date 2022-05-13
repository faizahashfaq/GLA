/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chapters from "../screens/Speech/Chapters";
import Levels from "../screens/Speech/Levels";
import Speech from "../screens/Speech/Speech";
const Stack = createNativeStackNavigator();
const RoutineNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Levels' component={Levels} />
			<Stack.Screen name='Chapters' component={Chapters} />
			<Stack.Screen name='Speech' component={Speech} />
		</Stack.Navigator>
	);
};

export default RoutineNavigation;
