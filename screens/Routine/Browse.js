/** @format */

import React, { useEffect, useState } from "react";
import {
	FlatList,
	Image,
	SafeAreaView,
	Text,
	View,
	Dimensions,
} from "react-native";
import GoBack from "../../components/GoBack";
import dummyData from "./dummy.json";
const { width, height } = Dimensions.get("window");

const Browse = ({ navigation }) => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	//console.log(data.length !== 0 && data[0].cover_photo);
	useEffect(async () => {
		const data = await fetch(
			`https://unsplash.com/napi/search?query=office&per_page=40&page=${page}`,
			{
				credentials: "same-origin",
				mode: "cors",
				headers: {},
			}
		).then((data) => data.json());
		setData(data.collections.results);
		return () => {
			setData({});
		};
		//console.log(data.collections.results[0].cover_photo.urls.thumb);
	}, [page]);
	//console.log(page);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<GoBack routeName={"Browse"} goBack={() => navigation.goBack()} />
			<View
				style={{
					flex: 1,
					height: height,
					width: width - 40,
				}}>
				{data.length !== 0 && (
					<FlatList
						contentContainerStyle={{
							width: width,
							alignItems: "center",
							justifyContent: "center",
							marginTop: 20,
						}}
						horizontal={false}
						key={"_"}
						keyExtractor={(image = 1) => Math.random()}
						data={data}
						onEndReachedThreshold={0.5}
						onEndReached={({ distanceFromEnd }) => {
							if (distanceFromEnd < 0) return;
							setPage(page + 1);
							console.log(page);
						}}
						renderItem={(image) => {
							return (
								<View
									style={{
										alignItems: "center",
										marginBottom: 10,
										borderRadius: 5,
										borderWidth: 1,
										borderColor: "#ccc",
									}}>
									<Image
										resizeMode="contain"
										style={{ width: width - 50, height: width }}
										source={{ uri: image.item.cover_photo.urls.small }}
									/>
									<Text style={{ paddingVertical: 15 }}>Hello</Text>
								</View>
							);
						}}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default Browse;
