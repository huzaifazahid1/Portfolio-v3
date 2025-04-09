// pages/index.js

import Testimonials from "./Testimonials";

const testimonials = [
  {
    name: "Hamdan Khubaib",
    jobTitle: "Python & MERN Stack Developer",
    location:"India",
    image:
      "https://tonu-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-img.7ed901a9.png&w=750&q=75", // Replace with actual image path
    text: "Skillfully re-created the frontend for several pages, perfectly translating designs into functional interfaces. His talent and attention to detail are outstanding, earning a 5/5 rating.",
    rating: 5,
  },

  // Add more testimonial objects here
];

const Home = () => {
  return (
    <div id="testimonials">
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h2 className="heading">
          Clients <span style={{ color: "#df9306" }}>Reviews</span>{" "}
        </h2>
        <p className="info">
          Hear what satisfied clients have to say about my work. Discover how
          I've helped businesses achieve their online goals
        </p>
      </div>
      <div
        className="testimonials"
        style={{
          display: "flex",
          gap: "20px",
          margin: "0 20px",
          flexWrap: "wrap",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Testimonials key={index} testimonial={testimonial} />
        ))}
      </div>
      {/* Other page content */}
    </div>
  );
};

export default Home;
