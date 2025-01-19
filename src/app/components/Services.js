// components/Services.js
import { SlVector } from "react-icons/sl";
import { GrDocumentPerformance } from "react-icons/gr";
import { CiPalette } from "react-icons/ci";
import { TbDeviceMobileShare } from "react-icons/tb";
import { GoArrowDownRight } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
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

  return (
    <section id="services" className={styles.services}>
      <div>
        <h2 className="heading">
          My <span style={{ color: "#df9306" }}>Services</span>{" "}
        </h2>
        <p className="info">
          Specialization in crafting user-centered web experiences that are
          visually appealing, responsive, and performant.
        </p>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.service}>
            <div className={styles.icon}>
              <service.icon className={styles.i} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <GoArrowDownRight className={styles.ic} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
