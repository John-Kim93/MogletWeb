import styles from "../styles/layout.module.css"
import SideNav from "./sidenav";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <SideNav />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}