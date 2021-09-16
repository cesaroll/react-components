import { createContext, useState } from 'react';
import { IThemeContext } from '../types/IThemeContext';

export const ThemeContext = createContext<IThemeContext>({theme: "", setTheme: (()=>{})});

export const Layout = ({
  startingTheme,
  children
}:{
  startingTheme: string,
  children: any
}) => {

  const [theme, setTheme] = useState<string>(startingTheme);

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <div
        className={
          theme=== "light" ?
            "container-fluid light" :
            "container-fluid dark"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
