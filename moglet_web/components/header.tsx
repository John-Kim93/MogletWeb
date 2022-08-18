import * as React from 'react';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <div className={styles.navBar}>
      <div className={styles.nav}>
        <p>로그아웃 | 회원정보 변경</p>
      </div>
      <button>test</button>
    </div>
  )
}