import Nav from "./Nav";
import styles from '../../styles/componentStyles/Header.module.css'

const Header = () => {
  return (
    <header role="banner" className={styles.header}>
      <h1 className={styles.headerTitle}>Logo here</h1>
      <div>Searchbar</div>
      <Nav />
    </header>
  )
}

export default Header