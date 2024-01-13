import React, { useState, useRef, useEffect } from 'react'
import testimonialsArray from "../../Testimonials.json";
import Card from 'react-bootstrap/Card';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const [translateX, setTranslateX] = useState(0);
    const [testimonialCard, setTestimonialCard] = useState([]);

    const carouselRef = useRef(null);

    useEffect(() => {
        setTestimonialCard(testimonialsArray.testimonials);
    }, []);

    return (
        <div className={styles.carouselContainer}
        >
            <div className={styles.TestimonialsHeaderContainer}>
                <h1>Testimonials and Feedback</h1>
                <p>Experiential and transformational sales and leadership training</p>
            </div>

            <div
                className={styles.slider}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                <div className={styles.slideTrack}>
                    {testimonialCard.map((card, index) => (
                        <Card border="secondary" key={index} className={styles.slide}>
                            <div className={styles.cardLeftSection}>
                                <Card.Img className={styles.testimonyCardImg} src={card.testimonialImg} />
                                <div>
                                    <Card.Header>{card.testimonyName}</Card.Header>
                                    <Card.Title>{card.testimonyEmail}</Card.Title>
                                </div>
                            </div>
                            <Card.Body className={styles.cardRightSetion}>
                                <Card.Text className={styles.TestimonialsText}>{card.testimonialDescription}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <div
                className={styles.slider}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                <div className={styles.slideTrack}>
                    {testimonialCard.map((card, index) => (
                        <Card border="secondary" key={index} className={styles.slide}>
                            <div className={styles.cardLeftSection}>
                                <Card.Img className={styles.testimonyCardImg} src={card.testimonialImg} />
                                <div>
                                    <Card.Header>{card.testimonyName}</Card.Header>
                                    <Card.Title>{card.testimonyEmail}</Card.Title>
                                </div>
                            </div>
                            <Card.Body className={styles.cardRightSetion}>
                                <Card.Text className={styles.TestimonialsText}>{card.testimonialDescription}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;