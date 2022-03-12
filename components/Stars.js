/** @format */

import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
const Stars = ({ stars = "167" }) => {
	return (
		<TouchableOpacity
			activeOpacity={1}
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
					fontFamily: "CorsaGrotesk-Bold",
					fontSize: 16,
				}}>
				{stars}
			</Text>
			<Image
				style={{ width: 20, height: 20, marginLeft: 10 }}
				resizeMode="contain"
				source={require("../assets/icons/star.png")}
			/>
		</TouchableOpacity>
	);
};

export default Stars;
