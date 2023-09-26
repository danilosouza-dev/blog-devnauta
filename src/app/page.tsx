import styles from './page.module.css'
import { Featured } from '@/components/featured'
import { CategoryList } from '@/components/categoryList'
import { CardList } from '@/components/cardList'
import { Menu } from '@/components/menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
