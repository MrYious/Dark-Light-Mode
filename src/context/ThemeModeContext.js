import { createContext } from "react";

//An context object which contains the function to toggle the theme mode
export const ThemeModeContext = createContext({ toggleThemeMode: () => {} });