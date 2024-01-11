import React, { useState, useRef, useEffect } from 'react';
import styles from './Testimonials.module.css';
import testimonialsArray from "../../Testimonials.json";
import Card from 'react-bootstrap/Card';

const Testimonials = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [testimonialCard, setTestimonialCard] = useState([]);

    const carouselRef = useRef(null);

    useEffect(() => {
        setTestimonialCard(testimonialsArray.testimonials);
    }, []);

    console.log(testimonialsArray.testimonials);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX - translateX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX - startX;
        setTranslateX(x);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        handleInfiniteScroll();
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        handleInfiniteScroll();
    };

    const handleInfiniteScroll = () => {
        const carouselWidth = carouselRef.current.clientWidth;
        const cardWidth = 220; // Adjust this value based on your card width + margin

        if (translateX > 0) {
            setTranslateX(0);
        } else if (Math.abs(translateX) + carouselWidth > testimonialCard.length * cardWidth) {
            setTranslateX(-(testimonialCard.length * cardWidth - carouselWidth));
        }
    };

    return (
        <div
            className={styles.carouselContainer}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ref={carouselRef}
        >
                    <div className={styles.TestimonialsHeaderContainer}>
            <h1>Testimonials and Feedback</h1>
            <p>Experiential and transformational sales and leadership training</p>
        </div>

            <div
                className={styles.carouselWrapper}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                <div className={styles.row}>
                    {testimonialCard.map((card, index) => (
                        <Card border="secondary" key={index} className={styles.card}>
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
                className={styles.carouselWrapper}
                style={{ transform: `translateX(${translateX}px)` }}
            >
                <div className={styles.row}>
                    {testimonialCard.map((card, index) => (
                        <Card border="secondary" key={index} className={styles.card}>
                            <div className={styles.cardLeftSection}>
                                <Card.Img className={styles.testimonyCardImg} src={card.testimonialImg} />
                                <div>
                                    <Card.Header>{card.testimonyName}</Card.Header>
                                    <Card.Title>{card.testimonyEmail}</Card.Title>
                                </div>
                            </div>
                            <Card.Body className={styles.cardRightSetion}>
                                <Card.Text className={styles.TestimonialsText} >{card.testimonialDescription}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;