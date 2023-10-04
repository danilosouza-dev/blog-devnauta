import Link from 'next/link'
import styles from './menuposts.module.css'
import Image from 'next/image'

interface MenuPostsProps {
  withImage: boolean
}

export function MenuPosts({ withImage }: MenuPostsProps) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="imagem post"
              fill
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.categoryTag} ${styles.travel}`}>
            Travel
          </span>
          <Link href="/" className={styles.linkTitle}>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </Link>

          <div className={styles.detail}>
            <span className={styles.username}>Danilo Souza - </span>
            <span className={styles.date}>03 de janeiro, 2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="imagem post"
              fill
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.categoryTag} ${styles.culture}`}>
            culture
          </span>
          <Link href="/" className={styles.linkTitle}>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </Link>

          <div className={styles.detail}>
            <span className={styles.username}>Danilo Souza - </span>
            <span className={styles.date}>03 de janeiro, 2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="imagem post"
              fill
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.categoryTag} ${styles.food}`}>Food</span>
          <Link href="/" className={styles.linkTitle}>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </Link>

          <div className={styles.detail}>
            <span className={styles.username}>Danilo Souza - </span>
            <span className={styles.date}>03 de janeiro, 2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="imagem post"
              fill
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.categoryTag} ${styles.fashion}`}>
            Fashion
          </span>
          <Link href="/" className={styles.linkTitle}>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </Link>

          <div className={styles.detail}>
            <span className={styles.username}>Danilo Souza - </span>
            <span className={styles.date}>03 de janeiro, 2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
