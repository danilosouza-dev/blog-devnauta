import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

export function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="image post" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.08.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur delectus nemo quaerat aliquam! Quos similique atque
          laboriosam numquam.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}
