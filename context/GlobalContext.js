/** @format */

import React, { createContext, useState } from "react";

export const GlobalContext = createContext(() => {});

export const GlobalProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const value = { isLoggedIn, setIsLoggedIn };
	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};
