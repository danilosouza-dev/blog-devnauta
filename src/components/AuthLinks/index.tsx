import Link from 'next/link'
import styles from './authlinks.module.css'

export function AuthLinks() {
  const status = 'authenticated'
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <p className={styles.link}>Logout</p>
        </>
      )}
    </>
  )
}
