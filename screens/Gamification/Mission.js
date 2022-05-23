/** @format */

import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	Text,
	View,
	Dimensions,
	Image,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";
import * as Progress from "react-native-progress";

import GoBack from "../../components/GoBack";
import { DailyChallengeCard } from "../Home";
const { width, height } = Dimensions.get("window");
const Mission = ({ route, navigation }) => {
	const claimedParam = route.params?.claimed;
	console.log(`Claimed Param: ${claimedParam}`);
	const [claimed, setClaimed] = useState(false);
	//TODO: Get levels completion record from firebase
	const data = [
		{
			id: "1",
			mission: "Legendary",
			description: "Complete 5 levels",
			toAchieve: 5,
			current: 3,
			image: "",
		},
		{
			id: "2",
			mission: "Rocking",
			description: "Complete 5 levels",
			toAchieve: 5,
			current: 5,
			image: "",
		},
		{
			id: "3",
			mission: "Legendary",
			description: "Complete 20 levels",
			toAchieve: 20,
			current: 3,
			image: "",
		},
		{
			id: "222",
			mission: "Rocking",
			description: "Complete 25 levels",
			toAchieve: 25,
			current: 3,
			image: "",
		},
		{
			id: "322",
			mission: "Legendary",
			description: "Complete 5 levels",
			toAchieve: 5,
			current: 3,
			image: "",
		},
		{
			id: "jk2",
			mission: "Rocking",
			description: "Complete 5 levels",
			toAchieve: 5,
			current: 3,
			image: "",
		},
		{
			id: "1sdne",
			mission: "Legendary",
			description: "Complete 5 levels",
			toAchieve: 5,
			current: 3,
			image: "",
		},
		{
			id: "229230",
			mission: "Rocking",
			description: "Complete 5 levels",
			toAchieve: 5,
			current: 3,
			image: "",
		},
	];
	useEffect(() => {
		setClaimed(claimedParam || false);
	}, [claimedParam]);
	console.log(`Claimed: ${claimed}`);
	return (
		<SafeAreaView>
			<GoBack routeName={route.name} goBack={() => navigation.goBack()} />
			<FlatList
				contentContainerStyle={{
					alignItems: "center",
					paddingBottom: 100,
				}}
				data={data}
				ListHeaderComponent={() => {
					return (
						<View style={{ alignItems: "center", justifyContent: "center" }}>
							<DailyChallengeCard
								onPress={() =>
									navigation.navigate("Gamification", {
										screen: "Daily Challenges",
									})
								}
							/>
							<Text
								style={{
									fontSize: 20,
									fontFamily: "CorsaGrotesk-Bold",
									color: "#505050",
									marginVertical: 10,
									alignSelf: "flex-start",
								}}>
								Missions
							</Text>
						</View>
					);
				}}
				renderItem={({ item, index }) => {
					return (
						<MissionView
							mission={item.mission}
							current={item.current}
							total={item.toAchieve}
							id={item.id}
							navigation={navigation}
							claimed={claimed}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

export default Mission;

const MissionView = ({ mission, current, total, id, navigation, claimed }) => {
	const [progress, setProgress] = useState(0);
	const progressPercent = () => {
		const result = current / total;
		return setProgress(result);
	};
	useEffect(() => {
		progressPercent();
	}, [current]);
	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={() => {}}
			style={{
				width: width - 40,
				height: 100,
				backgroundColor: "#FFF",
				borderRadius: 5,
				flexDirection: "row",
				alignItems: "center",
				marginVertical: 10,
			}}>
			<View
				style={{
					backgroundColor: "#B4FF9F",
					alignSelf: "flex-start",
					padding: 15,
					justifyContent: "center",
					alignItems: "center",
					marginTop: 15,
					borderRadius: 40,
					marginHorizontal: 10,
				}}>
				<Image
					style={{
						width: 40,
						height: 40,
					}}
					resizeMode='contain'
					source={require("../../assets/images/kite.png")}
				/>
			</View>
			<View>
				<Text
					style={{
						fontSize: 18,
						color: "#F2765A",
						fontFamily: "CorsaGrotesk-Bold",
						marginBottom: 5,
					}}>
					{mission}
				</Text>
				<Text
					style={{
						fontSize: 14,
						color: "#666",
						fontFamily: "CorsaGrotesk-Regular",
					}}>
					Complete 5 levels
				</Text>
				{claimed === false && progress === 1 ? (
					<TouchableOpacity
						activeOpacity={1}
						onPress={() => {
							navigation.navigate("Reward", {
								awardName: mission,
							});
						}}
						style={{
							width: width - 150,
							height: 30,
							borderRadius: 5,
							backgroundColor: "#F2765A",
							alignItems: "center",
							justifyContent: "center",
							marginTop: 5,
						}}>
						<Text
							style={{
								fontSize: 14,
								color: "#FFF",
								fontFamily: "CorsaGrotesk-Medium",
							}}>
							Claim Reward
						</Text>
					</TouchableOpacity>
				) : claimed && progress === 1 ? (
					<TouchableOpacity
						disabled
						onPress={() => {
							navigation.navigate("Reward", {
								awardName: mission,
							});
						}}
						style={{
							width: width - 150,
							height: 30,
							opacity: 0.7,
							borderRadius: 5,
							backgroundColor: "#F2765A",
							alignItems: "center",
							justifyContent: "center",
							marginTop: 5,
						}}>
						<Text
							style={{
								fontSize: 14,
								color: "#FFF",
								fontFamily: "CorsaGrotesk-Medium",
							}}>
							Claimed
						</Text>
					</TouchableOpacity>
				) : (
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							width: "72%",
						}}>
						<View>
							<Progress.Bar
								height={5}
								borderRadius={10}
								color={"#F2765A"}
								progress={progress}
								width={180}
								animated={true}
								animationType='timing'
								style={{ backgroundColor: "#E7BD8B", borderWidth: 0 }}
							/>
						</View>

						<Text
							style={{
								fontSize: 14,
								color: "#F2765A",
								fontFamily: "CorsaGrotesk-Bold",
								marginBottom: 5,
								marginLeft: 10,
							}}>
							{progress * 100}%
						</Text>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};
