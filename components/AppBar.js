/** @format */

import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import StreakIcon from "../assets/icons/StreakIcon";
import BadgeIcon from "../assets/icons/BadgeIcon";
import StarIcon from "../assets/icons/StarIcon";

const AppBar = ({ stars = "167" }) => {
	return (
		<View
			style={{
				backgroundColor: "#FFF",
				display: "flex",
				flexDirection: "row",
				paddingTop: 35,
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
				<TouchableOpacity
					style={{
						display: "flex",
						flexDirection: "row",

						alignItems: "center",
						backgroundColor: "#F2765A",
						paddingVertical: 7,
						paddingHorizontal: 10,

						borderRadius: 20,
					}}>
					<Text
						style={{
							color: "#FFF",
							fontWeight: "700",
							fontSize: 16,
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						{stars}
					</Text>
					<Image
						style={{ width: 20, height: 20, marginLeft: 10 }}
						resizeMode="contain"
						source={require("../assets/icons/star.png")}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AppBar;
