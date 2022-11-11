import { useContext, useEffect, useState } from "react"
import { HiSun, HiMoon } from "react-icons/hi"
import { ThemeContext } from "../../repository/darkmode/ThemeContext"
import { themes } from "../../repository/darkmode/ThemeContext"

export default function DarkModeToggleBtn() {
  const value = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState(value.theme === themes.dark ? themes.dark : themes.light)
  useEffect(() => {
    if (storedTheme)
      value.changeTheme(storedTheme)
  }, [storedTheme])

  return(
    <>
      {storedTheme == themes.light
      ? <button
        type='button'
        onClick={() => setStoredTheme(themes.dark)}
        className="dark"
      >
        <HiMoon />
      </button>
      : <button
          type='button'
          onClick={() => setStoredTheme(themes.light)}
          className="light"
        >
          <HiSun />
        </button>}
    </>
  )
}