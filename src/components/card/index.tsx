import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

export function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/p1.jpeg"
          alt="image post"
          // width={295}
          // height={287}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          {/* <span className={styles.date}>11.08.2023 - </span> */}
          <span className={styles.categoryTag}>culture</span>
        </div>
        <Link href="/" className={styles.linkTitle}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
        </Link>
        {/* <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur delectus nemo quaerat aliquam! Quos similique atque
          laboriosam numquam.
        </p> */}

        <div className={styles.profileContainer}>
          <div className={styles.imageProfileContainer}>
            <Image
              src="/fashion.png"
              alt="profile"
              fill
              className={styles.imgProfile}
            />
          </div>
          <div className={styles.infoProfile}>
            <h6 className={styles.name}>Danilo Souza</h6>
            <div className={styles.dateContainer}>
              <span className={styles.dateProfile}>24 de janeiro, 2023 </span>
              {/* <span className={styles.timeToRead}> 4 minutos de leitura</span> */}
            </div>
          </div>
        </div>
        {/* <Link href="/" className={styles.link}>
          Read More
        </Link> */}
      </div>
    </div>
  )
}
