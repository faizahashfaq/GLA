/** @format */

import React, { useEffect, useRef, useState } from "react";
import {
	Image,
	SafeAreaView,
	Text,
	View,
	Dimensions,
	StyleSheet,
	Animated,
	TouchableOpacity,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
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
	const [newPath, setNewPath] = useState(null);
	const [recording, setRecording] = useState(false);
	const [rewardModal, setRewardModal] = useState(false);
	const [quitModal, setQuitModal] = useState(false);
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
		//Rename the file in the system
		const directory = await FileSystem.documentDirectory;
		const newPath = `${directory}/A.wav`;
		try {
			await FileSystem.moveAsync({
				from: uri,
				to: newPath,
			});
		} catch (e) {
			console.log(`Error from Move Async: ${e}`);
		}

		console.log("Recording stopped and stored at", newPath);
		playSound(newPath);
	}
	const speakingHandler = () => {};
	const progressHandler = () => {
		const totalQuestions = questions.length;
		return questionIndex / totalQuestions;
		//TODO: Questions that are answered correctly
	};
	navigation.addListener("beforeRemove", (e) => {
		e.preventDefault();
		setQuitModal(!quitModal);
		console.log(quitModal);
	});
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
				<View
					style={{
						alignItems: "center",
					}}>
					<Modal
						backdropOpacity={0.9}
						style={{
							width: "90%",
							flex: 0,

							alignContent: "center",
							top: "20%",
							height: 380,
							backgroundColor: "#FFF",
							alignItems: "center",
							justifyContent: "space-evenly",
							borderRadius: 10,
						}}
						isVisible={rewardModal}>
						<View
							style={{
								backgroundColor: "#F7B686",
								height: 55,
								width: "60%",
								borderRadius: 50,
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Text
								style={{
									fontSize: 22,
									color: "#FFFFFF",
									fontFamily: "CorsaGrotesk-Bold",
								}}>
								Completed
							</Text>
						</View>
						<View>
							<Text
								style={{
									fontSize: 18,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
								}}>
								Chapter 5
							</Text>
						</View>
						<View
							style={{
								paddingHorizontal: 30,
								alignSelf: "center",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<StarReward stars={2} />
						</View>
						<View style={{ flexDirection: "row" }}>
							<TouchableOpacity
								activeOpacity={0.9}
								onPress={() => {
									setRewardModal(false);
								}}
								style={{
									backgroundColor: "#F7941D",
									width: 75,
									alignItems: "center",
									height: 50,
									justifyContent: "center",
									borderRadius: 27,
									marginRight: 40,
								}}>
								<Icon name='repeat' size={30} color={"#FFF"} />
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.9}
								onPress={() => {
									navigation.navigate("Chapters");
								}}
								style={{
									backgroundColor: "#F2765A",
									width: 75,
									alignItems: "center",
									height: 50,
									justifyContent: "center",
									borderRadius: 27,
								}}>
								<Icon name='forward' size={30} color={"#FFF"} />
							</TouchableOpacity>
						</View>
					</Modal>
					<Modal
						isVisible={quitModal}
						onBackdropPress={() => setQuitModal(false)}
						style={{
							width: "90%",
							flex: 0,

							alignContent: "center",
							top: "30%",
							height: 250,
							backgroundColor: "#FFF",
							alignItems: "center",
							justifyContent: "space-evenly",
							borderRadius: 10,
						}}>
						<View
							style={{
								alignItems: "center",
							}}>
							<Text
								style={{
									fontFamily: "CorsaGrotesk-Black",
									fontSize: 18,
									color: "#505050",
									marginBottom: 15,
								}}>
								Do you really want to quit?
							</Text>
							<Text
								style={{
									fontFamily: "CorsaGrotesk-Medium",
									fontSize: 14,
									color: "#999",
								}}>
								If you are tired, you can come back again
							</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<TouchableOpacity
								activeOpacity={0.9}
								onPress={() => {
									setQuitModal(false);
								}}
								style={{
									backgroundColor: "#F7941D",
									width: 75,
									alignItems: "center",
									height: 50,
									justifyContent: "center",
									borderRadius: 27,
									marginRight: 40,
								}}>
								<Text
									style={{
										fontSize: 16,
										color: "#FFF",
										fontFamily: "CorsaGrotesk-Black",
									}}>
									Cancel
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.9}
								onPress={() => {
									navigation.goBack();
								}}
								style={{
									backgroundColor: "#F2765A",
									width: 75,
									alignItems: "center",
									height: 50,
									justifyContent: "center",
									borderRadius: 27,
								}}>
								<Text
									style={{
										fontSize: 16,
										color: "#FFF",
										fontFamily: "CorsaGrotesk-Black",
									}}>
									Quit
								</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
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

const StarReward = ({ stars }) => {
	const styles = StyleSheet.create({
		image: {
			flexDirection: "row",
			width: "75%",
			height: 85,
			justifyContent: "space-between",
			alignItems: "flex-end",
		},
		center: {
			alignSelf: "flex-start",
		},
	});
	return (
		<View style={{ alignItems: "center", justifyContent: "center" }}>
			{stars === 1 ? (
				<View style={styles.image}>
					<Image source={require("../../assets/icons/star-filled.png")} />
					<Image
						style={styles.center}
						source={require("../../assets/icons/star-unfilled.png")}
					/>
					<Image source={require("../../assets/icons/star-unfilled.png")} />
				</View>
			) : stars === 2 ? (
				<View style={styles.image}>
					<Image source={require("../../assets/icons/star-filled.png")} />
					<Image
						style={styles.center}
						source={require("../../assets/icons/star-filled.png")}
					/>
					<Image source={require("../../assets/icons/star-unfilled.png")} />
				</View>
			) : (
				<View style={styles.image}>
					<Image source={require("../../assets/icons/star-filled.png")} />
					<Image
						style={styles.center}
						source={require("../../assets/icons/star-filled.png")}
					/>
					<Image source={require("../../assets/icons/star-filled.png")} />
				</View>
			)}
		</View>
	);
};
// {questionIndex !== questions.length &&
// 	questions[questionIndex].word}
