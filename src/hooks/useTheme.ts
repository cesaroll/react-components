import { useState } from 'react';
import { ITheme } from '../types/ITheme';

export const useTheme = (
  startingTheme: string = "light"
): ITheme => {

  const [theme, setTheme] = useState<string>(startingTheme);

  const validateTheme = (themeValue: string) => {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return ({
    theme: theme,
    setTheme: validateTheme
  });
};
