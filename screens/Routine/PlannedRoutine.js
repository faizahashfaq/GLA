/** @format */

import React from "react";
import {
	Text,
	TouchableOpacity,
	View,
	StatusBar,
	Dimensions,
	Image,
	ScrollView,
	FlatList,
	SafeAreaView,
} from "react-native";
import moment from "moment";
import RoutineIcon from "../../assets/icons/RoutineIcon";
import GoBack from "../../components/GoBack";
const { width, height } = Dimensions.get("window");

const PlannedRoutine = ({ navigation, route }) => {
	const { name } = route.params;
	const array = [1, 2, 3, 4, 5];
	const renderItem = ({ item }) => <RoutineCard />;

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<GoBack routeName={name} goBack={() => navigation.goBack()} />

			<FlatList
				ListHeaderComponent={() => <DataAndStreak />}
				ListHeaderComponentStyle={{ marginBottom: 20 }}
				ListFooterComponent={() => {
					return <View style={{ height: 40 }}></View>;
				}}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ padding: 20 }}
				data={array}
				renderItem={renderItem}
				keyExtractor={(array) => array}
			/>
		</SafeAreaView>
	);
};

const RoutineCard = ({ imageUri, title, time }) => {
	return (
		<View
			style={{
				width: width - 40,
				//flex: 1,
				height: 330,
				marginBottom: 20,
				backgroundColor: "#FFF",
				borderRadius: 5,
				//For IOS
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22,
				//For Android
				elevation: 3,
			}}>
			<View
				style={{
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-around",
					paddingVertical: 15,
					height: 270,
					width: width - 40,
					borderTopLeftRadius: 5,
					borderTopRightRadius: 5,
					backgroundColor: "#FFA8A8",
				}}>
				<Image
					style={{
						//Todo: Need improvision for dynamic content
						width: width / 2.5,
						height: height / 4,
					}}
					resizeMode='contain'
					source={{
						uri: imageUri,
					}}
				/>
				<Text
					style={{
						fontSize: 20,
						fontFamily: "CorsaGrotesk-Bold",
						letterSpacing: 1,
						color: "#FFF",
					}}>
					{title || "Drink Water"}
				</Text>
			</View>
			<View
				style={{
					alignSelf: "flex-end",
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 25,
					justifyContent: "center",
				}}>
				<Image
					style={{
						//Todo: Need improvision for dynamic content
						width: width / 9.5,
						height: height / 16,
					}}
					resizeMode='contain'
					source={require("../../assets/images/alarm-clock.png")}
				/>

				<Text
					style={{
						fontSize: 18,
						fontFamily: "CorsaGrotesk-Medium",
						letterSpacing: 1,
						color: "#EC8239",
						marginLeft: 5,
					}}>
					{time || "02:15 PM"}
				</Text>
			</View>
		</View>
	);
};

function DataAndStreak() {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<Text
				style={{
					fontSize: 18,
					fontFamily: "CorsaGrotesk-Bold",
					color: "#505050",
					letterSpacing: 0.7,
				}}>
				{moment().format("MMMM DD, YYYY")}
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<RoutineIcon fill={"#F2765A"} />
				<Text
					style={{
						marginLeft: 10,
						fontFamily: "CorsaGrotesk-Bold",
						color: "#F2765A",
						fontSize: 18,
					}}>
					12
				</Text>
			</View>
		</View>
	);
}
export default PlannedRoutine;
