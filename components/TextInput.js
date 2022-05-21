/** @format */

import { TextInput } from "react-native";

import React from "react";

const StyledInput = ({ value, onChangeText, placeholder, ...props }) => {
	return (
		<TextInput
			placeholder={placeholder}
			style={{
				textAlign: "left",
				height: 60,
				backgroundColor: "#F9F9F9",
				borderRadius: 10,
				paddingHorizontal: 10,
				fontFamily: "CorsaGrotesk-Regular",
				marginBottom: 20,
			}}
			{...props}
			value={value}
			onChangeText={onChangeText}
		/>
	);
};

export default StyledInput;
