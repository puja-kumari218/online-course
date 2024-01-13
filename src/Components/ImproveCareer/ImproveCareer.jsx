import React from 'react';
import styles from './ImproveCareer.module.css'; 

const ImproveCareer = () => {
  return (
    <div className={styles.ImproveCareerMainContainer}>
      <div className={styles.improveCareerContainer}>
        <div className={styles.improveCareerContainerHeading}>
          <h2>Ready for Training or Consulting to <br />
            Improve Your Career</h2>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2>Find the Appropriate Training</h2>
            <p>Find training that puts your needs and goals</p>
            <button className={styles.blueBtn}>Finding Training</button>
          </div>
          <div className={styles.card}>
            <h2>Arrange Your Job Consultation</h2>
            <p>Find training that puts your needs and goals</p>
            <button className={styles.blueBtn}>Set a Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImproveCareer;
