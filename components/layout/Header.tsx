import Nav from "./Nav";
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <header role="banner" className={styles.header}>
      <h1 className={styles.headerTitle}>Resports</h1>
      <div>Searchbar</div>
      <Nav />
    </header>
  )
}

export default Header