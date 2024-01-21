import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={styles.MainheaderContainer}>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <div className={styles.headerlogo}>
            <img className={styles.image} src="./Headerlogo.png" alt="logo" />
          </div>
        </div>
        {/* Hamburger icon for mobile view */}
        <div className={`${styles.mobileIcon} ${isMobileMenuOpen ? styles.active : ''}`} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <AiOutlineClose /> : <IoMdMenu />}
        </div>
        {/* Navigation items for mobile view */}
        <div className={`${styles.navItems} ${isMobileMenuOpen ? styles.active : ''}`}>
          <Link to="/online-course"> <span>HOME</span></Link>
          <Link to="#"> <span>SERVICES</span></Link>
          <Link to="#"> <span>CLIENTS</span></Link>
          <Link to="#"> <span>CASE STUDY</span></Link>
          {/* Contact Us button for mobile view */}
          <div className={styles.contactButtonMobile}>
            <button>Contact Us</button>
          </div>
        </div>
        {/* Contact Us button for desktop view */}
        <div className={styles.contactButton}>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
