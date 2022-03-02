/** @format */

import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	ScrollView,
	Dimensions,
	StyleSheet,
	Image,
} from "react-native";
import LottieView from "lottie-react-native";
import Rocket from "../assets/images/Rocket";
import { TouchableCards } from "../components/TouchableCards";
import AppBar from "../components/AppBar";
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

const Home = ({ user = "Saira" }) => {
	return (
		<SafeAreaView>
			<AppBar />
			<ScrollView
				style={styles.container}
				showsVerticalScrollIndicator={false}
				stickyHeaderHiddenOnScroll={false}>
				{/* Welcome */}
				<WelcomeOnHome user={user} style={styles.welcome} />
				{/* {Levels} */}
				<LevelsOnHome />
				{/* {Daily Challenges} */}
				<DailyChallengeCard />

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

const LevelsOnHome = ({ currentLevels = "9", totalLevels = "50" }) => {
	return (
		<TouchableCards color="#FA98EA">
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

const DailyChallengeCard = () => {
	return (
		<View style={{ position: "relative" }}>
			<TouchableCards color="#FF3C3C" style={{ marginTop: 25 }}>
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
	return (
		<TouchableCards
			color="#3C67FF"
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
					<Text
						style={{
							color: "#F2765A",
							fontSize: 24,
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						12:02:15
					</Text>
				</View>
			</View>
		</TouchableCards>
	);
};
