import React from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Card, Button } from 'react-bootstrap';
import styles from './ProfessionalDevelopment.module.css';

function ProfessionalDevelopment() {
  return (
    <div className={styles.ProfessionalDevelopmentMainContainer}>
      <div className={styles.ProfessionalDevelopmentContainer}>
        <div className={styles.ProfessionalDevHeaderContainer}>
          <h2 className={styles.heading}>Professional Development<br /> Programs</h2>
          <p className={styles.mainText}>Some introductory text about professional development programs.</p>
        </div>
        <div className={styles.programSection}>
          <div className={styles.leftSection}>
            <div className={styles.leftSectionFirstElement}>
              <p>Sales Training</p>
              <IoArrowForwardCircleOutline />
            </div>
            <div className={styles.leftSectionCardList}>
              <p>Private Training on-site </p>
              <IoArrowDownCircleOutline />
            </div>
            <div className={styles.leftSectionCardList}>
              <p>Leadership Training </p>
              <IoArrowDownCircleOutline />
            </div>
            <div className={styles.leftSectionCardList}>
              <p>Customer Service Training </p>
              <IoArrowDownCircleOutline />
            </div>
            <div className={styles.leftSectionCardList}>
              <p>Coprate Training </p>
              <IoArrowDownCircleOutline />
            </div>
          </div>
          <div className={styles.CardSection}>
            <Card className={styles.rightCard}>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/collaborative-process-multicultural-businesspeople-using-laptop-presentation-communication-meeting-brainstorming-ideas-about-new-project-colleagues-working-plan-success-strategy-home-office_7861-2588.jpg?w=1060&t=st=1704378260~exp=1704378860~hmac=a10c2e595239a1cb4695ee1cbf839800fca9d5e9a63a6b19697a1ecd1297e799" />
              <Card.Body>
                <div className={styles.CardHeading}>
                  <Card.Title>Sales Training</Card.Title>
                </div>
                <div className={styles.Cardtext}>
                  <Card.Text className={styles.CardSectionText}>
                    FranklinCovey is the world's most trusted provider of leadership development
                    solutions that unleash the full potential of leaders and their teams.
                    FranklinCovey is the world's most trusted provider of leadership development
                    FranklinCovey is the world's most trusted provider of leadership development
                  </Card.Text>
                  <br />
                  <Card.Text className={styles.CardSectionText}>
                    FranklinCovey is the world's most trusted provider of leadership development
                    solutions that unleash the full potential of leaders and their teams.
                  </Card.Text>
                </div>
                <Button variant="primary" className={styles.learnMoreBtn}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfessionalDevelopment;
