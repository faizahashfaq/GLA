/** @format */

import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const GlobalContext = createContext(() => {});

export const GlobalProvider = ({ children }) => {
	useEffect(() => {
		const getLoggedInStatus = async () => {
			const status = await AsyncStorage.getItem("@isLoggedIn");
			console.log(`Status:${status}`);
			const statusToNumber = Number(status);
			console.log(`Status in Number:${statusToNumber}`);
			const statusToBoolean = Boolean(statusToNumber);
			setIsLoggedIn(statusToBoolean);
		};
		getLoggedInStatus();
	}, []);

	const [allStars, setAllStars] = useState(10);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [guardianOn, setGuardianOn] = useState(false);

	const value = {
		isLoggedIn,
		setIsLoggedIn,
		guardianOn,
		setGuardianOn,
		allStars,
		setAllStars,
	};
	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};
