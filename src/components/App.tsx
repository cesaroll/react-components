import { createContext, useState } from "react";
import Header from "./Header";
import Speakers from "./Speakers";
import { IThemeContext } from '../types/IThemeContext';

export const ThemeContext = createContext<IThemeContext | null>(null);

const App = () => {

  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <div
        className={
          theme=== "light" ?
            "container-fluid light" :
            "container-fluid dark"
        }
      >
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
