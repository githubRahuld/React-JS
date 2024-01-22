import React from "react";
import { useContext, createContext } from "react-dom";

const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const themeProvider = ThemeContext.provider;

export default useTheme = () => {
  return useContext(ThemeContext);
};
