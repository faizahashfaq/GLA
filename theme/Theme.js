import React, { createContext } from 'react'


const theme = {
    colors: {
        primary: "#F2765A",
        primaryLight: "#E7BD8B",
        text:{
            primary:"#505050",
            secondary: "#999999"
        },
        background: "#F5F5F5",
        foreground: "#FFFFFF",
        //pinkLight: "#FA98EA",
        blueLight: "#5F859A",
        red: "#FF3C3C",
        orange: {
            dark: "#D36637",
            light: "#FFD6BD"
        },
        brown: {
            light: "#F7B686",
        },
        pink:{
            light: "#FFD6EB",
            dark: "#FD6BBA"
        },
        green:{
            dark: "#37D346",
            light: "#CEFFBD",
        },
        purple: {
            dark: "#976BCF",
            light: "#EDD6FF"
        },


        
    }
}
export const ThemeContext = createContext(theme)

export const ThemeProvider = ({children}) => {
    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
}

