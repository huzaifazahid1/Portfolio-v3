// components/Contact.js

import styles from "./Contact.module.css";
import { FaMap } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div id="contact" style={{ textAlign: "center", margin: "20px" }}>
        <h2 className="heading">
          Get in <span style={{ color: "#df9306" }}>Touch</span>{" "}
        </h2>
        <p className="info">
          Let's collaborate on your next web project. Contact me for a free
          consultation and a personalized quote
        </p>
      </div>
      <section className={styles.contact}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input className={styles.input} type="text" id="subject" placeholder="Enter subject" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea className={styles.textarea} id="message" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className={styles.button}>
            SEND MESSAGE
          </button>
        </form>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaMap className={styles.contact_icon} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Country:</p>
              <p>Pakistan</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Province:</p>
              <p>Punjab</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>City:</p>
              <p>Gujranwala</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <IoIosMailOpen className={styles.contact_icon} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Email:</p>
              <p>zahidhuzaifa006@gmail.com</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>webite:</p>
              <p>www.dev005.netlify.app</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>linkedin:</p>
              <p>Link</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <MdOutlinePhoneAndroid className={styles.contact_icon} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Support:</p>
              <p>+92 329 630 860 9</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Office:</p>
              <p>+92 329 630 860 9</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Personal:</p>
              <p>+92 329 630 860 9</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
