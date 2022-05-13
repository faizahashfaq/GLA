/** @format */

import React from "react";
import {
	SafeAreaView,
	ScrollView,
	Text,
	View,
	Dimensions,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import { TouchableCards } from "../../components/TouchableCards";
import AppBar from "../../components/AppBar";
import BookImage from "../../assets/images/BookImage";
import ArrowIcon from "../../assets/icons/RightArrowIcon";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginBottom: 60,
	},
});

const Routine = ({ navigation }) => {
	return (
		<SafeAreaView>
			<AppBar navigation={navigation} />
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<View style={{ marginTop: 20, marginBottom: 30 }}>
					<Text
						style={{
							color: "#999",
							fontSize: 14,
							fontFamily: "CorsaGrotesk-Medium",
							marginBottom: 5,
						}}>
						{"Would you like to know something?"}
					</Text>
					<Text
						style={{
							color: "#F2765A",
							fontSize: 24,
							fontFamily: "CorsaGrotesk-Bold",
							width: width * 0.8,
							marginBottom: 5,
						}}>
						{"You are doing such a great job"}
					</Text>
					<Text
						style={{
							color: "#666",
							fontSize: 18,
							fontFamily: "CorsaGrotesk-Regular",
							marginBottom: 5,
						}}>
						{"Just keep your momentum going"}
					</Text>
				</View>
				<View style={{ marginBottom: 20 }}>
					<TouchableCards
						height={100}
						color='#9967E4'
						onPress={() =>
							navigation.navigate("Routine Navigation", {
								screen: "Daily Learner",
							})
						}>
						<View>
							<BookImage />
						</View>
						<View
							style={{
								alignSelf: "center",
								marginLeft: 15,
								marginRight: 20,
								width: width - 160,
							}}>
							<Text
								style={{
									fontSize: 18,
									fontFamily: "CorsaGrotesk-Bold",
									color: "#FFF",
									marginBottom: 10,
								}}>
								{"Learning of the day"}
							</Text>
							<Text
								style={{
									color: "#FFF",
									fontSize: 12,
									fontFamily: "CorsaGrotesk-Regular",
								}}>
								{"We have planned an activity for you to learn"}
							</Text>
						</View>
					</TouchableCards>
				</View>
				<TouchableCards
					color='#FFFA84'
					height={360}
					style={{ marginBottom: 20 }}>
					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						<Text
							style={{
								color: "#999",
								fontSize: 18,
								fontFamily: "CorsaGrotesk-Medium",
							}}>
							Next in
						</Text>
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
						<Image source={require("../../assets/images/snowman.png")} />
						<Text
							style={{
								color: "#B2AC18",
								fontSize: 18,
								fontFamily: "CorsaGrotesk-Bold",
							}}>
							{"Playing with Friends"}
						</Text>
					</View>
				</TouchableCards>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => {
						navigation.navigate("Routine Navigation", {
							screen: "Routine Parent",
							params: {
								name: "Activities",
							},
						});
					}}
					style={{
						alignSelf: "center",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						borderRadius: 5,
						width: width - 40,
						height: 70,
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
						View Planned Activities
					</Text>
					<ArrowIcon fill={"#FFF"} />
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Routine;
