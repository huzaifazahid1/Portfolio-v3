// components/Footer.js

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Replace with actual logo image path */}
          {/* <img src="/logo.svg" alt="Logo" /> */}
        </div>
        <div className={styles.social}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2025. All rights reserved by Huzaifa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
