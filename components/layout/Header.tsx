import Nav from "./Nav";
import styles from '../../styles/componentStyles/Header.module.css'
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header role="banner" className={styles.header}>
      <h1 className={styles.headerTitle}>Logo here</h1>
      <SearchBar />
      <Nav />
    </header>
  )
}

export default Header