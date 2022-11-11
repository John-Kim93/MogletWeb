import { createContext } from 'react'
import Window from '../../store/Window';

export interface ThemeContextInterface {
  theme: string,
  changeTheme: Function,
}

export const themes = {
  dark: "dark",
  light: "light",
};

const initialContext = {
  theme: Window.detectDarkMode() ? themes.dark : themes.light,
  changeTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextInterface>(initialContext);
