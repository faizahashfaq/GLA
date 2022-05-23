/** @format */
import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import LeftArrow from "../assets/icons/LeftArrow";
import Stars from "./Stars";
import { GlobalContext, GlobalProvider } from "../context/GlobalContext";
import { useContext } from "react";
export default function GoBack({ routeName, goBack }) {
	const { width } = Dimensions.get("window");
	const { isLoggedIn, allStars } = useContext(GlobalContext);
	return (
		<View
			style={{
				width: width,
				height: 70,
				backgroundColor: "#FFF",
				alignItems: "center",
				justifyContent: "space-between",
				flexDirection: "row",
				paddingHorizontal: 20,
				//For IOS
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22,
				//For Android
				elevation: 3,
			}}>
			<TouchableOpacity onPress={goBack}>
				<LeftArrow fill={"#F2765A"} />
			</TouchableOpacity>
			<Text
				style={{
					color: "#505050",
					fontSize: 24,
					fontFamily: "CorsaGrotesk-Bold",
				}}>
				{routeName}
			</Text>
			{isLoggedIn ? <Stars stars={allStars} /> : <View></View>}
		</View>
	);
}
