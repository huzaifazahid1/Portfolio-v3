// pages/index.js
import im from "../../../public/p4.png";
import im2 from "../../../public/p3.png";
import im3 from "../../../public/p2.png";
import im4 from "../../../public/p1.png";
import Project from "./Project";

const projects = [
  {
    title: "Resturant website",
    image: im3, // Replace with actual image path
    description:
      "Discover delicious cuisine.Find the perfect restaurant for your next dining experience",
    technologies: ["HTML", "CSS", "JS", "UI UX"],
  },
  {
    title: "Recipe Website",
    image: im, // Replace with actual image path
    description:
      "Explore a world of culinary delights. Find easy-to-follow recipes for every occasion",
    technologies: ["ReactJS", "Redux", "JS"],
  },
  {
    title: "Education website",
    image: im2, // Replace with actual image path
    description:
      "ABSCO offer unparalleled business consulting solutions to meet client’s unique needs.",
    technologies: ["HTML", "CSS", "JS", "Bootstrab"],
  },
  {
    title: "Traveling website",
    image: im4, // Replace with actual image path
    description:
      "Plan your next adventure.Discover inspiring travel destinations and book your trip today",
    technologies: ["HTML", "CSS", "JS"],
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
      <a
        href="#"
        style={{
          color: "white",
          lineHeight: "2",
          textDecoration: "underline",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          display:"block"
        }}
      >
        see all projects
      </a>
    </div>
  );
};

export default Home;
