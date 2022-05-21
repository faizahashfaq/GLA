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
const lettersPath = "../../assets/images/alphabets";
const questions = [
	{
		id: 1,
		imagePath: `${lettersPath}/letter-a`,
		word: "A",
	},
	{
		id: 2,
		imagePath: `${lettersPath}/letter-b`,
		word: "B",
	},
	{
		id: 3,
		imagePath: `${lettersPath}/letter-c`,
		word: "C",
	},
	{
		id: 4,
		imagePath: `${lettersPath}/letter-d`,
		word: "D",
	},
	{
		id: 5,
		imagePath: `${lettersPath}/letter-e`,
		word: "E",
	},
];

const recordingOptions = {
	android: {
		extension: ".wav",
		outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
		audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
		sampleRate: 44100,
		numberOfChannels: 1,
		bitRate: 128000,
	},
	ios: {
		extension: ".wav",
		audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
		sampleRate: 44100,
		numberOfChannels: 1,
		bitRate: 128000,
		linearPCMBitDepth: 16,
		linearPCMIsBigEndian: false,
		linearPCMIsFloat: false,
	},
};
const { width, height } = Dimensions.get("window");
const Speech = ({ navigation }) => {
	const [currentWord, setCurrentWord] = useState(questions[0].word);
	const [listening, setListening] = useState(false);
	const [recording, setRecording] = useState(false);
	const [record, setRecord] = useState(null);
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
			setQuestionIndex((index) => questions.length !== index && index + 1);

			setCurrentWord(questions[questionIndex].word);
			setProgress(() => (questionIndex + 1) / questions.length);
			animation();
		}
	};
	async function startRecording() {
		try {
			console.log("Requesting permissions..");
			await Audio.requestPermissionsAsync();
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});
			console.log("Starting recording..");
			const { recording } = await Audio.Recording.createAsync(recordingOptions);
			setRecording(recording);
			console.log("Recording started");
		} catch (err) {
			console.error("Failed to start recording", err);
		}
	}
	const [sound, setSound] = React.useState();

	async function playSound(uri) {
		console.log("Loading Sound");
		const { sound } = await Audio.Sound.createAsync({
			uri: uri,
		});
		setSound(sound);

		console.log("Playing Sound");
		await sound.playAsync();
	}

	React.useEffect(() => {
		return sound
			? () => {
					console.log("Unloading Sound");
					sound.unloadAsync();
			  }
			: undefined;
	}, [sound]);

	async function stopRecording() {
		console.log("Stopping recording..");
		setRecording(false);
		await recording.stopAndUnloadAsync();
		const uri = recording.getURI();
		console.log("Recording stopped and stored at", uri);
		playSound(uri);
	}
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
							alignItems: "center",
							justifyContent: "center",
						}}>
						{/* Content Here */}

						<Image
							resizeMethod='scale'
							resizeMode='cover'
							style={{
								width: 140,
								height: 140,
							}}
							source={require("../../assets/images/alphabets/letter-c.png")}
						/>
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
							activeOpacity={1}
							//onPress={speechHandler}
							onPressIn={startRecording}
							onPressOut={stopRecording}
							style={{
								width: 60,
								height: 60,
								borderRadius: 40,
								backgroundColor: "#00EDEF",
								alignItems: "center",
								justifyContent: "center",
							}}>
							{recording ? (
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

// {questionIndex !== questions.length &&
// 	questions[questionIndex].word}
