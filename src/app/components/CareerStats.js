"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaClock,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";
import styles from "./CareerStats.module.css";

const CareerStats = () => {
  const [animateCount, setAnimateCount] = useState(false);
  const stats = [
    {
      icon: <FaLaptopCode />,
      label: "Experience",
      count: 1.5,
      suffix: "+ years",
    },
    {
      icon: <FaClock />,
      label: "Working Hours",
      count: 100,
      suffix: "+ hours",
    },
    { icon: <FaCode />, label: "Skills", count: 10, suffix: "+ techs" },
    {
      icon: <FaProjectDiagram />,
      label: "Projects",
      count: 15,
      suffix: "+ completed",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Count animation
  const CountAnimation = ({ targetNumber, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animateCount) return;

      let start = 0;
      const increment = targetNumber / 40;
      const timer = setInterval(() => {
        start += increment;
        if (start > targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 40);

      return () => clearInterval(timer);
    }, [targetNumber, animateCount]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.headerContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setAnimateCount(true)}
      >
        <h2 className="heading">
          Career <span style={{ color: "#df9306" }}>Stats</span>
        </h2>
        <p className="info">
          A quick overview of my professional journey and achievements in web
          development
        </p>
      </motion.div>

      <motion.div
        className={styles.statsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statCard}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className={styles.iconContainer}>{stat.icon}</div>
            <h3 className={styles.statCount}>
              <CountAnimation targetNumber={stat.count} suffix={stat.suffix} />
            </h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CareerStats;
