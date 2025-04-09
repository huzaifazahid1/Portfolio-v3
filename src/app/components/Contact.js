// components/Contact.js
"use client"
import { useState } from "react";
import styles from "./Contact.module.css";
import { FaMap } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      error: null,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          error: null,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const error = await response.json();
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          error: error.message || "Something went wrong",
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: "Network error, please try again",
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        id="contact"
        style={{ textAlign: "center", margin: "20px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="heading">
          Get in <span style={{ color: "#df9306" }}>Touch</span>{" "}
        </h2>
        <p className="info">
          Let's collaborate on your next web project. Contact me for a free
          consultation and a personalized quote
        </p>
      </motion.div>
      <motion.section
        className={styles.contact}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.form variants={fadeInUp} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              className={styles.input}
              type="text"
              id="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className={styles.button}
            disabled={status.submitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {status.submitting ? "SENDING..." : "SEND MESSAGE"}
          </motion.button>

          {status.submitted && status.success && (
            <p className={styles.successMessage}>Message sent successfully!</p>
          )}

          {status.submitted && !status.success && (
            <p className={styles.errorMessage}>{status.error}</p>
          )}
        </motion.form>

        <motion.div className={styles.contactInfo} variants={staggerContainer}>
          <motion.div
            className={styles.contactItem}
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
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
          </motion.div>

          <motion.div
            className={styles.contactItem}
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
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
          </motion.div>

          <motion.div
            className={styles.contactItem}
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
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
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Contact;
