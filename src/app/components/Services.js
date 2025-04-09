// components/Services.js
"use client";
import { SlVector } from "react-icons/sl";
import { GrDocumentPerformance } from "react-icons/gr";
import { CiPalette } from "react-icons/ci";
import { TbDeviceMobileShare } from "react-icons/tb";
import { GoArrowDownRight } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./Services.module.css";

const Services = () => {
  const services = [
    {
      icon: SlVector, // Replace with actual icon path
      title: "Website Design",
      description:
        "Competent in designing user-friendly and aesthetically pleasing websites",
    },
    {
      icon: TbDeviceMobileShare, // Replace with actual icon path
      title: "Responsive Design",
      description:
        "Adept at designing websites that work seamlessly across various devices.",
    },
    {
      icon: CiPalette, // Replace with actual icon path
      title: "User Interface",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
    },
    {
      icon: GrDocumentPerformance, // Replace with actual icon path
      title: "Good Performance",
      description:
        "Proven ability to deliver high-quality work efficiently, meeting deadlines and exceeding expectations.",
    },
    {
      icon: BsBrowserChrome, // Replace with actual icon path
      title: "Cross-Browser",
      description:
        "Ensures consistency across all major browsers, delivering reliable performance",
    },
    {
      icon: FaReact, // Replace with actual icon path
      title: "Pixel & Flow",
      description:
        "Seamless React and Next.js development for engaging user interfaces",
    },
  ];

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

  const serviceVariants = {
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

  return (
    <section id="services" className={styles.services}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", margin: "20px" }}
      >
        <h2 className="heading">
          My <span style={{ color: "#df9306" }}>Services</span>{" "}
        </h2>
        <p className="info">
          Specialization in crafting user-centered web experiences that are
          visually appealing, responsive, and performant.
        </p>
      </motion.div>
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.service}
            variants={serviceVariants}
            whileHover="hover"
          >
            <div className={styles.icon}>
              <service.icon className={styles.i} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <GoArrowDownRight className={styles.ic} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
