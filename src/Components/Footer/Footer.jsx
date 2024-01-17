import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEye } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (

    <div className={styles.FooterMainContainer} >
      <div className={styles.footerContainer}>
        <div className={styles.leftSectionHeading}>
          <h2>Empowering Excellence in Workforce <br />
            Development and Strategic Consulting,<br />
            Your Partner for Siccess</h2>
          <div className={styles.socialIcons}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.companyInfoHeading}>
            <h2>Company Info</h2>
            <p>Login</p>
            <p>About Us</p>
            <p>Global Location</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Partner</p>
          </div>
          <div className={styles.companyInfoHeading}>
            <h2>Learn More</h2>
            <p>Instructor Relations</p>
            <p>Government Services</p>
            <p>Continuing Education</p>
            <p>Sitemap</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <hr />
        <div className={styles.BottomContainer}>
          <div className={styles.headerlogo}>
          <img className={styles.image} src="./Headerlogo.png" alt="logo" />
        </div>

          <div className={styles.TermsRightSideText}>
            Terms of Use <span className={styles.verticalLine}></span> Privacy Policy{' '}
            <span className={styles.verticalLine}></span> Security
          </div>
        </div>
        <hr />
      </div>

    </div>
  );
};

export default Footer;
