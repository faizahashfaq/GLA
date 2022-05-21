/** @format */

import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	Text,
	View,
	ScrollView,
	Dimensions,
	StyleSheet,
	Image,
} from "react-native";
import * as Notifications from "expo-notifications";

import CountDown from "react-native-countdown-component";
import LottieView from "lottie-react-native";
import Rocket from "../assets/images/Rocket";
import { TouchableCards } from "../components/TouchableCards";
import AppBar from "../components/AppBar";
import firebase from "../utils/firebaseConfig";

// Current Width & Height of the screen
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginBottom: 60,
	},
	welcome: {
		paddingHorizontal: 15,
		marginTop: 10,
		fontFamily: "CorsaGrotesk-Regular",
		display: "flex",
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

const Home = ({ user = "Saira", navigation }) => {
	const [levels, setLevels] = React.useState([]);
	// async function getLevels() {
	// 	const snapResult = [];
	// 	const querySnapshot = await firebase
	// 		.firestore()
	// 		.collection("guardians")
	// 		.where("Email", "==", "abcd123")
	// 		.get();
	// 	querySnapshot.forEach((doc) => snapResult.push(doc.data()));
	// 	setLevels([...snapResult]);
	// }
	// useEffect(() => {
	// 	getLevels();
	// }, []);
	console.log(levels);
	return (
		<SafeAreaView>
			<AppBar navigation={navigation} />
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
				stickyHeaderHiddenOnScroll={false}>
				{/* Welcome */}
				<WelcomeOnHome user={user} style={styles.welcome} />
				{/* {Levels} */}
				<LevelsOnHome
					onPress={() =>
						navigation.navigate("Speech Navigation", {
							screen: "Levels",
						})
					}
				/>
				{/* {Daily Challenges} */}
				<DailyChallengeCard
					onPress={() => {
						navigation.navigate("Gamification", {
							screen: "Daily Challenges",
						});
					}}
				/>

				{/* {Routine} */}
				<RoutineCard />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const WelcomeOnHome = ({ user, ...props }) => {
	return (
		<View //Welcome Message & Waving Hand
			{...props}
			//style={styles.welcome}
		>
			<View>
				<Text
					style={{
						fontFamily: "CorsaGrotesk-Black",
						fontSize: 22,
						color: "#C1C1C1",
					}}>
					{"Hi & Welcome"}
				</Text>
				<Text
					style={{
						fontFamily: "CorsaGrotesk-Black",
						fontSize: 36,
						color: "#F2765A",
					}}>
					{user}
				</Text>
			</View>
			<View style={{ width: 100, height: 100 }}>
				<LottieView
					source={require("../assets/animations/waving.json")}
					autoPlay
					loop
				/>
			</View>
		</View>
	);
};

const LevelsOnHome = ({
	currentLevels = "9",
	totalLevels = "50",
	...props
}) => {
	return (
		<TouchableCards {...props} color='#FA98EA'>
			<View
				style={{
					flex: 0.8,
					paddingVertical: 15,
				}}>
				<Text
					style={{
						fontSize: 24,
						color: "#fff",
						letterSpacing: 0.7,

						marginBottom: 5,
						fontFamily: "CorsaGrotesk-Black",
					}}>
					Levels
				</Text>
				<Text style={{ color: "#FFF" }}>
					{"Keep Improving your speech learning and keep growing"}
				</Text>
			</View>
			<View
				style={{
					flex: 0.3,
					display: "flex",
					flexDirection: "row",
					paddingVertical: 30,

					justifyContent: "flex-end",
				}}>
				<View
					style={{
						backgroundColor: "#FFCDF7",
						display: "flex",
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 5,
						height: 50,
					}}>
					<Text style={{ color: "#FFF", fontWeight: "700", fontSize: 18 }}>
						{currentLevels}/{totalLevels}
					</Text>
				</View>
			</View>
		</TouchableCards>
	);
};

export const DailyChallengeCard = ({ ...props }) => {
	return (
		<View style={{ position: "relative" }}>
			<TouchableCards {...props} color='#FF3C3C' style={{ marginTop: 25 }}>
				<View
					style={{
						flex: 0.6,
						//paddingVertical: 15,
						paddingRight: 5,
					}}>
					<Text
						style={{
							fontSize: 24,
							fontFamily: "CorsaGrotesk-Black",
							color: "#fff",

							marginBottom: 5,
						}}>
						Daily Challenges
					</Text>
					<Text
						style={{
							color: "#FFF",
							fontFamily: "CorsaGrotesk-Regular",
							fontSize: 14,
						}}>
						{"win extra badges, stars and many more"}
					</Text>
				</View>
				<View
					style={{
						flex: 0.4,

						//backgroundColor: "#999",
					}}></View>
			</TouchableCards>
			<View
				style={{
					position: "absolute",
					right: 0,
					marginTop: 15,
					marginRight: 5,
				}}>
				<Rocket />
			</View>
		</View>
	);
};

const RoutineCard = () => {
	const [token, setToken] = useState(null);
	const SECRET_KEY =
		"AAAAJG6AsiA:APA91bGx19XgIVCeSztSp71zn0k_b9XNs15ssvbvMUQDaKP5LgHhs0pQ7V0SNZC4qKZcr7weVtr8e5M6WA7KEPFcAWIpJy8VHs5vyMbeXqzhfXcADJ-Kb3GIPGZ96QNiYe_yJBd9HiRC";

	console.log(token);
	const sendNotification = async () => {
		const tokenDevice = (await Notifications.getDevicePushTokenAsync()).data;
		setToken(tokenDevice);

		await fetch(
			"https://fcm.googleapis.com/v1/projects/project-156472750624/messages:send",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `key=${SECRET_KEY}`,
				},
				body: JSON.stringify({
					to: token,
					priority: "normal",
					data: {
						experienceId: "@huzaifastudios/fyp-gla",
						scopeKey: "@huzaifastudios/fyp-gla",
						title: "\uD83D\uDCE7 You've got mail",
						message: "Hello world! \uD83C\uDF10",
					},
				}),
			}
		).catch((err) => console.log(err));
	};

	return (
		<TouchableCards
			color='#3C67FF'
			style={{ marginTop: 25, height: 295, marginBottom: 20 }}>
			<View
				style={{
					display: "flex",
					alignItems: "center",
					flex: 1,
					justifyContent: "space-between",
					flexDirection: "column",
				}}>
				<Text
					style={{
						color: "#FFF",
						fontSize: 18,
						fontFamily: "CorsaGrotesk-Black",
					}}>
					Upcoming Routine
				</Text>
				<Text
					style={{
						color: "#FFF",
						fontSize: 14,
						fontFamily: "CorsaGrotesk-Regular",
					}}>
					Going to sleep
				</Text>
				<Image source={require("../assets/images/sleeping.png")} />
				<View
					style={{
						height: 50,
						width: width / 2,
						backgroundColor: "#FFF",
						borderRadius: 30,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<CountDown
						until={10}
						onFinish={() => {
							sendNotification();
						}}
						digitStyle={{
							backgroundColor: "#FFF",
						}}
						digitTxtStyle={{
							color: "#F2765A",
							fontFamily: "CorsaGrotesk-Bold",
							fontSize: 20,
						}}
						separatorStyle={{ color: "#F2765A" }}
						timeToShow={["H", "M", "S"]}
						timeLabels={{ m: null, s: null }}
						showSeparator
						style={{}}
					/>
				</View>
			</View>
		</TouchableCards>
	);
};
