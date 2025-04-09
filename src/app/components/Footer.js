// components/Footer.js
"use client"
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope 
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <motion.div className={styles.container} variants={itemVariants}>
        <motion.div className={styles.logo} variants={itemVariants}>
          <h2>
            Huzaifa<span style={{ color: "#ec8208" }}>Dev</span>
          </h2>
          <p>
            Creating elegant, responsive websites with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div className={styles.socialLinks} variants={itemVariants}>
          <motion.a href="https://www.facebook.com/share/1E6K2VJTuj/" target="_blank" variants={iconVariants} whileHover="hover">
            <FaFacebook />
          </motion.a>
          <motion.a href="mailto:zahidhuzaifa006@gmail" target="_blank" variants={iconVariants} whileHover="hover">
            <FaEnvelope  />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/huzaifa-zahid-369b4a291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" variants={iconVariants} whileHover="hover">
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://github.com/huzaifazahid1" target="_blank" variants={iconVariants} whileHover="hover">
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div className={styles.copyright} variants={itemVariants}>
        <p>&copy; {currentYear} Huzaifa. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
