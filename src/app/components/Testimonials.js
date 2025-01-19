// components/Testimonial.js

import styles from "./Testimonials.module.css";

const Testimonials = ({ testimonial }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.profile}>
        <div className={styles.image}>
           <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className={styles.info}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.jobTitle}</p>
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
    </div>
  );
};

export default Testimonials;
