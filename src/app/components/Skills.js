// components/Skills.js
"use client";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBootstrap,
  FaPalette,
  FaWind,
  FaShieldAlt,
  FaGithub,
} from "react-icons/fa";
const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const circularSkills = [
    { icon: <FaCode />, name: "Frontend", percentage: 95 },
    { icon: <FaServer />, name: "Backend", percentage: 75 },
    { icon: <FaDatabase />, name: "Database", percentage: 70 },
    { icon: <FaBootstrap />, name: "Bootstrap", percentage: 75 },
    { icon: <FaPalette />, name: "UI/UX", percentage: 80 },
    { icon: <FaWind	 />, name: "Tailwindcss", percentage: 70 },
    { icon: <FaCode/>, name: "VS code", percentage: 80 },
    { icon: <FaGithub />, name: "GitHub", percentage: 85 },
  ];

  return (
    <section className={styles.skills} id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        style={{ textAlign: "center", margin: "20px" }}
      >
        <h2 className="heading">
          My <span style={{ color: "#df9306" }}>Skills</span>
        </h2>
        <p className="info">
          I am proficient in a variety of programming languages, frameworks, and
          tools. My skill set allows me to create robust and efficient web
          applications that are visually appealing and user-friendly.
        </p>
      </motion.div>

      <motion.div
        className={styles.skillsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.skillsRow}>
          <div className={styles.column}>
            <motion.div
              className={styles.skillBox}
              variants={skillVariants}
              whileHover="hover"
            >
              <h3>Frontend Development</h3>
              <motion.div className={styles.skillItem}>
                <p>HTML/CSS</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "90%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div className={styles.skillItem}>
                <p>JavaScript</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "85%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div className={styles.skillItem}>
                <p>React.js</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "80%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div className={styles.skillItem}>
                <p>Next.js</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "70%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className={styles.column}>
            <motion.div
              className={styles.skillBox}
              variants={skillVariants}
              whileHover="hover"
            >
              <h3>Backend Development</h3>
              <motion.div className={styles.skillItem}>
                <p>Node.js</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "75%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div className={styles.skillItem}>
                <p>Express.js</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "70%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div className={styles.skillItem}>
                <p>MongoDB</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "65%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div className={styles.skillItem}>
                <p>Firebase</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ width: "60%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className={styles.circularSkills}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {circularSkills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.circularSkill}
              variants={skillVariants}
              whileHover="hover"
            >
              <div className={styles.circularProgress}>
                <svg className={styles.circularChart} viewBox="0 0 36 36">
                  <path
                    className={styles.circularBg}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className={styles.circularPath}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "0 100" }}
                    whileInView={{
                      strokeDasharray: `${skill.percentage} 100`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </svg>
                <div className={styles.circularContent}>
                  <div className={styles.circularIcon}>{skill.icon}</div>
                  <div className={styles.circularPercentage}>
                    {skill.percentage}%
                  </div>
                  <div className={styles.circularName}>{skill.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
