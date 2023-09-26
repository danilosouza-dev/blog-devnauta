'use client'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return <div className={theme}>{children}</div>
  }
}
