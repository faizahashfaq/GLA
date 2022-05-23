/** @format */

import React, { useContext, useState, useEffect } from "react";
import {
	SafeAreaView,
	ScrollView,
	Text,
	View,
	Platform,
	Dimensions,
	Button,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import GoBack from "../../components/GoBack";
import moment from "moment";
import ArrowUp from "../../assets/icons/ArrowUp";
import ArrowDown from "../../assets/icons/ArrowDown";
import { CheckedBox } from "../login_screens/Questionaire";
import { addRoutine } from "../../utils/APIs/FirebaseFunctions";
import { GlobalContext } from "../../context/GlobalContext";
const { width, height } = Dimensions.get("window");
const RoutineParent = ({ navigation }) => {
	const { studentState, setStudentState } = useContext(GlobalContext);
	const [date, setDate] = useState(moment());
	const [time, setTime] = useState(moment());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	const [text, setText] = useState("");
	const [openDropDown, setOpenDropDown] = useState(false);
	const [dropdownValue, setDropdownValue] = useState(null);
	const [dropdownItems, setDropdownItems] = useState([
		{ label: "Apple", value: "apple" },
		{ label: "Banana", value: "banana" },
	]);
	const [routineRepeat, setRoutineRepeat] = useState({
		daily: false,
		weekly: false,
		monthly: false,
	});
	const [image, setImage] = useState([]);
	console.log(time, date);
	const routine = {
		name: text,
		description: "",
		startTime:
			new Date(date).getTime() / 1000 || new Date(time).getTime() / 1000,
		assetID: image,
		repeat: routineRepeat,
		time: formatAMPM(new Date(time)),
	};
	function formatAMPM(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? "pm" : "am";
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? "0" + minutes : minutes;
		var strTime = hours + ":" + minutes + " " + ampm;
		return strTime;
	}
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [5, 5],
			quality: 1,
		});

		console.log(result.height);

		if (!result.cancelled) {
			setImage([...image, { uri: result.uri, height: result.height }]);
		}
	};
	// console.log(date.calendar("yyyy/mm/dd"));
	// console.log(date.format("h:mm a"));
	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;

		setShow(Platform.OS === "ios");
		setDate(moment(currentDate));
		setTime(moment(currentDate));
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	const showTimepicker = () => {
		showMode("time");
	};

	useEffect(() => {
		async function localStudentId() {
			const studentId = await AsyncStorage.getItem("@studentId");
			setStudentState(JSON.parse(studentId)[0]);
			console.log(JSON.parse(studentId)[0]);
		}
		localStudentId();
	});
	return (
		<SafeAreaView style={{ position: "relative", flex: 1 }}>
			<GoBack routeName={"Routine"} goBack={() => navigation.goBack()} />
			<View
				style={{ paddingHorizontal: 20, paddingTop: 25, paddingBottom: 20 }}>
				<Text
					style={{
						fontFamily: "CorsaGrotesk-Medium",
						fontSize: 14,
						color: "#666",
						marginBottom: 10,
					}}>
					{"Routine Name"}
				</Text>
				<TextInput
					placeholder='Daily Routine'
					value={text}
					onChangeText={(e) => setText(e)}
					style={{
						backgroundColor: "#f9f9f9",
						width: width - 40,
						borderRadius: 5,
						elevation: 1,
						height: 55,
						paddingHorizontal: 10,
						fontFamily: "CorsaGrotesk-Regular",
						color: "#393939",
					}}></TextInput>
			</View>
			<View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
				<Text
					style={{
						fontFamily: "CorsaGrotesk-Medium",
						fontSize: 14,
						color: "#666",
						marginBottom: 10,
					}}>
					{"Routine Type"}
				</Text>

				<DropDownPicker
					open={openDropDown}
					value={dropdownValue}
					items={dropdownItems}
					onPress={(open) => console.log("was the picker open?", open)}
					onSelectItem={(item) => console.log(item.label)}
					setOpen={setOpenDropDown}
					setValue={setDropdownValue}
					setItems={setDropdownItems}
					showTickIcon={false}
					style={{
						backgroundColor: "#f5f5f5",
						width: width - 40,
						elevation: 1,
						height: 55,
						borderColor: "#f5f5f5",
						opacity: 1,
					}}
					arrowIconStyle={{
						backgroundColor: "#ccc",
						borderRadius: 5,
					}}
					ArrowDownIconComponent={() => {
						return <ArrowDown />;
					}}
					ArrowUpIconComponent={() => {
						return <ArrowUp />;
					}}
					Arro
					textStyle={{
						fontFamily: "CorsaGrotesk-Regular",
						color: "#393939",
					}}
					dropDownContainerStyle={{
						backgroundColor: "#f5f5f5",
						borderColor: "#f5f5f5",
						elevation: 1,
					}}
					selectedItemContainerStyle={{
						backgroundColor: "#e5e5e5",
					}}
					selectedItemLabelStyle={{
						color: "#F2765A",
						fontFamily: "CorsaGrotesk-Medium",
					}}
				/>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<Text
					style={{
						fontFamily: "CorsaGrotesk-Medium",
						fontSize: 14,
						color: "#666",
						marginBottom: 10,
					}}>
					How many times you want to repeat it?
				</Text>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
					}}>
					<CheckedBox
						title={"Daily"}
						state={routineRepeat.daily}
						onPress={() => {
							setRoutineRepeat({
								daily: !routineRepeat.daily,
								weekly: false,
								monthly: false,
							});
						}}
					/>
					<CheckedBox
						title={"Weekly"}
						state={routineRepeat.weekly}
						onPress={() => {
							setRoutineRepeat({
								daily: false,
								weekly: !routineRepeat.weekly,
								monthly: false,
							});
						}}
					/>
					<CheckedBox
						title={"Monthly"}
						state={routineRepeat.monthly}
						onPress={() => {
							setRoutineRepeat({
								daily: false,
								weekly: false,
								monthly: !routineRepeat.monthly,
							});
						}}
					/>
				</View>
			</View>
			<View
				style={{
					paddingHorizontal: 20,
					paddingBottom: 20,
				}}>
				<Text
					style={{
						fontFamily: "CorsaGrotesk-Medium",
						fontSize: 14,
						color: "#666",
						marginBottom: 10,
					}}>
					{"Date"}
				</Text>
				<TouchableOpacity
					onPress={showDatepicker}
					style={{
						backgroundColor: "#f5f5f5",
						width: width - 40,
						borderRadius: 5,
						flexDirection: "row",
						alignItems: "center",
						height: 55,
						elevation: 1,
					}}>
					<Text
						style={{
							color: "#393939",
							fontSize: 14,
							fontFamily: "CorsaGrotesk-Regular",
							paddingLeft: 10,
						}}>
						{date.format("MMMM DD, YYYY")}
					</Text>
				</TouchableOpacity>
			</View>
			<View
				style={{
					paddingHorizontal: 20,
					paddingBottom: 20,
				}}>
				<Text
					style={{
						fontFamily: "CorsaGrotesk-Medium",
						fontSize: 14,
						color: "#666",
						marginBottom: 10,
					}}>
					{"Time"}
				</Text>
				<TouchableOpacity
					onPress={showTimepicker}
					style={{
						backgroundColor: "#f5f5f5",
						width: width - 40,
						borderRadius: 5,
						flexDirection: "row",
						alignItems: "center",
						height: 55,
						position: "relative",
						zIndex: 1,
						elevation: 1,
					}}>
					<Text
						style={{
							color: "#393939",
							fontSize: 14,
							fontFamily: "CorsaGrotesk-Regular",
							paddingLeft: 10,
						}}>
						{time.format("h:mm a").toUpperCase()}
					</Text>
				</TouchableOpacity>
			</View>
			<View
				style={{
					width: width - 40,
					flexDirection: "column",
					marginHorizontal: 20,
				}}>
				<View style={{ flexDirection: "row" }}>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={pickImage}
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-around",
							width: 180,
							height: 55,
							paddingHorizontal: 10,
							backgroundColor: "#f5f5f5",
							elevation: 1,
							borderRadius: 5,
							marginRight: 10,
						}}>
						<Entypo name='camera' size={24} color='#F2765A' />
						<Text
							style={{
								marginLeft: 5,
								color: "#F2765A",
								fontFamily: "CorsaGrotesk-Medium",
							}}>
							Helping Images
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.9}
						onPress={() => navigation.navigate("Browse")}
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-around",
							width: 55,
							height: 55,
							paddingHorizontal: 10,
							backgroundColor: "#ddd",
							elevation: 1,
							borderRadius: 5,
						}}>
						<Ionicons name='ios-apps' size={24} color='#393939' />
					</TouchableOpacity>
				</View>

				<ScrollView
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					style={{}}>
					{image &&
						image.map((img) => {
							return (
								<View key={img.uri} style={{ position: "relative" }}>
									<TouchableOpacity
										onPress={() => {
											setImage(image.filter(({ uri }) => uri !== img.uri));
										}}
										style={{
											position: "absolute",
											right: 5,
											top: 15,
											zIndex: 10,
											backgroundColor: "#F2765A",
											borderRadius: 30,
										}}>
										<Entypo name='minus' size={14} color='white' />
									</TouchableOpacity>
									<Image
										source={{ uri: img.uri }}
										resizeMode='cover'
										style={{
											width: 50,
											height: 50,
											borderRadius: 5,
											marginVertical: 20,
											marginRight: 10,
										}}
									/>
								</View>
							);
						})}
				</ScrollView>
			</View>
			<View
				style={{
					position: "absolute",
					bottom: 0,
					marginHorizontal: 20,
					zIndex: 111,
					elevation: 5,
				}}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={() => {
						console.log(`Upload ${studentState}`);
						addRoutine(studentState, routine);
					}}
					style={{
						alignSelf: "center",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						borderRadius: 5,
						width: width - 40,
						height: 55,

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
						Upload
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
						onChange={onChange}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default RoutineParent;
