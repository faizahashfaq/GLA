/** @format */

import React from "react";
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
	Image,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");
const AchievementReward = ({ route, navigation }) => {
	const { awardName } = route.params;
	return (
		<SafeAreaView>
			<View
				style={{
					paddingHorizontal: 20,
					paddingTop: 30,
					backgroundColor: "#9400FF",
					width: width,
					height: height,
					alignItems: "center",
					paddingVertical: 30,
					justifyContent: "space-between",
				}}>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => navigation.goBack()}
					style={{
						alignSelf: "flex-end",
						flexDirection: "row",
						backgroundColor: "rgba(255,255,255,0.5)",
						borderRadius: 40,
					}}>
					<Icon name='cross' color={"#fff"} size={22} />
				</TouchableOpacity>
				<View>
					<Text
						style={{
							fontSize: 32,
							color: "#fff",
							fontFamily: "CorsaGrotesk-Bold",
							textAlign: "center",
							alignSelf: "center",
							marginBottom: 30,
						}}>
						Congratulations
					</Text>
					<Text
						style={{
							fontSize: 14,
							color: "#e5e5e5",
							fontFamily: "CorsaGrotesk-Medium",
							textAlign: "center",
							alignSelf: "center",
						}}>
						You have won the{" "}
						<Text style={{ fontFamily: "CorsaGrotesk-Bold" }}>
							{awardName} {"award "}
						</Text>
						for your momentum
					</Text>
				</View>
				<View style={{ position: "relative", alignSelf: "center" }}>
					<LottieView
						source={require("../../assets/animations/reward_lights.json")}
						autoPlay
						loop
						autoSize
						resizeMode='cover'
						style={{
							width: width - 40,
							height: 300,
							top: -30,
						}}
					/>
					<Image
						resizeMode='contain'
						style={{
							width: 150,
							height: 150,
							position: "absolute",
							zIndex: 120,
							alignSelf: "center",
						}}
						source={require("../../assets/images/kite.png")}
					/>
				</View>
				<View>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => {
							navigation.navigate("Mission", {
								claimed: true,
							});
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
							Claim Reward
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default AchievementReward;
