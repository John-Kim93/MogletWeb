import styles from '../styles/header.module.css';
import DarkModeToggleBtn from './elements/darkModeToggleBtn';

export default function Header() {
  const logout = () => {
    console.log("logout")
  }
  return (
    <div className={styles.navBar}>
      <div className={styles.nav}>
        <p
          className={styles.content}
          onClick={logout}
        >로그아웃</p> 
        <p
          className={styles.content}
        >정보변경</p>
        <DarkModeToggleBtn />
      </div>
    </div>
  )
}