/** @format */

import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import StreakIcon from "../assets/icons/StreakIcon";
import BadgeIcon from "../assets/icons/BadgeIcon";
import Stars from "./Stars";

const AppBar = () => {
	return (
		<View
			style={{
				backgroundColor: "#FFF",
				display: "flex",
				flexDirection: "row",
				paddingTop: 20,
				paddingHorizontal: 20,
				paddingBottom: 15,
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<View style={{ display: "flex", flexDirection: "row" }}>
				<TouchableOpacity style={{ marginRight: 25 }}>
					<StreakIcon />
				</TouchableOpacity>
				<TouchableOpacity>
					<BadgeIcon />
				</TouchableOpacity>
			</View>
			<View>
				<Stars />
			</View>
		</View>
	);
};

export default AppBar;
