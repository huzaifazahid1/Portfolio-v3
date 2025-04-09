// pages/index.js
import im from "../../../public/p4.png";
import im2 from "../../../public/p3.png";
import im3 from "../../../public/p2.png";
import im4 from "../../../public/p1.png";
import Project from "./Project";

const projects = [
{
    title: "Weather App",
    image: im2, // Replace with actual image path
    description:
      "A feature-rich weather app with real-time weather updates, 7-day forecast, chatbot support, and much more.",
    technologies: ["Next JS", "Tailwind css", "modren", "responsive"],
	github:"#",
	live:"https://nx-weather-wheat.vercel.app/",
	badge:"Top"
  },
  {
    title: "AI SaaS Application",
    image: im4, // Replace with actual image path
    description:
      "An AI-powered SaaS application that generates professional blog content in seconds.",
    technologies: ["Next Js", "Tailwind", "AI", "Firebase"],
	github:"#",
	live:"https://blogify-005.vercel.app",
	badge:"Top"
  },
  {
    title: "Resturant website",
    image: im3, // Replace with actual image path
    description:
      "Discover delicious cuisine.Find the perfect restaurant for your next dining experience",
    technologies: ["HTML", "CSS", "JS", "UI UX"],
	github:"https://github.com/huzaifazahid1/Restaurant-website",
	live:"https://resturant005.netlify.app/",
	badge:"",
  },
  {
    title: "Recipe Website",
    image: im, // Replace with actual image path
    description:
      "Explore a world of culinary delights. Find easy-to-follow recipes for every occasion",
    technologies: ["ReactJS", "Redux", "JS"],
	github:"https://github.com/huzaifazahid1/Recipe-Website-Frontend-",
	live:"#",
	badge:""
  },
  
];

const Home = () => {
  return (
    <div id="portfolio">
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h2 className="heading">
          My <span style={{ color: "#df9306" }}>Projects</span>{" "}
        </h2>
        <p className="info">
          A showcase of my recent work. Explore innovative web projects that
          demonstrate my skills and creativity
        </p>
      </div>
      <div
        className="projects"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
	  <div style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
      <a
        href="https://github.com/huzaifazahid1" target="_blank"
        style={{
          color: "white",
          lineHeight: "2",
          textDecoration: "underline",
        }}
      >
        see all projects
      </a>
	  </div>
    </div>
  );
};

export default Home;
