'use client'
import React, { createContext, useEffect, useState, ReactNode } from 'react'

interface ThemeProviderProviderProps {
  children: ReactNode
}

interface ThemeContextProps {
  theme: 'light' | 'dark'
  handleChangeTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme')
    if (value === 'light' || value === 'dark') {
      return value || 'light'
    }
  }
}

export const ThemeContextProvider: React.FC<ThemeProviderProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return getFromLocalStorage()!
  })

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
