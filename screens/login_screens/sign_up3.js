/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	Keyboard,
	ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import GoBack from "../../components/GoBack";
import { GlobalContext } from "../../context/GlobalContext";
import StyledInput from "../../components/TextInput";
import {
	emptyInputValidation,
	passwordSecurityCheck,
} from "../../utils/validations";
import { userSignup } from "../../utils/APIs/FirebaseFunctions";
import FlashMessage from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");

const SignUP_3 = ({ route, navigation }) => {
	const { userId, setUserId } = useContext(GlobalContext);
	//Name and Email from previous screen
	const { name, email } = route.params;
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	let user = {
		name: name,
		email: email,
		password: password,
	};

	const [imageDisplay, setImageDisplay] = useState({
		display: "flex",
		marginTop: 30,
	});

	const onPasswordConfirm = async () => {
		if (
			(emptyInputValidation(password) ||
				emptyInputValidation(confirmPassword)) &&
			passwordSecurityCheck(password)
		) {
			//Done: Async Firebase Database Save
			if (password === confirmPassword) {
				userSignup(user).then(async (userId) => {
					//Updating state if userId globally
					setUserId(userId);
					//Setting to local storage
					await AsyncStorage.setItem("@userId", userId);
					console.log(`Guardian ID: ${userId}`);
					navigation.navigate("congrats");
				});
			}

			setPassword("");
			setConfirmPassword("");
		} else {
			console.log("Try again");
		}
	};
	Keyboard.addListener("keyboardDidShow", () => {
		setImageDisplay({
			display: "none",
			marginTop: 0,
		});
	});
	Keyboard.addListener("keyboardDidHide", () => {
		setImageDisplay({
			display: "flex",
			marginTop: 25,
		});
	});
	return (
		<SafeAreaView>
			<GoBack goBack={() => navigation.goBack()} />
			<FlashMessage />
			<View
				style={{
					paddingHorizontal: 20,
					width: width,
					height: height,
					backgroundColor: "#FFF",
				}}>
				<View
					style={{
						alignItems: "center",
						marginTop: imageDisplay.marginTop,
						marginBottom: 60,
					}}>
					<Image
						resizeMode='cover'
						style={{ width: 150, height: 150, display: imageDisplay.display }}
						source={require("../../assets/images/letter.png")}
					/>
				</View>
				<View style={{ marginTop: imageDisplay.marginTop }}>
					<Text
						style={{
							fontSize: 18,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Bold",
							marginBottom: 20,
						}}>
						Write the <Text style={{ color: "#F2765A" }}>strong Password</Text>
					</Text>
					<StyledInput
						value={password}
						onChangeText={(text) => setPassword(text)}
						placeholder='Password'
						placeholderTextColor={"#CCC"}
						secureTextEntry={true}
					/>
					<StyledInput
						value={confirmPassword}
						onChangeText={(text) => setConfirmPassword(text)}
						placeholder='Confirm Password'
						placeholderTextColor={"#CCC"}
						secureTextEntry={true}
					/>
				</View>
				<View>
					<Text
						style={{
							color: "#c1c1c1",
							marginTop: 10,
							fontFamily: "CorsaGrotesk-Regular",
							lineHeight: 14,
							fontSize: 12,
						}}>
						Must be 8 chrecter or Long
						{"\n"}
						Have special chrecter e.g.#,@,$
						{"\n"}
						Must contain numbers
					</Text>
				</View>
				<View style={{ bottom: -60 }}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={onPasswordConfirm}
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
							Confirm
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	back_icon: {
		padding: "2%",
		paddingTop: "6%",
		alignItems: "flex-start",
		margin: 0,
	},
	container: {
		flexDirection: "column",
		flex: 1,
		backgroundColor: "#fff",
		width: "100%",
		height: "100%",
		marginTop: 50,
	},
	emailimg: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: "10%",
		width: null,
		resizeMode: "contain",
	},
	uppersec: {
		margin: "1%",
		marginTop: 0,
		paddingLeft: "10%",
		paddingRight: "10%",
	},
	text: {
		fontSize: 14,
		color: "black",
		fontFamily: "CorsaGrotesk-Medium",
	},

	paragraph: {},
	q1: {
		flexDirection: "row",
		paddingTop: "0%",
		paddingBottom: "5%",
		marginTop: "15%",
		alignItems: "center",
	},
	email: {
		color: "#F2765A",
		fontWeight: "bold",
	},
	inputView1: {
		backgroundColor: "#F9F9F9",
		height: 50,
		borderRadius: 25,
		width: "100%",
		paddingLeft: 0,
		marginBottom: "5%",
		justifyContent: "center",
	},
	textbox: {
		marginLeft: "10%",
	},

	nexttext: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	botom_part: {
		position: "absolute",
		flex: 2,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		bottom: "0%",
	},
	nextBtn: {
		flex: 1,
		flexDirection: "row",
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F2765A",
		bottom: "5%",
		marginBottom: "5%",
	},
});
export default SignUP_3;

{
	/*  */
}
