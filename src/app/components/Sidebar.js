// components/Sidebar.js
"use client";
import user from "../../../public/user.png";
import styles from "./Sidebar.module.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaRegImage,
  FaEnvelope,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  // FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar
  };
  return (
    <>
      <div>
        <div className={styles.baricon} onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={styles.imgC1}>
          <Image
            src={user}
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              position: "fixed",
              right: "10px",
              top: "5px",
              border: "2px solid white",
              padding:"2px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* <FaTimes className={styles.baricon} id={styles.cross} /> */}
      <aside
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div className={styles.profile}>
          <div className={styles.imgC}>
            <Image
              src={user}
              alt="Profile"
              width="100px"
              height="100px"
              style={{
                width: "100px",
                height: "100px",
                transform: "scale(-1, 1)",
              }}
            />
          </div>
          <h2>Huzaifa</h2>
          <p>MERN Stack Developer</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.facebook.com/share/1E6K2VJTuj/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "5px" }}
          >
            <FaFacebookF size={17} style={{ color: "#3b5998" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/huzaifa-zahid-369b4a291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "10px" }}
          >
            <FaLinkedinIn size={17} style={{ color: "#0077b5" }} />
          </a>
          <a
            href="mailto:zahidhuzaifa006@gmail"
            style={{ marginRight: "10px" }}
          >
            <FaEnvelope size={17} style={{ color: "#ec8208" }} />
          </a>
          <a
            href="https://github.com/huzaifazahid1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={17} style={{ color: "#e4405f" }} />
          </a>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#home" className={styles.link}>
                <FaHome className={styles.icon} />
                <p>Home</p>{" "}
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.link}>
                <FaUser className={styles.icon} />
                <p>About</p>
              </a>
            </li>
            <li>
              <a href="#services" className={styles.link}>
                <FaBriefcase className={styles.icon} />
                <p>Servi</p>ces
              </a>
            </li>
            <li>
              <a href="#portfolio" className={styles.link}>
                <FaRegImage className={styles.icon} />
                <p>Portf</p>olio
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link}>
                <FaEnvelope className={styles.icon} />
                <p>Conta</p>ct
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.contact}>
          <div className={styles.box}>
            <p>Email:</p>
            <p>zahidhuzaifa006@gmail.com</p>
          </div>
          <div className={styles.box}>
            <p>Phone: </p>
            <p>+92 329 630 860 9 </p>
          </div>
          <div className={styles.box}>
            <p>Residence: </p>
            <p>Pakistan</p>
          </div>
          <div className={styles.box}>
            <p>City: </p>
            <p>Gujranwala</p>
          </div>
          <div className={styles.box}>
            <p>Age: </p>
            <p>19 Years</p>
          </div>
          <div className={styles.box}>
            <p>Freelance: </p>
            <p>Availible</p>
          </div>
          <div className={styles.box}>
            <p>Language: </p>
            <p>English, Urdu</p>
          </div>
        </div>
        <hr />
      </aside>
    </>
  );
};

export default Sidebar;
