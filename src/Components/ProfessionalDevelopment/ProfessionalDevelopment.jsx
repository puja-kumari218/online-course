import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Card, Button } from 'react-bootstrap';
import styles from './ProfessionalDevelopment.module.css';
import list from "../../professionalDev.json";

function ProfessionalDevelopment() {

  const [professionalList, setProfessionalList] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(list.professionalProgramsList[0].details);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setProfessionalList(list.professionalProgramsList);
  }, [professionalList]);
  console.log(selectedProgram);
  const handleProgramClick = (index) => {
    setSelectedProgram(professionalList[index].details);
    setSelectedItem(selectedItem === index ? null : index);
  };
  return (
    <div className={styles.ProfessionalDevelopmentMainContainer}>
      <div className={styles.ProfessionalDevelopmentContainer}>
        <div className={styles.ProfessionalDevHeaderContainer}>
          <h2 className={styles.heading}>Professional Development<br /> Programs</h2>
          <p className={styles.mainText}>Some introductory text about professional development programs.</p>
        </div>
        <div className={styles.programSection}>
          <div className={styles.leftSection}>
            {professionalList.map((item, index) => {
              return (
                <>
                  {/* <div key={index} className={styles.leftSectionCardList} onClick={() => handleProgramClick(index)}>
                    <p>{item.title}</p>
                    <IoArrowForwardCircleOutline />
                  </div> */}
                  <div
                    key={index}
                    className={`${styles.leftSectionCardList} ${selectedItem === index ? styles.selectedItem : ''}`}
                    onClick={() => handleProgramClick(index)}
                  >
                    <p>{item.title}</p>
                    {selectedItem === index ? <IoArrowDownCircleOutline /> : <IoArrowForwardCircleOutline />}
                  </div>
                </>
              )
            })}
          </div>
          <div className={styles.CardSection}>
            {selectedProgram &&
              selectedProgram.map((detail, index) => {
                return (
                  <Card className={styles.rightCard}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/collaborative-process-multicultural-businesspeople-using-laptop-presentation-communication-meeting-brainstorming-ideas-about-new-project-colleagues-working-plan-success-strategy-home-office_7861-2588.jpg?w=1060&t=st=1704378260~exp=1704378860~hmac=a10c2e595239a1cb4695ee1cbf839800fca9d5e9a63a6b19697a1ecd1297e799" />
                    <Card.Body>
                      <div className={styles.CardHeading}>
                        <Card.Title>{detail.name}</Card.Title>
                      </div>
                      <div className={styles.Cardtext}>
                        <Card.Text className={styles.CardSectionText}>  {detail.description} </Card.Text>
                        <br />
                        <Card.Text className={styles.CardSectionText}>  {detail.Text}</Card.Text>
                      </div>
                      <Button variant="primary" className={styles.learnMoreBtn}>
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfessionalDevelopment;
