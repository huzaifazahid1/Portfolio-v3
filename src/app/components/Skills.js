// components/Skills.js

import styles from './Skills.module.css';

const Skills = () => {
  const horizontalBars = [
    { skill: 'HTML', value: 100 },
    { skill: 'CSS', value: 85 },
    { skill: 'jQuery', value: 80 },
    { skill: 'JavaScript', value: 85 },
    { skill: 'Bootstrab', value: 87 },
    { skill: 'React Js', value: 75 },
    { skill: 'Next Js', value: 90 },
    { skill: 'Redux', value: 95 },
    { skill: 'MongoDB', value: 92 },
  ];

  const circularBars = [
    { skill: 'Creativity', value: 85 },
    { skill: 'Communication', value: 75 },
    { skill: 'Problem Solving', value: 90 },
    { skill: 'Critical Thinking', value:75  },
  ];

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }} id="skills">
        <h2 className="heading">
          Major <span style={{ color: "#df9306" }}>Skills</span>{" "}
        </h2>
        <p className="info">
          A summary of my technical expertise. Explore the skills and
          technologies that I bring to every project.
        </p>
      </div>
      <section className={styles.skills}>
        <div className={styles.barContainer}>
          {horizontalBars.map((bar, index) => (
            <div key={index} className={styles.bar}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className={styles.skillName}>{bar.skill}</span>
                <span
                  className={styles.value}
                  style={{ "--percent": `${bar.value}` }}
                >{`${bar.value}%`}</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${bar.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.circularBarContainer}>
          {circularBars.map((bar, index) => (
            <div className={styles.circle_wrap} key={index}>
              <div className={styles.circle}>
                <div className={`${styles.half} ${styles.mask}`}>
                  <div className={styles.fill}></div>
                </div>
                <div className={`${styles.full} ${styles.mask}`}>
                  <div
                    className={styles.fill}
                    style={{
                      transform: `rotate(${(bar.value / 100) * 180}deg)`,
                    }}
                  ></div>
                </div>
                <div className={styles.inside_circle}> {bar.value} </div>
              </div>
              <h4 style={{ color: "white", marginTop: "150px" }}>
                {bar.skill}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;