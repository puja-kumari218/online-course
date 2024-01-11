import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEye } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (

    <div className={styles.FooterMainContainer} >
      <div className={styles.footerContainer}>
        {/* Left Section */}
        <div className={styles.leftSectionHeading}>
          <h2>Empowering Excellence in Workforce <br />
            Development and Strategic Consulting,<br />
            Your Partner for Siccess</h2>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Company Info */}
          <div className={styles.companyInfoHeading}>
            <h2>Company Info</h2>
            <p>Login</p>
            <p>About Us</p>
            <p>Global Location</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Partner</p>
          </div>

          {/* Learn More */}
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
          <div className={styles.EnvisionleftLineIcon}>
            <FaEye /> Envision
          </div>
          <div className={styles.TermsRightSideText}>
            Terms of Use <span className={styles.verticalLine}></span> Privacy Policy{' '}
            <span className={styles.verticalLine}></span> Security
          </div>
        </div>
        <hr />

        {/* Copyright and Design By */}
        <div className={styles.footerBottom}>
          <div className={styles.leftBottomText}>Copyright 2023</div>
          <div className={styles.rightBottom}>Design by SomeSquare</div>
        </div>


      </div>

    </div>
  );
};

export default Footer;
