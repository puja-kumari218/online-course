import React from 'react';
import styles from './ClientSection.module.css';


const ClientSection = () => {
  return (
    <div className={styles.clientSection}>
      <div className={styles.clientItem}>
        <img src="./qIcon.png" alt='' />
        <p>Quotient</p>
      </div>
      <div className={styles.clientItem}>
        <img src="./thunder.png" alt="Client 2" />
        <p>Sisyphus</p>
      </div>
      <div className={styles.clientItem}>
        <img src="./hourglass.png" alt="Client 3" />
        <p>Hourglass</p>
      </div>
      <div className={styles.clientItem}>
        <img src="./capsule.png" alt="Client 4" id={styles.clientItemCapsuleImg} />
        <p id={styles.clientItemCapsuleText}>Capsule</p>
      </div>
      <div className={styles.clientItem}>
        <img src="./dyson-sphere.png" alt="Client 5" />
        <p>Spherule</p>
      </div>
    </div>
  );
};

export default ClientSection;
