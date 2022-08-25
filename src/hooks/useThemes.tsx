import { createContext, ReactNode, useContext, useState } from 'react'
import { darkTheme } from './../styles/themes/dark'
import { defaultTheme } from './../styles/themes/default'

const THEMES = {
  LIGHT: defaultTheme,
  DARK: darkTheme
} as const
type ThemesTypes = keyof typeof THEMES

type ThemePreferenceContextTypes = {
  currentTheme: any
  changeTheme: (theme: ThemesTypes) => void
}
export const ThemePreferenceContext = createContext(
  {} as ThemePreferenceContextTypes
)

type ThemePreferenceContextProviderProps = {
  children: ReactNode
}
export function ThemePreferenceContextProvider({
  children
}: ThemePreferenceContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<any>(() => {
    const storedTheme = localStorage.getItem(
      '@coffee-delivery-v1.0.0:theme'
    ) as ThemesTypes
    const themeSystem = window.matchMedia('(prefers-color-scheme: light)')

    if (storedTheme) {
      return THEMES[storedTheme]
    } else {
      if (themeSystem.matches) {
        localStorage.setItem('@coffee-delivery-v1.0.0:theme', 'LIGHT')
        return THEMES.LIGHT
      } else {
        localStorage.setItem('@coffee-delivery-v1.0.0:theme', 'DARK')
        return THEMES.DARK
      }
    }
  })

  function changeTheme(theme: ThemesTypes) {
    localStorage.setItem('@coffee-delivery-v1.0.0:theme', theme)
    setCurrentTheme(THEMES[theme])
  }

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemePreferenceContext.Provider>
  )
}

export function useThemes() {
  return useContext(ThemePreferenceContext)
}
