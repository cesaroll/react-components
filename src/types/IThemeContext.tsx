import { Dispatch, SetStateAction } from "react";

export interface IThemeContext {
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>
}
