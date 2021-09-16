import React, {createContext}  from "react";
import { useTheme } from "../hooks/useTheme";
import { ITheme } from "../types/ITheme";

export const ThemeContext = createContext<ITheme>({theme: "", setTheme: (()=>{})});

 export const ThemeProvider = ({
  children,
  startingTheme
}:{
  startingTheme: string,
  children: any
}) => {

  const theme = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  );
}
