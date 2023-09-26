import Image from 'next/image'
import styles from './categorylist.module.css'
import Link from 'next/link'

export function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>

      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>style</p>
        </Link>

        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>fashion</p>
        </Link>

        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>food</p>
        </Link>

        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>travel</p>
        </Link>

        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>culture</p>
        </Link>

        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          <p>coding</p>
        </Link>
      </div>
    </div>
  )
}
