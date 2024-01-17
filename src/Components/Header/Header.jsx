import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.headerlogo}>
          <img className={styles.image} src="./Headerlogo.png" alt="logo" />
        </div>
        <div className={styles.navItems}>
          <Link to="/online-course"> <span>HOME</span></Link>
          <Link to="#"> <span>SERVICES</span></Link>
          <Link to="#"> <span>CLIENTS</span></Link>
          <Link to="#"> <span>CASE STUDY</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
