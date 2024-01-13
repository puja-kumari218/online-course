import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.headerlogo}>
          <img className={styles.image} src="./Headerlogo.png" alt="logo" />
        </div>
        <div className={styles.navItems}>
          <span>HOME</span>
          <span>SERVICES</span>
          <span>CLIENTS</span>
          <span>CASE STUDY</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.registerBtn}>Register</button>
      </div>
    </div>
  );
};

export default Header;
