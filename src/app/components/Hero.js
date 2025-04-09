// components/Hero.js
"use client"
import pic from "../../../public/user.png";
import Image from "next/image";
import styles from "./Hero.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div style={{position:"relative",width:"100%",minHeight:"75vh"}}>
       <video autoPlay loop muted style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover"}}>
        <source src="./bg1.mp4" type="video/mp4"/>
      </video>
    <section className={styles.hero} id="home" style={{position:"relative",zIndex:"1",background:"transparent"}}>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <motion.h1 variants={fadeIn} custom={0}>
          My name is <span style={{ color: "#ec8208" }}>Huzaifa</span>
        </motion.h1>
        <motion.h2 variants={fadeIn} custom={1}>
          I'm a MERN Stack Developer
        </motion.h2>
        <motion.p
          variants={fadeIn}
          custom={2}
          style={{ width: "80%", lineHeight: "1.5" }}
        >
          Self-taught MERN Stack Developer with 1.5 years of web development experience. Skilled in building full-stack apps with Next.js, React, Node.js, and MongoDB. Let’s collaborate and bring your ideas to life!


        </motion.p>
        <motion.button
          className={styles.button}
          variants={fadeIn}
          custom={3}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        > <a href="#contact">
          Let's Talk</a>
          <FaLongArrowAltRight
            style={{
              width: "25px",
              height: "25px",
              color: "#ec8208",
              background: "black",
              padding: "5px",
              display: "block",
              margin: "auto",
              borderRadius: "50%",
            }}
          />
        </motion.button>
      </motion.div>
      <motion.div
        className={styles.container2}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            className={styles.image}
            src={pic}
            width={420}
            height={420}
            alt="user"
            priority
          />
        </motion.div>
      </motion.div>

    </section>
    </div>
  );
};

export default Hero;
