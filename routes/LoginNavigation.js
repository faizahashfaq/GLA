/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import LoginScreen from "../screens/login_screens/login";
import SignUP_1 from "../screens/login_screens/sign_up1";
import SignUP_2 from "../screens/login_screens/sign_up2";
import SignUP_3 from "../screens/login_screens/sign_up3";
import CongratulationScreen from "../screens/login_screens/CongratulationScreen";
import ChildInformation from "../screens/login_screens/ChildInformation";
import Questionaire from "../screens/login_screens/Questionaire";
const Stack = createNativeStackNavigator();
const LoginNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName='Login'
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Group>
				<Stack.Screen name='SignUp_1' component={SignUP_1} />
				<Stack.Screen name='SignUp_2' component={SignUP_2} />
				<Stack.Screen name='SignUp_3' component={SignUP_3} />
			</Stack.Group>
			<Stack.Screen name='congrats' component={CongratulationScreen} />
			<Stack.Screen name='child_basic_info' component={ChildInformation} />
			<Stack.Screen name='questionaire' component={Questionaire} />
		</Stack.Navigator>
	);
};

export default LoginNavigation;
