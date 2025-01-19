// components/Hero.js
import pic from "../../../public/user.png";
import Image from "next/image";
import styles from "./Hero.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <h1>
          My name is <span style={{ color: "#ec8208" }}>Huzaifa</span>
        </h1>
        <h2>I'm a Frontend Developer</h2>
        <p style={{ width: "80%", lineHeight: "1.3" }}>
          I can create interactive and user-friendly website according to your
          needs and requirnments more than 1 year of experience in this field.
          Let's bring your digital vision to life
        </p>
        <button className={styles.button}>
          Let's Talk
          <FaLongArrowAltRight
            style={{ width: "25px", height: "25px", color: "#ec8208",background:"black",padding:"5px",display:"block",margin:"auto",borderRadius:"50%" }}
          />
        </button>
      </div>
      <div className={styles.container2}>
        <Image className={styles.image} src={pic} width={420} height={420} alt="user" />
      </div>
    </section>
  );
};

export default Hero;
