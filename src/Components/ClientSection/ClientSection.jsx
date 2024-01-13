import React from 'react';
import styles from './ClientSection.module.css';


const ClientSection = () => {
  return (
    <div className={styles.clientSection}>
      <div className={styles.clientItem}>
        <img src="./ClientImg.png" alt='' />
      </div>
      <div className={styles.clientItem}>
        <img src="./Client1Img.png" alt="Client 2" />
      </div>
      <div className={styles.clientItem}>
        <img src="./Client2Img.png" alt="Client 3" />
      </div>
      <div className={styles.clientItem}>
        <img src="./Client3Img.png" alt="Client 4" id={styles.clientItemCapsuleImg} />
      </div>
      <div className={styles.clientItem}>
        <img src="./Client4Img.png" alt="Client 5" />
      </div>
    </div>
  );
};

export default ClientSection;
