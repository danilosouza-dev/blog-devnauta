import Image from 'next/image'
import styles from './themetoggle.module.css'

export function ThemeToggle() {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon icon" width={20} height={20} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="sun icon" width={20} height={20} />
    </div>
  )
}
