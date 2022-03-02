/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routine from "./Routine";
import PlannedRoutines from "./PlannedRoutine";
import DailyLearner from "./DailyLearner";
const Stack = createNativeStackNavigator();
const RoutineNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName="Routine"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Routine" component={Routine} />
			<Stack.Screen name="Activities" component={PlannedRoutines} />
			<Stack.Screen name="Daily Learner" component={DailyLearner} />
		</Stack.Navigator>
	);
};

export default RoutineNavigation;
