// ComprehensiveContainer.jsx
import React from 'react';
import { FaCircle } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { Card, Button } from 'react-bootstrap';
import styles from './ComprehensiveContainer.module.css';

const ComprehensiveContainer = () => {
  return (
    <div className={styles.comprehensiveMainContainer}>
      <div className={styles.comprehensiveContainer}>
        <div className={styles.centerHeading}>
          <h2>Comprehensive Training and Consulting <br />
            Solutions Tailored to Your Needs
          </h2>
          <p>With a focus on individual attention, we are committed to delivering customized strategies, empowering your<br />
            workforce, and guiding your business to sustainable growth and excellence</p>
        </div>
        <div className={styles.cardSection}>
          <Card className={styles.leftCard}>
            <Card.Body>
              <Card.Title className={styles.CardTitle}>Our Approach to Leadership<br />Development</Card.Title>
              <Card.Text className={styles.CardText}>
                FranklinCovey is the world's most trusted provider of leadership development
                solutions that unleash the full potential of leaders and their teams.
                <br />
                <br />
                Our unique approach to leadership development combines powerful
                content based on decades of research and development,
                expert consultants and facilitators, and innovative technology that supports and reinforces lasting behavior change.
              </Card.Text>
              <div className={styles.leftSectionButton}>
                <button className={styles.WhiteBtn}>
                  See More <IoArrowForwardCircleOutline />
                </button>
              </div>
            </Card.Body>
          </Card>
          <Card className={styles.rightCard}>
            <Card.Body>
              <Card.Title className={styles.CardTitle1}>Leadership development expands a leader's impact</Card.Title>
              <Card.Text className={styles.CardText1}>As leaders adopt and internalize principles of
                individual effectiveness, they: </Card.Text>
              <div className={styles.listContainer}>
                <ul>
                  <li>
                    <FaCircle /> Build their character and competence.
                  </li>
                  <li>
                    <FaCircle /> See their purpose and connect it with key business goals.
                  </li>
                  <li>
                    <FaCircle /> Develop emotional resilience and agility.
                  </li>
                </ul>
              </div>
              <div className={styles.rightSectionButton}>
                <button className={styles.SeeMoreRedBtn}>
                  See More Information
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default ComprehensiveContainer;
