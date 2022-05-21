/** @format */

import React, { useEffect } from "react";
import {
	SafeAreaView,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Dimensions,
	Image,
	Keyboard,
} from "react-native";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppBar from "../components/AppBar";
import Modal from "react-native-modal";
import { GlobalContext } from "../context/GlobalContext";
import Icon from "react-native-vector-icons/Entypo";
const { width, height } = Dimensions.get("window");
const Settings = ({ navigation }) => {
	const { isLoggedIn, setIsLoggedIn, guardianOn, setGuardianOn } =
		React.useContext(GlobalContext);
	const [isModalVisible, setModalVisible] = React.useState(false);

	const onLogOutHandler = async () => {
		try {
			await AsyncStorage.setItem("@isLoggedIn", "0");
			setIsLoggedIn(false);
		} catch (e) {
			console.log(e);
		}
	};
	const toggleModal = () => {
		if (guardianOn) {
			setModalVisible(false);
			setGuardianOn(!guardianOn);
		} else {
			setGuardianOn(false);
			setModalVisible(!isModalVisible);
		}
	};

	return (
		<SafeAreaView>
			<AppBar />
			<View>
				<WrapperModal
					isVisible={isModalVisible}
					setModalVisible={setModalVisible}
					setGuardianOn={setGuardianOn}
				/>
				<TouchableOpacity
					onPress={toggleModal}
					activeOpacity={0.9}
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						backgroundColor: "#eee",
						paddingVertical: 10,
						paddingHorizontal: 20,
						borderBottomColor: "#f0f0f0",
						borderBottomWidth: 3,
					}}>
					<Text
						style={{
							fontSize: 16,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Medium",
						}}>
						Switch to Guardian
					</Text>
					<Switch
						value={guardianOn}
						onTouchStart={() => {
							guardianOn && setModalVisible(false);
							guardianOn === false && setModalVisible(true);
						}}
						onValueChange={() => {
							guardianOn && setGuardianOn(!guardianOn);
						}}
						color={"#F2765A"}
					/>
				</TouchableOpacity>

				{guardianOn && (
					<View>
						<SettingList
							title={"Create Routine"}
							onPress={() => {
								navigation.navigate("Routine Navigation", {
									screen: "Routine Parent",
								});
							}}
						/>
						<SettingList title={"Children"} />
						<SettingList
							title={"Logout"}
							onPress={onLogOutHandler}
							style={{
								color: "#EB5353",
								fontFamily: "CorsaGrotesk-Bold",
							}}
						/>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Settings;

const WrapperModal = ({ isVisible, setModalVisible, setGuardianOn }) => {
	const [sumInput, setSumInput] = React.useState("");
	const [sum, setSum] = React.useState(() => randomOne + randomTwo);
	const [changeStyle, setChangeStyle] = React.useState({
		top: "10%",
		height: 550,
	});
	const randomSum = (randomOne, randomTwo) => {
		return randomOne + randomTwo;
	};
	const [randomOne, setRandomOne] = React.useState(
		parseInt(Math.random().toFixed(2) * 100)
	);
	const [randomTwo, setRandomTwo] = React.useState(
		parseInt(Math.random().toFixed(2) * 100)
	);

	console.log(sum);
	const onCheckHandler = () => {
		if (sum === Number(sumInput)) {
			console.log("pass");
			setModalVisible(!isVisible);
			setSumInput("");
			setRandomOne(parseInt(Math.random().toFixed(2) * 100));
			setRandomTwo(parseInt(Math.random().toFixed(2) * 100));
			setGuardianOn(true);
		} else {
			console.log("Fail");
		}
	};
	Keyboard.addListener("keyboardDidShow", () => {
		setChangeStyle({
			top: 0,
		});
	});
	Keyboard.addListener("keyboardDidShow", () => {
		setChangeStyle({
			top: 0,
		});
	});
	useEffect(() => {
		const sum = randomSum(randomOne, randomTwo);
		setSum(sum);
		return () => {
			setSum({});
		};
	}, [randomOne, randomTwo]);
	return (
		<View
			style={{
				flex: 1,
				height: 40,
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Modal
				deviceHeight={height}
				deviceWidth={width}
				style={{
					flex: 0,
					width: width - 40,
					alignContent: "center",
					top: changeStyle.top,

					height: 550,
					backgroundColor: "#FFF",
					alignItems: "center",
					justifyContent: "space-evenly",
					borderRadius: 10,
				}}
				isVisible={isVisible}>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => setModalVisible(!isVisible)}
					style={{
						backgroundColor: "#ddd",
						borderRadius: 50,
						alignSelf: "flex-end",
						marginHorizontal: 20,
						marginTop: 0,
					}}>
					<Icon name='cross' size={25} color={"#FFF"} />
				</TouchableOpacity>
				<View style={{ alignItems: "center", justifyContent: "center" }}>
					<Text
						style={{
							fontSize: 28,
							color: "#F2765A",
							fontFamily: "CorsaGrotesk-Black",
							marginBottom: 30,
						}}>
						Solve to Switch
					</Text>
					<Image
						resizeMode='cover'
						style={{
							width: 150,
							height: 150,
						}}
						source={require("../assets/images/puzzle.png")}
					/>
				</View>
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Text
						style={{
							fontSize: 18,
							color: "#999",
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						What is {randomOne} +{randomTwo}?
					</Text>
					<TextInput
						keyboardType='number-pad'
						value={sumInput}
						onChangeText={(text) => {
							setSumInput(text);
							console.log(randomOne, randomTwo);
							console.log(sum);
						}}
						style={{
							width: 60,
							height: 60,
							textAlign: "center",
							backgroundColor: "#f0f0f0",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 10,
							marginTop: 20,
							fontSize: 20,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Bold",
							letterSpacing: 2,
							paddingHorizontal: 10,
						}}
					/>
				</View>
				<TouchableOpacity
					activeOpacity={0.9}
					style={{
						backgroundColor: "#F2765A",
						width: width - 120,
						height: 60,
						borderRadius: 10,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={onCheckHandler}>
					<Text
						style={{
							fontSize: 16,
							color: "#fff",
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						Check
					</Text>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

const SettingList = ({ title, onPress, style }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={onPress}
			style={{
				paddingHorizontal: 20,
				paddingVertical: 20,
				backgroundColor: "#fff",
				borderBottomWidth: 0.5,
				borderBottomColor: "#eee",
			}}>
			<Text
				style={{
					fontSize: 16,
					fontFamily: "CorsaGrotesk-Medium",
					color: "#505050",
					...style,
				}}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};
