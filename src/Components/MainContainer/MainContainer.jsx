import React from 'react';
import styles from './MainContainer.module.css';
import ClientSection from '../ClientSection/ClientSection';
import ComprehensiveContainer from '../ComprehensiveContainer/ComprehensiveContainer';
import ProfessionalDevelopment from '../ProfessionalDevelopment/ProfessionalDevelopment';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuUser2, LuUsers } from "react-icons/lu";
import { TbUsersGroup } from "react-icons/tb";
import Programs from '../Programs/Programs';
import Training from '../Training/Training';
import Testimonials from '../Testimonials/Testimonials';
import ImproveCareer from '../ImproveCareer/ImproveCareer'
import Footer from '../Footer/Footer';

const MainContainer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <button className={styles.btn}>Empowering Training and Consultant</button>
          <h2>Empowering Excellence<br /> through Training and <br /> Consulting</h2>
          <p>Our expert training and consulting solutions pave the way for your organization's success
            by driving continuous improvement, innovation and exceptional performance</p>

          <div className={styles.leftSectionButton}>
            <button className={styles.StartBtn}>
              Start The Transformation <IoArrowForwardCircleOutline />

            </button>
            <button className={styles.Contactbtn}>
              Contact Us
            </button>
          </div>

          <div className={styles.bigButton}>
            <div className={styles.userBtnIcon}>
              <LuUser2 /> Individuals
            </div>
            <div className={styles.userBtnIcon}>
              <LuUsers />
              Scaling Companies
            </div>
            <div className={styles.userBtnIcon}>
              <TbUsersGroup />
              Enterprise
            </div>
          </div>
        </div>
        <div className={styles.rightSectionContainer}>
          <img className={styles.rightSectionContainerImage} src="./image.png" alt="Image 1" />
          <img className={styles.rightSectionContainerImage1} src="https://img.freepik.com/free-photo/side-view-three-people-business-meeting_1098-19141.jpg?size=626&ext=jpg&ga=GA1.1.1247558506.1703918531&semt=ais" alt="Image 2" />
        </div>
      </div>
      <ClientSection />
      <ComprehensiveContainer />
      <ProfessionalDevelopment />
      <Programs />
      <Training />
      <Testimonials />
      <ImproveCareer />
      <Footer />
    </div>

  );
};

export default MainContainer;

