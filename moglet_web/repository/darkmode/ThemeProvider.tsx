import { useState, useEffect } from 'react'
import { ThemeContextInterface, ThemeContext, themes } from './ThemeContext'
import Window from '../../store/Window';
import DarkMode from '../elements/DarkMode';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Window.detectDarkMode() ? 'dark' : 'light')

  function changeTheme(theme:string) {
    setTheme(theme);
  }

  const themeContext:ThemeContextInterface = {
    theme,
    changeTheme,
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        DarkMode.changeLight()
        break;
      case themes.dark:
        DarkMode.changeDark()
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}