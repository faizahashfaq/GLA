/** @format */

import React from "react";
import {
	SafeAreaView,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");

const CongratulationScreen = () => {
	return (
		<SafeAreaView>
			<View
				style={{
					width: width,
					height: height - 40,
					paddingHorizontal: 20,
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<View>
					<View
						style={{
							width: 300,
							height: 300,
							alignItems: "center",
						}}>
						<LottieView
							source={require("../../assets/animations/congrats.json")}
							autoPlay
							loop
							autoSize
							resizeMode='cover'
							style={{ width: 300, height: 300 }}
						/>
					</View>
					<View style={{ alignItems: "center", marginTop: 20 }}>
						<Text
							style={{
								marginTop: 25,
								color: "#F2765A",
								fontSize: 24,
								fontFamily: "CorsaGrotesk-Bold",
							}}>
							Congratulations
						</Text>
						<Text
							style={{
								fontSize: 16,
								color: "#505050",
								fontFamily: "CorsaGrotesk-Regular",
								marginTop: 20,
							}}>
							Your account has been registered
						</Text>
					</View>
				</View>
				<View>
					<Text
						style={{
							textAlign: "center",
							color: "#999",
							marginBottom: 20,
							fontFamily: "CorsaGrotesk-Regular",
						}}>
						We just need some information to setup for your child use
					</Text>
					<View>
						<TouchableOpacity
							activeOpacity={0.9}
							onPress={() => {
								navigation.navigate("congrats");
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
								Continue
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default CongratulationScreen;
