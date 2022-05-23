/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Dimensions,
	TouchableOpacity,
	SafeAreaView,
	Alert,
} from "react-native";

import FlashMessage, { showMessage } from "react-native-flash-message";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import GoBack from "../../components/GoBack";
import StyledInput from "../../components/TextInput";
import { emailValidation, emptyInputValidation } from "../../utils/validations";
const { width, height } = Dimensions.get("window");

const SignUP_1 = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const onTapHandler = async () => {
		try {
			if (
				(emptyInputValidation(email) || emptyInputValidation(name)) &&
				emailValidation(email)
			) {
				navigation.navigate("SignUp_3", {
					name,
					email,
				});
				//Set to Empty if navigate back to this screen
				setName("");
				setEmail("");
			} else {
				showMessage({
					message: "EMpty",
				});
			}
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<SafeAreaView>
			<FlashMessage position={"top"} autoHide />
			<GoBack goBack={() => navigation.goBack()} />

			<View
				style={{
					width: width,
					height: height - 40,
					backgroundColor: "#FFF",
					paddingHorizontal: 20,
					paddingVertical: 20,
					flexDirection: "column",
				}}>
				<View>
					<Text
						style={{
							fontSize: 18,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						Join us to help
					</Text>
					<Text
						style={{
							fontSize: 34,
							color: "#F2765A",
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						Your Children
					</Text>
				</View>
				<View>
					<Text
						style={{
							fontSize: 14,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Regular",
							marginTop: 20,
						}}>
						We need your help to setup this account. Help us to fill the nec
						essary information
					</Text>
				</View>
				<View style={{ marginTop: 30 }}>
					<Text
						style={{
							fontSize: 18,
							marginBottom: 20,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						Your <Text style={{ color: "#F2765A" }}>name</Text>?
					</Text>
					<StyledInput
						value={name}
						onChangeText={(text) => setName(text)}
						placeholder='Parent Name'
						placeholderTextColor={"#CCC"}
					/>
				</View>
				<View style={{ marginTop: 30 }}>
					<Text
						style={{
							fontSize: 18,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Bold",
							marginBottom: 20,
						}}>
						Your <Text style={{ color: "#F2765A" }}>email</Text>?
					</Text>
					<StyledInput
						value={email}
						onChangeText={(text) => setEmail(text)}
						placeholder='Email'
						placeholderTextColor={"#CCC"}
					/>
				</View>
				<View style={{ bottom: -150 }}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={onTapHandler}
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
							Next
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default SignUP_1;
