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
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { emptyInputValidation } from "../../utils/validations";

const { width, height } = Dimensions.get("window");
const ChildInformation = ({ navigation }) => {
	const [checked, setChecked] = useState({
		boy: false,
		girl: false,
	});
	const [nickname, SetNickname] = useState("");
	const [date, setDate] = useState(moment().format("DD MMM, YYYY"));
	const [show, setShow] = useState(false);
	const [mode, setMode] = useState("date");
	console.log(date);
	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};
	const showDatepicker = () => {
		showMode("date");
	};

	const onChangeDate = (event, selectedDate) => {
		const currentDate = selectedDate || date;

		setShow(Platform.OS === "ios");
		setDate(moment(currentDate).format("MMMM DD, YYYY"));
	};
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
						value={nickname}
						onChangeText={(text) => SetNickname(text)}
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
						Date of Birth
					</Text>
					<TouchableOpacity
						onPress={showDatepicker}
						style={{
							width: 200,
							height: 50,
							backgroundColor: "#EAEAEA",
							borderRadius: 10,
							justifyContent: "center",
							paddingHorizontal: 10,
						}}>
						<Text
							style={{
								fontFamily: "CorsaGrotesk-Regular",
								alignItems: "center",
							}}>
							{date}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ bottom: -70 }}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => {
							if (checked.boy || checked.girl) {
								if (emptyInputValidation(nickname)) {
									navigation.navigate("questionaire");
								}
							}
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
				{show && (
					<View>
						<DateTimePicker
							style={{
								borderRadius: 0,
							}}
							testID='dateTimePicker'
							value={new Date(date)}
							mode={mode}
							is24Hour={false}
							display='default'
							onChange={onChangeDate}
						/>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
};

export default ChildInformation;
