import Image from 'next/image'
import styles from './featured.module.css'

export function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Olá, Devnautas!</span> seja bem vindo ao Devnauta blog.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="culture" fill className={styles.imagem} />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dicta
            recusandae autem omnis totam error voluptatibus consequatur repellat
            quasi eveniet? Tempore, debitis! Qui ullam, dignissimos voluptatibus
            doloremque impedit tempora praesentium.
          </p>

          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
