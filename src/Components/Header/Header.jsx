import React from 'react';
import { FaEye } from 'react-icons/fa'; 
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <FaEye /> Envision
        </div>
        <div className={styles.navItems}>
          <span>Solution</span>
          <span>Course</span>
          <span>Consultant</span>
          <span>Resources</span>
          <span>Events</span>
          <span>About Us</span>
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
