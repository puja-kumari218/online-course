// Training.jsx
import React from 'react';
import styles from './Training.module.css';

const Training = () => {
  return (
    <div className={styles.MainTrainingContainer}>
      <div className={styles.trainingContainer}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <h1>Proving Excellence Through<br />
            Training & Consulting"
          </h1>
          <p>Increasing organizational productivity and driving sustainable growth. Our success stories and cilent testimonials are a testament to the real improvements that can be achieved through our specialized services </p>
        </div>

        {/* Right Side */}
        <div className={styles.rightSide}>
          <div className={styles.numberBox}>
            <h1>160+</h1>
            <p>Proving Excellence Through</p>
          </div>

          <div className={styles.numberBox}>
            <h1>35+</h1>
            <p>Proving Excellence Through</p>
          </div>

          <div className={styles.numberBox}>
            <h1>5k+</h1>
            <p>Proving Excellence Through</p>
          </div>

          <div className={styles.numberBox}>
            <h1>15k+</h1>
            <p>Proving Excellence Through</p>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Training;
