import React, {useState, useEffect} from 'react';
import styles from "./Programs.module.css";
import program from "../../program.json";
import Card from 'react-bootstrap/Card';

const Programs = () => {

    console.log(program.programArray);

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        setPrograms(program.programArray);
    }, []);

  return (

    <div className={styles.ProgramsMainContainer}>
            <div className={styles.programsContainer}>
        <div className={styles.programHeaderContainer}>
            <h1>Programs to Elevate Your Workforce</h1>
            <p>Experiential and transformational sales and leadership training</p>
        </div>
        <div className={styles.programDetailsContainer}>
            {programs.map((program, index) => {
                    return (         
                        <Card border="primary" key={index} className={styles.programCardContainer}>
                            <Card.Header className={`${styles.programCardType} ${program.programType.startsWith('Free') ? styles.greenText : ''}`} id="programCard">{program.programType}</Card.Header>
                            <Card.Body>
                                <Card.Title className={styles.programCardTitie}>{program.programTitle}</Card.Title>
                                <Card.Text className={styles.programCardDescription}>{program.programdescription}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className={styles.programCardFooter}>
                               <button>{program.button}</button>
                            </Card.Footer>
                        </Card>
                    )
                })}
        </div>
    </div>

    </div>
  )
}

export default Programs;
