import Image from 'next/image'
import styles from './navbar.module.css'
import Link from 'next/link'
import { ThemeToggle } from '../ThemeToggle'
import { AuthLinks } from '../AuthLinks'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Facebook color="black" size={26} />
        <Instagram color="black" size={26} />
        <Youtube color="black" size={36} />
      </div>
      <div className={styles.logo}>
        <Image src="/devnauta_logo.png" alt="logo" width={100} height={100} />
      </div>
      <ul className={styles.links}>
        <li>
          <ThemeToggle />
        </li>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.link}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.authlinks}>
          <AuthLinks />
        </li>
      </ul>
    </div>
  )
}
