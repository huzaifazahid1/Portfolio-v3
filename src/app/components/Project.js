// components/Project.js

import styles from "./Project.module.css";
import Image from "next/image";
const Project = ({ project }) => {
     return (
       <div className={styles.project}>
         <div className={styles.imageContainer}>
           <Image src={project.image} alt={project.title} />
         </div>
         <div className={styles.content}>
           <h2>{project.title}</h2>
           <p>{project.description}</p>
           <div className={styles.technologies}>
             {project.technologies.map((tech, index) => (
               <span key={index}>{tech}</span>
             ))}
           </div>
         </div>
       </div>
     );
};

export default Project;
