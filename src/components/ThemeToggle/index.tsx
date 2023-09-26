'use client'
import Image from 'next/image'
import styles from './themetoggle.module.css'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export function ThemeToggle() {
  const { handleChangeTheme, theme } = useContext(ThemeContext)

  return (
    <div
      className={`${styles.container} ${
        theme === 'light' ? styles.dark : styles.light
      }`}
      onClick={handleChangeTheme}
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={`${styles.ball} ${
          theme === 'light' ? styles.light : styles.dark
        }`}
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  )
}
