/** @format */

import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import { BoxShadow } from "react-native-shadow";
const { width } = Dimensions.get("window");
export const TouchableCards = ({
	opacity = "0.5",
	height = 140,
	style,
	color = "#FFF",
	children,
	...props
}) => {
	const shadowOpt = {
		width: width - 45,
		height: height,
		color: color,
		border: 2,
		radius: 5,
		opacity: opacity,
		x: 3,
		y: 4,
		style: { marginVertical: 5, ...style },
	};
	const styles = {
		width: width - 40,
		overflow: "hidden",
		height: height,
		padding: 15,
		backgroundColor: color,
		borderRadius: 5,
		display: "flex",
		flexDirection: "row",
		flex: 1,
	};
	return (
		<BoxShadow setting={shadowOpt}>
			<TouchableOpacity activeOpacity={1} style={styles} {...props}>
				{children}
			</TouchableOpacity>
		</BoxShadow>
	);
};
