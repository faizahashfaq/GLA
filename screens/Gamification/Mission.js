/** @format */

import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	Dimensions,
	Image,
	ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GoBack from "../../components/GoBack";
import { DailyChallengeCard } from "../Home";
const { width, height } = Dimensions.get("window");
const Mission = ({ route, navigation }) => {
	return (
		<SafeAreaView>
			<GoBack routeName={route.name} goBack={() => navigation.goBack()} />
			<View style={{ paddingHorizontal: 20 }}>
				<DailyChallengeCard
					onPress={() =>
						navigation.navigate("Gamification", {
							screen: "Daily Challenges",
						})
					}
				/>
				<View style={{ marginVertical: 20 }}>
					<Text
						style={{
							fontSize: 20,
							fontFamily: "CorsaGrotesk-Bold",
							color: "#505050",
						}}>
						Mission 1
					</Text>
				</View>
				<ScrollView>
					<AchievementCard
						title={"Trainee Award"}
						description={"Complete all chapters in Trainee Level"}
						image={require("../../assets/images/marathon.png")}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Mission;

const AchievementCard = ({
	image,
	title,
	description,
	completed = true,
	button,
}) => {
	return (
		<View
			style={{
				height: 100,
				width: width - 40,
				flexDirection: "row",
				alignItems: "center",
				borderRadius: 5,
				backgroundColor: "#FFF",
				paddingHorizontal: 10,
				marginBottom: 20,
				paddingVertical: 15,
				flex: 1,
			}}>
			<View
				style={{
					width: 70,
					height: 70,
					backgroundColor: "#9A6BFD",
					borderRadius: 5,
					marginRight: 20,
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
				}}>
				<Image
					resizeMode='contain'
					style={{
						width: 55,
						height: 55,
					}}
					source={image}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<Text
					style={{
						fontSize: 18,
						color: "#505050",
						marginBottom: 10,
						fontFamily: "CorsaGrotesk-Bold",
					}}>
					{title}
				</Text>
				<Text
					style={{
						fontSize: 12,
						width: 200,
						textAlign: "left",
						color: "#999",
						fontFamily: "CorsaGrotesk-Regular",
					}}>
					{description}
				</Text>
			</View>
			<TouchableOpacity>
				<Text>Claim Reward</Text>
			</TouchableOpacity>
		</View>
	);
};
