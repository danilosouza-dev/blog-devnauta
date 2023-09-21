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
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  )
}
