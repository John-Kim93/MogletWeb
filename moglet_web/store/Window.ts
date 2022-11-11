export default class Window {
  constructor() {}

  static detectDarkMode() :boolean {
    if (typeof window !== "undefined") {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }
}