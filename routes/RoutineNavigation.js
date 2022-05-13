/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routine from "../screens/Routine/Routine";
import PlannedRoutines from "../screens/Routine/PlannedRoutine";
import RoutineParent from "../screens/Routine/RoutineParent";
import Browse from "../screens/Routine/Browse";
import DailyLearner from "../screens/Gamification/DailyLearners";
const Stack = createNativeStackNavigator();
const RoutineNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName='Routine'
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Routine' component={Routine} />
			<Stack.Screen name='Activities' component={PlannedRoutines} />
			<Stack.Screen name='Daily Learner' component={DailyLearner} />
			<Stack.Screen name='Routine Parent' component={RoutineParent} />
			<Stack.Screen name='Browse' component={Browse} />
		</Stack.Navigator>
	);
};

export default RoutineNavigation;
