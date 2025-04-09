// components/Testimonial.js
"use client";
import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = ({ testimonial }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className={styles.testimonial}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className={styles.quoteIcon}>
        <FaQuoteLeft />
      </div>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className={styles.info}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.jobTitle}</p>
	  <p style={{color:"silver"}}>{testimonial.location}</p>
        </div>
      </div>
      <p className={styles.text}>{testimonial.text}</p>
      <div className={styles.rating}>
        {[...Array(testimonial.rating)].map((_, index) => (
          <span key={index} className={styles.star}>
            ★
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
