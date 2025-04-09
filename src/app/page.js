import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar.js";
import Services from "./components/Services";
import ProjectList from "./components/ProjectList";
import TList from "./components/TList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import CareerStats from "./components/CareerStats";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import styles from "./page.module.css";
import WhatsAppWidget from './components/WhatsAppWidget';

export default function Home() {
  return (
    <>
      <div className={styles.pageContainer}>
        <Sidebar id={styles.sidebar} />
        <Hero />
        <Services />
        <Skills />
        <CareerStats />
        <ProjectList />
        <TList />
        <Contact />
        <Footer />
		<WhatsAppWidget/>
      </div>
    </>
  );
}
