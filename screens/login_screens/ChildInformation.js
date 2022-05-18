/** @format */

import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	TextInput,
	Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
const ChildInformation = ({ navigation }) => {
	const [checked, setChecked] = useState({
		boy: false,
		girl: false,
	});

	return (
		<SafeAreaView>
			<View
				style={{
					paddingHorizontal: 20,
					justifyContent: "center",

					height: height,
				}}>
				<Text
					style={{
						fontSize: 24,
						fontFamily: "CorsaGrotesk-Black",
						textAlign: "center",
						color: "#505050",
					}}>
					Please fill in the child's Information
				</Text>
				<View
					key={"Radio Buttons"}
					style={{
						flexDirection: "row",
						justifyContent: "space-around",
						alignItems: "center",
						width: "100%",
						marginVertical: 35,
					}}>
					<TouchableOpacity
						activeOpacity={1}
						key={"girl"}
						onPress={() =>
							setChecked({
								boy: false,
								girl: !checked.girl,
							})
						}
						style={{
							alignItems: "center",
							backgroundColor: checked.girl ? "#cccccc" : "#e5e5e5",
							padding: 15,
							borderRadius: 10,
						}}>
						<Text
							style={{
								marginBottom: 10,
								fontFamily: "CorsaGrotesk-Medium",
								color: "#ff69b4",
								fontSize: 16,
							}}>
							Girl
						</Text>
						<Image
							style={{ width: 120, height: 120 }}
							source={require("../../assets/images/girl.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={1}
						key={"boy"}
						onPress={() =>
							setChecked({
								boy: !checked.boy,
								girl: false,
							})
						}
						style={{
							alignItems: "center",
							backgroundColor: checked.boy ? "#cccccc" : "#e5e5e5",
							padding: 15,
							borderRadius: 10,
						}}>
						<Text
							style={{
								marginBottom: 10,
								fontFamily: "CorsaGrotesk-Medium",
								color: "#483d8b",
								fontSize: 16,
							}}>
							Boy
						</Text>
						<Image
							style={{ width: 120, height: 120 }}
							source={require("../../assets/images/boy.png")}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
						marginTop: 25,
					}}>
					<Text
						style={{
							fontFamily: "CorsaGrotesk-Medium",
							color: "#505050",
							fontSize: 14,
						}}>
						Child's Name
					</Text>
					<TextInput
						placeholder='Nickname'
						style={{
							width: 200,
							height: 50,
							backgroundColor: "#EAEAEA",
							borderRadius: 10,
							fontFamily: "CorsaGrotesk-Regular",
							paddingHorizontal: 10,
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
						marginTop: 25,
					}}>
					<Text
						style={{
							fontFamily: "CorsaGrotesk-Medium",
							color: "#505050",
							fontSize: 14,
						}}>
						Age
					</Text>
					<TextInput
						keyboardType='numeric'
						placeholder='e.g 6'
						style={{
							width: 200,
							height: 50,
							backgroundColor: "#EAEAEA",
							borderRadius: 10,
							fontFamily: "CorsaGrotesk-Regular",
							paddingHorizontal: 10,
						}}
					/>
				</View>
				<View style={{ bottom: -70 }}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => {
							navigation.navigate("questionaire");
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
		</SafeAreaView>
	);
};

export default ChildInformation;
