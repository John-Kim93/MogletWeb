import styles from '../styles/header.module.css';
import DarkModeToggleBtn from './elements/darkModeToggleBtn';

export default function Header() {
  const logout = () => {
    console.log("logout")
  }
  return (
    <div className={styles.navBar}>
      <div className={styles.nav}>
        <div
          className={styles.logout}
          onClick={logout}
        >로그아웃 | </div> 
        <div>회원정보 변경</div>
        <DarkModeToggleBtn />
      </div>
    </div>
  )
}