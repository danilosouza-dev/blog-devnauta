import { Pagination } from '../pagination'
import styles from './cardlist.module.css'
import { Card } from '../card'

export function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}
