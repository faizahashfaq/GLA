/** @format */

import React, { useContext, useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Dimensions,
	Button,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import FlashMessage, {
	showMessage,
	hideMessage,
} from "react-native-flash-message";
import { GlobalContext } from "../../context/GlobalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ArrowIcon from "../../assets/icons/RightArrowIcon";
import { emailValidation, emptyInputValidation } from "../../utils/validations";
import StyledInput from "../../components/TextInput";
const { width, height } = Dimensions.get("window");
const App = ({ navigation }) => {
	const { isLoggedIn, setIsLoggedIn } = useContext(GlobalContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLoginHandler = async () => {
		try {
			if (
				(emptyInputValidation(email) || emptyInputValidation(password)) &&
				emailValidation(email)
			)
				if (email === "admin@app.com" && password === "admin") {
					await AsyncStorage.setItem("@isLoggedIn", "1");
					setIsLoggedIn("1");
				} else if (email !== "admin" || password !== "admin") {
					showMessage({
						message: "Incorrect email or password!",
						type: "danger",
					});
				}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<FlashMessage position={"top"} autoHide />
			<View style={{ alignItems: "center", marginBottom: 60 }}>
				<Image
					resizeMode='cover'
					style={{ width: 200, height: 200 }}
					source={require("../../assets/images/space.png")}
				/>
			</View>
			<KeyboardAwareScrollView>
				<StyledInput
					placeholder='Email'
					keyboardType='email-address'
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<StyledInput
					secureTextEntry={true}
					placeholder='Password'
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>

				<TouchableOpacity style={{ alignItems: "flex-end" }}>
					<Text style={{ color: "#F17559", fontFamily: "CorsaGrotesk-Medium" }}>
						Forgot Password?
					</Text>
				</TouchableOpacity>
			</KeyboardAwareScrollView>
			<KeyboardAwareScrollView style={{ marginTop: 80 }}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={() => {
						onLoginHandler();
					}}
					style={{
						alignSelf: "center",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						borderRadius: 5,
						width: width - 40,
						height: 60,
						marginBottom: 20,
						backgroundColor: "#F2765A",
					}}>
					<Text
						style={{
							marginRight: 15,
							fontFamily: "CorsaGrotesk-Bold",
							fontSize: 18,
							color: "#FFF",
						}}>
						GO
					</Text>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						marginTop: 10,
					}}>
					<Text style={{ fontFamily: "CorsaGrotesk-Regular" }}>
						New to GLA?
					</Text>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => navigation.navigate("SignUp_1")}>
						<Text style={{ fontFamily: "CorsaGrotesk-Bold", color: "#F2765A" }}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAwareScrollView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		backgroundColor: "#fff",
		width: width,
		height: height - 20,
		paddingHorizontal: 20,
		paddingTop: 40,
		paddingVertical: 20,
		justifyContent: "center",
	},
	textInput: {
		textAlign: "left",
		height: 60,
		backgroundColor: "#F9F9F9",
		borderRadius: 10,
		paddingHorizontal: 10,
		fontFamily: "CorsaGrotesk-Regular",
		marginBottom: 20,
	},
});

export default App;
