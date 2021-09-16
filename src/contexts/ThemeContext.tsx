import React, {createContext, useState}  from "react";
import { IThemeContext } from "../types/IThemeContext";

export const ThemeContext = createContext<IThemeContext>({theme: "", setTheme: (()=>{})});

export function ThemeProvider ({
  children,
  startingTheme
}:{
  startingTheme: string,
  children: any
}) {

  const [theme, setTheme] = useState<string>(startingTheme);

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}
