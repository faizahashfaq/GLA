/** @format */

import React, { useContext } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import StreakIcon from "../assets/icons/StreakIcon";
import BadgeIcon from "../assets/icons/BadgeIcon";
import Stars from "./Stars";
import { GlobalContext } from "../context/GlobalContext";
const AppBar = ({ navigation }) => {
	const { allStars } = useContext(GlobalContext);
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
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("Gamification", {
							screen: "Mission",
						})
					}>
					<BadgeIcon />
				</TouchableOpacity>
			</View>
			<View>
				<Stars stars={allStars} />
			</View>
		</View>
	);
};

export default AppBar;
