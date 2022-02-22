/** @format */

import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const Home = ({ user = "Saira" }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View>
				<View //Welcome Message & Waving Hand
					style={{
						paddingHorizontal: 15,
						marginTop: 10,
						display: "flex",
						width: "100%",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View>
						<Text>{"Hi & Welcome"}</Text>
						<Text>{user}</Text>
					</View>
					<View style={{ width: 100, height: 100 }}>
						<LottieView
							source={require("../assets/animations/waving.json")}
							autoPlay
							loop
						/>
					</View>
				</View>
				<View>{/* {Levels} */}</View>
				<View>{/* {Daily Challenges} */}</View>
				<View>{/* {Routine} */}</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
