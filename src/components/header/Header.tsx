import Links from './links/Links'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Links />
    </header>
  )
}
export default Header
