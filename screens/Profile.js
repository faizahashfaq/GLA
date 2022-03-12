/** @format */

import React from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	Dimensions,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import {
	responsiveHeight,
	responsiveWidth,
} from "react-native-responsive-dimensions";
import StreakIcon from "../assets/icons/StreakIcon";
import MissionIcon from "../assets/icons/BadgeIcon";
import LevelIcon from "../assets/icons/LevelIcon";
import SpeechIcon from "../assets/icons/SpeechIcon";
import AppBar from "../components/AppBar";

const { width, height } = Dimensions.get("window");
const Profile = () => {
	return (
		<SafeAreaView>
			<AppBar />
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ marginHorizontal: 20, marginBottom: 70, marginTop: 20 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						flex: 1,
						marginBottom: 20,

						//height: responsiveHeight(25),
					}}>
					<View style={{ flex: 0.7 }}>
						<Text
							style={{
								fontFamily: "CorsaGrotesk-Bold",
								fontSize: 22,
								color: "#666",
								marginBottom: 5,
							}}>
							Muhammad Saad
						</Text>
						<TouchableOpacity>
							<Text
								style={{
									color: "#999",
									fontSize: 14,
									fontFamily: "CorsaGrotesk-Regular",
								}}>
								Edit Profile
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							borderRadius: 50,
							overflow: "hidden",
							flex: 0.3,
							flexDirection: "row",
							alignSelf: "flex-end",
							alignItems: "center",
							justifyContent: "flex-end",
						}}>
						<Image
							resizeMode="cover"
							style={{
								width: 80,
								height: 80,
								borderRadius: 80,
							}}
							source={require("../assets/images/profile.jpg")}
						/>
					</View>
				</View>
				<View
					style={{
						height: 1,
						backgroundColor: "#ccc",
						width: width,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}></View>
				<View style={{ marginTop: 20 }}>
					<Text
						style={{
							marginBottom: 20,
							fontFamily: "CorsaGrotesk-Bold",
							fontSize: 20,
							color: "#505050",
						}}>
						Statistics
					</Text>
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-between",
						}}>
						<Statistics
							color={"#D36637"}
							background={"#FFD6BD"}
							title={"Streak"}
							icon={<StreakIcon />}
							stat={"10"}
						/>
						<Statistics
							color={"#FD6BBA"}
							background={"#FFD6EB"}
							title={"Missions"}
							icon={<MissionIcon />}
							stat={"120"}
						/>
						<Statistics
							color={"#37D346"}
							background={"#CEFFBD"}
							title={"Levels"}
							icon={<LevelIcon />}
							stat={"40"}
						/>
						<Statistics
							color={"#976BCF"}
							background={"#EDD6FF"}
							title={"Speech"}
							icon={<SpeechIcon />}
							stat={"30%"}
						/>
					</View>
				</View>
				<View>
					<Text
						style={{
							marginBottom: 20,
							fontFamily: "CorsaGrotesk-Bold",
							fontSize: 20,
							color: "#505050",
						}}>
						Achievements
					</Text>
					<AchievementCard
						title={"Marathon"}
						description={"Completing Trainee in 2 days"}
						image={require("../assets/images/marathon.png")}
					/>
					<AchievementCard
						title={"Marathon"}
						description={"Completing Trainee in 2 days"}
						image={require("../assets/images/marathon.png")}
					/>
					<AchievementCard
						title={"Marathon"}
						description={"Completing Trainee in 2 days"}
						image={require("../assets/images/marathon.png")}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;

const Statistics = ({ color, background, title, icon, stat }) => {
	return (
		<View
			style={{
				width: width * 0.42,
				height: responsiveHeight(12),
				borderRadius: 5,
				backgroundColor: background,
				borderWidth: 2,
				marginBottom: 20,
				borderColor: color,
			}}>
			<View style={{ marginLeft: 10, marginTop: 10, flexDirection: "row" }}>
				{icon}
				<Text
					style={{
						alignSelf: "flex-start",
						marginLeft: 10,
						fontSize: 16,
						fontFamily: "CorsaGrotesk-Bold",
						color: color,
					}}>
					{title}
				</Text>
			</View>
			<Text
				style={{
					alignSelf: "flex-end",
					flexDirection: "row",
					justifyContent: "flex-end",
					flex: 1,
					fontFamily: "CorsaGrotesk-Bold",
					fontSize: 36,
					marginRight: 10,
					color: color,
				}}>
				{stat}
			</Text>
		</View>
	);
};

const AchievementCard = ({ image, title, description, completed = true }) => {
	return (
		<View
			style={{
				//height: 100,
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
					resizeMode="contain"
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
		</View>
	);
};
