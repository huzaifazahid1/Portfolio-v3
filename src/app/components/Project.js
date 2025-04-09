// components/Project.js
"use client";
import styles from "./Project.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCrown, FaStar } from "react-icons/fa";

const Project = ({ project }) => {
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
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className={styles.project}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className={styles.imageContainer}>
        <Image src={project.image} alt={project.title} />
		
        <div className={styles.overlay}>
		
          <div className={styles.links}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
		
      </div>
	      


      <div className={styles.content}>
	      {project.badge && (
      <span
         style={{backgroundColor:"#ec8208",position:"absolute",top:"2px",right:"10px",borderRadius:"10px",padding:"2px 10px",fontSize:"11px"}}
      >
        {project.badge === "Top" ? (
          <FaCrown className="text-yellow-300" />
        ) : (
          <FaCrown className="text-purple-300" />
        )}
        {project.badge}
      </span>
    )}

        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
