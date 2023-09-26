'use client'
import Link from 'next/link'
import styles from './authlinks.module.css'
import { useState } from 'react'

export function AuthLinks() {
  const [open, setOpen] = useState(false)
  const status = 'authenticated'

  function handleOpenBurgerMenu() {
    setOpen(!open)
  }

  return (
    <>
      {status === 'authenticated' ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <p className={styles.link}>Logout</p>
        </>
      )}

      <div className={styles.burger} onClick={handleOpenBurgerMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>

          {status === 'authenticated' ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <p className={styles.link}>Logout</p>
            </>
          )}
        </div>
      )}
    </>
  )
}
