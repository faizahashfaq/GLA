/** @format */

import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	Dimensions,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import * as Progress from "react-native-progress";
import { collection, getDocs } from "firebase/firestore";
import database from "../../utils/firebaseConfig";
import GoBack from "../../components/GoBack";
import StarIcon from "../../assets/icons/StarIcon";
import { async } from "@firebase/util";

const { width, height } = Dimensions.get("window");

const data = [
	{
		id: 1,
		title: "Trainee",
		stars: 10,
		levels: [
			{
				id: 1,
				title: "Level 1",
			},
			{
				id: 2,
				title: "Level 2",
			},
		],
	},
	{
		id: 2,
		title: "Expert",
		stars: 3,
		levels: [
			{
				id: 12,
				title: "Expert Level 1",
			},
			{
				id: 23,
				title: "Expert Level 2",
			},
		],
	},
];

const Levels = ({ navigation }) => {
	const [levels, setLevels] = useState([]);
	// async function getLevels() {
	// 	const snapResult = [];
	// 	const querySnapshot = await getDocs(collection(database, "courses"));
	// 	querySnapshot.forEach((doc) => snapResult.push(doc.data()));
	// 	setLevels([...snapResult]);
	// }
	// useEffect(() => {
	// 	getLevels();
	// }, []);
	return (
		<SafeAreaView>
			<GoBack routeName={"Levels"} goBack={() => navigation.goBack()} />
			<View
				style={{
					width: width,
					height: height - 40,
					paddingHorizontal: 20,
					marginTop: 20,
				}}>
				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => {
						return (
							<LevelCard
								title={item.title}
								stars={item.stars}
								onPress={() =>
									navigation.navigate("Chapters", {
										id: item.id,
										levels: item.levels,
									})
								}
							/>
						);
					}}
				/>
				{/* <LevelCard /> */}
			</View>
		</SafeAreaView>
	);
};

export default Levels;

function LevelCard({ title, stars, progress, img, id, onPress, ...props }) {
	return (
		<TouchableOpacity
			style={{ marginBottom: 20 }}
			key={id}
			activeOpacity={1}
			onPress={onPress}
			{...props}>
			<View
				style={{
					backgroundColor: "#FFF",
					flexDirection: "row",
					alignItems: "center",

					elevation: 3,
					width: "100%",
					height: 170,
					borderRadius: 5,
					paddingHorizontal: 15,
				}}>
				<View>
					<Text
						style={{
							fontSize: 24,
							fontFamily: "CorsaGrotesk-Bold",
							color: "#F2765A",
							marginBottom: 5,
						}}>
						{title}
					</Text>
					<Text
						style={{
							color: "#999",
							fontSize: 16,
							fontFamily: "CorsaGrotesk-Medium",
							marginBottom: 20,
						}}>
						Level 3/5
					</Text>
					<Progress.Bar
						height={10}
						borderRadius={10}
						color={"#F2765A"}
						progress={0.8}
						width={200}
						style={{ backgroundColor: "#A38BE7", borderWidth: 0 }}
					/>
					<View style={{ marginTop: 20 }}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Image
								style={{ width: 18, height: 18 }}
								resizeMode='cover'
								source={require("../../assets/icons/star.png")}
							/>
							<Text
								style={{
									fontSize: 16,
									color: "#505050",
									fontFamily: "CorsaGrotesk-Bold",
									marginLeft: 5,
								}}>
								{stars}
							</Text>
						</View>
					</View>
				</View>

				<View>
					<Image source={require("../../assets/images/tiger.png")} />
				</View>
			</View>
		</TouchableOpacity>
	);
}
