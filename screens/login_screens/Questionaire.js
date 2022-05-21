/** @format */

import React, { useContext, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoBack from "../../components/GoBack";
const { width, height } = Dimensions.get("window");
import { GlobalContext } from "../../context/GlobalContext";
const Questionaire = ({ navigation }) => {
	const { setIsLoggedIn } = useContext(GlobalContext);
	const [oneWord, setOneWord] = useState({
		never: false,
		rarely: false,
		occasionally: false,
		frequently: false,
	});
	const [twoWords, setTwoWords] = useState({
		never: false,
		rarely: false,
		occasionally: false,
		frequently: false,
	});
	const [levelDifficulty, setLevelDifficulty] = useState(1);
	const difficultyRules = () => {
		if (
			(twoWords.occasionally && threeWords.rarely) ||
			twoWords.frequently ||
			threeWords.rarely
		) {
			setLevelDifficulty(2);
		} else if (
			twoWords.frequently &&
			threeWords.occasionally &&
			oneWord.frequently
		) {
			setLevelDifficulty(3);
		} else if (
			twoWords.frequently &&
			threeWords.frequently &&
			oneWord.frequently
		) {
			setLevelDifficulty(4);
		} else {
			setLevelDifficulty(1);
		}
	};
	const analysingDifficulty = async () => {
		//TODO:Send data to firebase

		difficultyRules();
		// console.log(levelDifficulty);
	};
	const loginLocalStorage = async () => {
		await AsyncStorage.setItem("@isLoggedIn", "1");
		setIsLoggedIn("1");
	};
	const [threeWords, setThreeWords] = useState({
		never: false,
		rarely: false,
		occasionally: false,
		frequently: false,
	});
	const [gestures, setGesture] = useState({
		never: false,
		rarely: false,
		occasionally: false,
		frequently: false,
	});
	const [signs, setSigns] = useState({
		never: false,
		rarely: false,
		occasionally: false,
		frequently: false,
	});
	const [device, setDevice] = useState({
		never: false,
		rarely: false,
		occasionally: false,
		frequently: false,
	});

	return (
		<SafeAreaView>
			<GoBack />
			<ScrollView
				scrollEnabled
				style={{ paddingHorizontal: 20, marginBottom: 70 }}>
				<Text
					style={{
						fontSize: 24,
						fontFamily: "CorsaGrotesk-Black",
						textAlign: "center",
						color: "#505050",
						marginTop: 35,
					}}>
					Speech and Language Development
				</Text>
				<View style={{ marginTop: 20 }}>
					<Text
						style={{
							fontSize: 16,
							fontFamily: "CorsaGrotesk-Medium",
							color: "#999",
							textAlign: "justify",
						}}>
						How often does your child use the following ways to communicate?
					</Text>
					<View key={"questions"} style={{ marginTop: 35 }}>
						<View style={{ marginVertical: 20 }} key={"1 word"}>
							<Text
								style={{
									fontSize: 16,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
									marginBottom: 10,
								}}>
								1 Word
							</Text>
							<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
								<CheckedBox
									title={"Never"}
									onPress={() =>
										setOneWord({
											frequently: false,
											rarely: false,
											occasionally: false,
											never: !oneWord.never,
										})
									}
									state={oneWord.never}
								/>
								<CheckedBox
									title={"Rarely"}
									onPress={() =>
										setOneWord({
											frequently: false,
											rarely: !oneWord.rarely,
											occasionally: false,
											never: false,
										})
									}
									state={oneWord.rarely}
								/>
								<CheckedBox
									title={"Occasionally"}
									onPress={() =>
										setOneWord({
											frequently: false,
											rarely: false,
											occasionally: !oneWord.occasionally,
											never: false,
										})
									}
									state={oneWord.occasionally}
								/>
								<CheckedBox
									title={"Frequently"}
									onPress={() =>
										setOneWord({
											frequently: !oneWord.frequently,
											rarely: false,
											occasionally: false,
											never: false,
										})
									}
									state={oneWord.frequently}
								/>
							</View>
						</View>
						<View style={{ marginVertical: 20 }} key={"2 words"}>
							<Text
								style={{
									fontSize: 16,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
									marginBottom: 10,
								}}>
								2 Words
							</Text>
							<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
								<CheckedBox
									title={"Never"}
									onPress={() =>
										setTwoWords({
											frequently: false,
											rarely: false,
											occasionally: false,
											never: !twoWords.never,
										})
									}
									state={twoWords.never}
								/>
								<CheckedBox
									title={"Rarely"}
									onPress={() =>
										setTwoWords({
											frequently: false,
											rarely: !twoWords.rarely,
											occasionally: false,
											never: false,
										})
									}
									state={twoWords.rarely}
								/>
								<CheckedBox
									title={"Occasionally"}
									onPress={() =>
										setTwoWords({
											frequently: false,
											rarely: false,
											occasionally: !twoWords.occasionally,
											never: false,
										})
									}
									state={twoWords.occasionally}
								/>
								<CheckedBox
									title={"Frequently"}
									onPress={() =>
										setTwoWords({
											frequently: !twoWords.frequently,
											rarely: false,
											occasionally: false,
											never: false,
										})
									}
									state={twoWords.frequently}
								/>
							</View>
						</View>
						<View style={{ marginVertical: 20 }} key={"3 words"}>
							<Text
								style={{
									fontSize: 16,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
									marginBottom: 10,
								}}>
								3 Words
							</Text>
							<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
								<CheckedBox
									title={"Never"}
									onPress={() =>
										setTwoWords({
											frequently: false,
											rarely: false,
											occasionally: false,
											never: !threeWords.never,
										})
									}
									state={threeWords.never}
								/>
								<CheckedBox
									title={"Rarely"}
									onPress={() =>
										setThreeWords({
											frequently: false,
											rarely: !threeWords.rarely,
											occasionally: false,
											never: false,
										})
									}
									state={threeWords.rarely}
								/>
								<CheckedBox
									title={"Occasionally"}
									onPress={() =>
										setThreeWords({
											frequently: false,
											rarely: false,
											occasionally: !threeWords.occasionally,
											never: false,
										})
									}
									state={threeWords.occasionally}
								/>
								<CheckedBox
									title={"Frequently"}
									onPress={() =>
										setThreeWords({
											frequently: !threeWords.frequently,
											rarely: false,
											occasionally: false,
											never: false,
										})
									}
									state={threeWords.frequently}
								/>
							</View>
						</View>
						<View style={{ marginVertical: 20 }} key={"gesture"}>
							<Text
								style={{
									fontSize: 16,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
									marginBottom: 10,
								}}>
								Gestures
							</Text>
							<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
								<CheckedBox
									title={"Never"}
									onPress={() =>
										setTwoWords({
											frequently: false,
											rarely: false,
											occasionally: false,
											never: !gestures.never,
										})
									}
									state={gestures.never}
								/>
								<CheckedBox
									title={"Rarely"}
									onPress={() =>
										setGesture({
											frequently: false,
											rarely: !gestures.rarely,
											occasionally: false,
											never: false,
										})
									}
									state={gestures.rarely}
								/>
								<CheckedBox
									title={"Occasionally"}
									onPress={() =>
										setGesture({
											frequently: false,
											rarely: false,
											occasionally: !gestures.occasionally,
											never: false,
										})
									}
									state={gestures.occasionally}
								/>
								<CheckedBox
									title={"Frequently"}
									onPress={() =>
										setGesture({
											frequently: !gestures.frequently,
											rarely: false,
											occasionally: false,
											never: false,
										})
									}
									state={gestures.frequently}
								/>
							</View>
						</View>
						<View style={{ marginVertical: 20 }} key={"Signs"}>
							<Text
								style={{
									fontSize: 16,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
									marginBottom: 10,
								}}>
								Signs
							</Text>
							<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
								<CheckedBox
									title={"Never"}
									onPress={() =>
										setTwoWords({
											frequently: false,
											rarely: false,
											occasionally: false,
											never: !signs.never,
										})
									}
									state={signs.never}
								/>
								<CheckedBox
									title={"Rarely"}
									onPress={() =>
										setSigns({
											frequently: false,
											rarely: !signs.rarely,
											occasionally: false,
											never: false,
										})
									}
									state={signs.rarely}
								/>
								<CheckedBox
									title={"Occasionally"}
									onPress={() =>
										setSigns({
											frequently: false,
											rarely: false,
											occasionally: !signs.occasionally,
											never: false,
										})
									}
									state={signs.occasionally}
								/>
								<CheckedBox
									title={"Frequently"}
									onPress={() =>
										setSigns({
											frequently: !signs.frequently,
											rarely: false,
											occasionally: false,
											never: false,
										})
									}
									state={signs.frequently}
								/>
							</View>
						</View>
						<View style={{ marginVertical: 20 }} key={"device"}>
							<Text
								style={{
									fontSize: 16,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
									marginBottom: 10,
								}}>
								Communication Device
							</Text>
							<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
								<CheckedBox
									title={"Never"}
									onPress={() =>
										setTwoWords({
											frequently: false,
											rarely: false,
											occasionally: false,
											never: !device.never,
										})
									}
									state={device.never}
								/>
								<CheckedBox
									title={"Rarely"}
									onPress={() =>
										setDevice({
											frequently: false,
											rarely: !device.rarely,
											occasionally: false,
											never: false,
										})
									}
									state={device.rarely}
								/>
								<CheckedBox
									title={"Occasionally"}
									onPress={() =>
										setDevice({
											frequently: false,
											rarely: false,
											occasionally: !device.occasionally,
											never: false,
										})
									}
									state={device.occasionally}
								/>
								<CheckedBox
									title={"Frequently"}
									onPress={() =>
										setDevice({
											frequently: !device.frequently,
											rarely: false,
											occasionally: false,
											never: false,
										})
									}
									state={device.frequently}
								/>
							</View>
						</View>
					</View>
				</View>
				<View>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => {
							analysingDifficulty();

							setIsLoggedIn("1");

							// navigation.navigate("Bottom Navigation", {
							// 	screen: "Home",
							// });
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
							Finish
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export const CheckedBox = ({ title, onPress, state }) => {
	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={onPress}
			style={{
				backgroundColor: state ? "#CCCCCC" : "#e5e5e5",
				alignSelf: "flex-start",
				paddingVertical: 10,
				paddingHorizontal: 20,
				borderRadius: 10,
				marginVertical: 10,
				marginHorizontal: 5,
			}}>
			<Text
				style={{
					fontSize: 16,
					fontFamily: "CorsaGrotesk-Regular",
					color: state ? "#505050" : "#999",
				}}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default Questionaire;
