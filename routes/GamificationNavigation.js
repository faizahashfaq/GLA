/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mission from "../screens/Gamification/Mission";
import Achievements from "../screens/Gamification/Achievements";
import DailyChallenges from "../screens/Gamification/DailyChallenges";
import DailyLearner from "../screens/Gamification/DailyLearners";

const Stack = createNativeStackNavigator();
const LoginNavigation = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Mission' component={Mission} />
			<Stack.Screen name='Achievements' component={Achievements} />
			<Stack.Screen name='Daily Challenges' component={DailyChallenges} />
			<Stack.Screen name='Daily Learner' component={DailyLearner} />
		</Stack.Navigator>
	);
};

export default LoginNavigation;
