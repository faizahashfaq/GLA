/** @format */

import React from "react";
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import GoBack from "../../components/GoBack";
import Circle from "../../assets/icons/Circle";
import StarIcon from "../../assets/icons/StarIcon";

const Chapters = ({ route, navigation }) => {
	const params = route.params;
	return (
		<SafeAreaView>
			<GoBack goBack={() => navigation.goBack()} />
			<View style={{ paddingHorizontal: 20, marginVertical: 15 }}>
				<View>
					<Text
						style={{
							fontSize: 24,
							color: "#505050",
							fontFamily: "CorsaGrotesk-Bold",
						}}>
						Chapter Fun
					</Text>
				</View>
				<View
					style={{
						marginTop: 15,
						flexDirection: "row",
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "space-between",
					}}>
					<Chapter
						backgroundColor={"#FAAAAA"}
						fill={"#EF4949"}
						reflection={"#EB8181"}
						level={"Level 01"}
						starWon={1}
						onPress={() => navigation.navigate("Speech")}
					/>
					<Chapter
						backgroundColor={"#FADAAA"}
						fill={"#EFB749"}
						reflection={"#FFC998"}
						level={"Level 02"}
						starWon={2}
					/>
					<Chapter
						backgroundColor={"#F3FAAA"}
						fill={"#D8EF49"}
						reflection={"#F0F5AC"}
						level={"Level 03"}
						starWon={3}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Chapters;

const Chapter = ({
	backgroundColor,
	fill,
	reflection,
	level,
	starWon,
	...props
}) => {
	return (
		<TouchableOpacity
			{...props}
			style={{ position: "relative", width: 95, marginBottom: 20 }}>
			<StarsWon starNumber={starWon} />
			<View
				style={{
					position: "absolute",
					zIndex: 10,
					left: 20,
					top: 20,
					width: 50,
					height: 50,
				}}>
				<Image
					resizeMode='cover'
					style={{ width: 48, height: 48 }}
					source={require("../../assets/images/kite.png")}
				/>
			</View>
			<Circle
				background={backgroundColor}
				fill={fill}
				reflection={reflection}
			/>

			<View
				style={{
					position: "absolute",
					bottom: 5,
					right: 5,
					backgroundColor: "#FFF",
					paddingHorizontal: 5,
					paddingVertical: 2,
					borderRadius: 10,
				}}>
				<Text
					style={{
						fontSize: 12,
						color: "#505050",
						fontFamily: "CorsaGrotesk-Bold",
					}}>
					{`${level[0].toUpperCase()}${level[2].toUpperCase()}. ${level[
						level.length - 1
					].toUpperCase()}`}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const StarsWon = ({ starNumber }) => {
	return starNumber === 3 ? (
		<View
			style={{
				position: "absolute",
				flexDirection: "row",
				left: 12,
				top: -5,
				zIndex: 20,
				width: 70,
				height: 28,

				alignItems: "center",
			}}>
			<View style={{ marginRight: 5 }}>
				<Image
					style={{ width: 20, height: 20 }}
					source={require("../../assets/icons/star.png")}
				/>
			</View>
			<View style={{ alignSelf: "flex-start", marginRight: 5 }}>
				<Image
					style={{ width: 20, height: 20 }}
					source={require("../../assets/icons/star.png")}
				/>
			</View>
			<View>
				<Image
					style={{ width: 20, height: 20 }}
					source={require("../../assets/icons/star.png")}
				/>
			</View>
		</View>
	) : starNumber === 2 ? (
		<View
			style={{
				position: "absolute",
				flexDirection: "row",
				left: 12,
				top: -5,
				zIndex: 20,
				width: 70,
				height: 28,

				alignItems: "center",
			}}>
			<View style={{ marginRight: 5 }}>
				<Image
					style={{ width: 20, height: 20 }}
					source={require("../../assets/icons/star.png")}
				/>
			</View>
			<View style={{ alignSelf: "flex-start", marginRight: 5 }}>
				<Image
					style={{ width: 20, height: 20 }}
					source={require("../../assets/icons/star.png")}
				/>
			</View>
		</View>
	) : starNumber === 1 ? (
		<View
			style={{
				position: "absolute",
				flexDirection: "row",
				left: 12,
				top: -5,
				zIndex: 20,
				width: 70,
				height: 28,

				alignItems: "center",
			}}>
			<View style={{ marginRight: 5 }}>
				<Image
					style={{ width: 20, height: 20 }}
					source={require("../../assets/icons/star.png")}
				/>
			</View>
		</View>
	) : (
		<View></View>
	);
};
