import { useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import LocalStorage from "../../store/LocalStorage";

export default function DarkModeToggleBtn() {
  useEffect(() => {
    const storedTheme = LocalStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    if (storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
  }, [])

  return(
    <>
      {document?.documentElement?.getAttribute("data-theme") == 'light'
      ? <button
        type='button'
        onClick={() => {
          document.documentElement.setAttribute('data-theme', "dark")
          LocalStorage.setItem('theme', "dark")}
        }
        className="dark"
      >
        <HiMoon />
      </button>
      : <button
          type='button'
          onClick={() => {
            document.documentElement.setAttribute('data-theme', "light")
            LocalStorage.setItem('theme', "light")}
          }
          className="light"
        >
          <HiSun />
        </button>}
    </>
  )
}