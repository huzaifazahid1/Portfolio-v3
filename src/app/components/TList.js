// pages/index.js

import Testimonials from "./Testimonials";

const testimonials = [
  {
    name: "Edward Leonard",
    jobTitle: "Software Engineer",
    image:
      "https://tonu-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-img.7ed901a9.png&w=750&q=75", // Replace with actual image path
    text: "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
    rating: 5,
  },
  {
    name: "Edward Leonard",
    jobTitle: "Software Engineer",
    image:
      "https://tonu-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-img.7ed901a9.png&w=750&q=75", // Replace with actual image path
    text: "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
    rating: 5,
  },
  {
    name: "Edward Leonard",
    jobTitle: "Software Engineer",
    image:
      "https://tonu-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-img.7ed901a9.png&w=750&q=75", // Replace with actual image path
    text: "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
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
        style={{ display: "flex", gap: "20px", margin: "0 20px",flexWrap:"wrap" }}
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
