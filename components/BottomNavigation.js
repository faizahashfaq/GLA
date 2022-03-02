/** @format */

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text } from "react-native";
import Profile from "../screens/Profile";
import Routine from "../screens/Routine/Routine";
import Settings from "../screens/Settings";
import Home from "../screens/Home";
import HomeIcon from "../assets/icons/HomeIcon.js";
import RoutineIcon from "../assets/icons/RoutineIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
import SettingIcon from "../assets/icons/SettingIcon";

const Tab = createMaterialBottomTabNavigator();

function BottomNavigation() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#F2765A"
			inactiveColor="#C4C4C4"
			barStyle={{ backgroundColor: "#fff", padding: 10, color: "#F2765A" }}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
					tabBarLabel: (
						<Text
							style={{
								fontWeight: "800",
							}}>
							Home
						</Text>
					),
				}}
			/>
			<Tab.Screen
				name="Routine"
				component={Routine}
				options={{ tabBarIcon: ({ color }) => <RoutineIcon fill={color} /> }}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{ tabBarIcon: ({ color }) => <ProfileIcon fill={color} /> }}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{ tabBarIcon: ({ color }) => <SettingIcon fill={color} /> }}
			/>
		</Tab.Navigator>
	);
}

export default BottomNavigation;
