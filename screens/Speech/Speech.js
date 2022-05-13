/** @format */

import React, { useEffect, useRef, useState } from "react";
import {
	Image,
	SafeAreaView,
	Text,
	View,
	Dimensions,
	Animated,
	TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import * as TextToSpeech from "expo-speech";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import GoBack from "../../components/GoBack";
import { async } from "@firebase/util";

const questions = [
	{
		id: 1,
		imagePath: "ss",
		word: "A",
	},
	{
		id: 2,
		imagePath: "ss",
		word: "B",
	},
	{
		id: 3,
		imagePath: "ss",
		word: "C",
	},
	{
		id: 4,
		imagePath: "ss",
		word: "D",
	},
	{
		id: 5,
		imagePath: "ss",
		word: "E",
	},
];
const { width, height } = Dimensions.get("window");
const Speech = ({ navigation }) => {
	const [currentWord, setCurrentWord] = useState(questions[0].word);
	const [listening, setListening] = useState(false);
	const [progress, setProgress] = useState(0);
	const [questionIndex, setQuestionIndex] = useState(0);
	const translateY = useRef(new Animated.Value(200)).current;
	const animation = () => {
		Animated.timing(translateY, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};
	const listenHandler = () => {
		setListening(false);
		TextToSpeech.speak(currentWord);
		console.log(questionIndex);
	};
	const speechHandler = () => {
		setListening(!listening);
		if (listening === true) {
			console.log(`Listnening: ${listening}`);
			startRecording();
			setQuestionIndex((index) => questions.length !== index && index + 1);

			setCurrentWord(questions[questionIndex].word);
			setProgress(() => (questionIndex + 1) / questions.length);
			animation();
		}
	};
	const startRecording = async () => {
		const { status } = await Audio.requestPermissionsAsync();
		console.log(status);
	};
	const speakingHandler = () => {};
	const progressHandler = () => {
		const totalQuestions = questions.length;
		return questionIndex / totalQuestions;
		//TODO: Questions that are answered correctly
	};
	return (
		<SafeAreaView>
			{/* <GoBack goBack={() => navigation.goBack()} /> */}
			<View style={{ paddingHorizontal: 20 }}>
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						marginTop: 30,
						marginBottom: 20,
					}}>
					<Progress.Bar
						height={15}
						borderRadius={10}
						color={"#F2765A"}
						progress={progress}
						width={width - 40}
						animated={true}
						animationType='timing'
						style={{ backgroundColor: "#E7BD8B", borderWidth: 0 }}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						// justifyContent: "space-between",
						marginTop: 20,
						marginBottom: 25,
						width: Dimensions.get("window").width,
					}}>
					<Text
						style={{
							color: "#F2765A",
							flex: 0.6,
							alignSelf: "flex-start",
							fontSize: 18,

							marginTop: 10,
							fontFamily: "CorsaGrotesk-Black",
						}}>
						Cat’s want to talk to you. Will you?
					</Text>
					<Image
						resizeMode='contain'
						style={{ flex: 0.4, right: 20 }}
						source={require("../../assets/images/tiger_phone.png")}
					/>
				</View>
				<View>
					<Text
						style={{
							fontSize: 16,
							color: "#666",
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						Repeat what it says
					</Text>
					<View
						style={{
							height: 250,
							width: Dimensions.get("window").width - 40,
							borderRadius: 10,
							backgroundColor: "#efefef",
							elevation: 5,
							marginTop: 20,
							marginBottom: 20,
						}}>
						{/* Content Here */}
						<Text>
							{questionIndex !== questions.length &&
								questions[questionIndex].word}
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							marginRight: 30,
						}}>
						<TouchableOpacity
							onPress={() => {
								listenHandler();
							}}
							style={{
								width: 60,
								height: 60,
								borderRadius: 40,
								backgroundColor: "#FFA3BC",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Image
								style={{ width: 40, height: 40 }}
								source={require("../../assets/icons/headphones.png")}
							/>
						</TouchableOpacity>
						<Text
							style={{
								fontSize: 14,
								color: "#505050",
								fontFamily: "CorsaGrotesk-Bold",
								marginTop: 5,
							}}>
							Listen
						</Text>
					</View>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
						}}>
						<TouchableOpacity
							onPress={speechHandler}
							style={{
								width: 60,
								height: 60,
								borderRadius: 40,
								backgroundColor: "#00EDEF",
								alignItems: "center",
								justifyContent: "center",
							}}>
							{listening ? (
								<LottieView
									source={require("../../assets/animations/listening.json")}
									autoPlay
									loop
									autoSize
									resizeMode='cover'
									style={{ width: 60, height: 60 }}
								/>
							) : (
								<Image
									style={{ width: 40, height: 40 }}
									source={require("../../assets/icons/mic.png")}
								/>
							)}
						</TouchableOpacity>
						<Text
							style={{
								fontSize: 14,
								color: "#505050",
								fontFamily: "CorsaGrotesk-Bold",
								marginTop: 5,
							}}>
							Speak
						</Text>
					</View>
				</View>
				<AnimatedFeedback
					text={"Wow, you are making me excited"}
					response={"best"}
					y={translateY}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Speech;

const AnimatedFeedback = ({ y, text, response }) => {
	const imagePath =
		response === "best"
			? require(`../../assets/images/tiger-fire.png`)
			: response === "good"
			? require(`../../assets/images/tiger-heart.png`)
			: response === "average"
			? require(`../../assets/images/tiger-good.png`)
			: require(`../../assets/images/tiger-crying.png`);
	return (
		<Animated.View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				transform: [
					{
						translateY: y,
					},
				],
			}}>
			<Text
				style={{
					fontSize: 18,
					color: "#E08B65",
					fontFamily: "CorsaGrotesk-Black",

					flex: 1,
				}}>
				{text}
			</Text>
			<Image
				resizeMode='contain'
				style={{ width: 110, height: 110 }}
				source={imagePath}
			/>
		</Animated.View>
	);
};
