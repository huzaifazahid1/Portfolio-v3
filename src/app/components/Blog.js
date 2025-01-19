// components/Blog.js

import styles from "./Blog.module.css";

const Blog = () => {
  const blogPosts = [
    {
      category: "Designer",
      image:
        "https://tonu-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-1.97c2c1d6.jpg&w=640&q=75", // Replace with actual image path
      date: "25 Dec, 2023",
      author: "By Marilou",
      title: "Helpful tips for become a successful designer",
      excerpt:
        "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    },
    {
      category: "Developer",
      image:
        "https://tonu-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-2.238e9f7b.jpg&w=640&q=75", // Replace with actual image path
      date: "13 Dec, 2023",
      author: "By Konal",
      title: "Master These Awesome New Skills in May 2023",
      excerpt:
        "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    },
    {
      category: "Passion",
      image:
        "https://tonu-next.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-3.460ac103.jpg&w=640&q=75", // Replace with actual image path
      date: "22 Dec, 2023",
      author: "By Alisa",
      title: "We provide solutions growing your business",
      excerpt:
        "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
    },
  ];

  return (
    <section className={styles.blog}>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h2 className="heading">
          Latest <span style={{ color: "#df9306" }}>Blogs</span>
        </h2>
        <p className="info">
          Insights and articles on web development, design, and technology. Stay
          updated with the latest trends and best practices
        </p>
      </div>
      <div className={styles.grid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.blogPost}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.content}>
              <span className={styles.category}>{post.category}</span>
              <p className={styles.meta}>
                {post.date} <span>•</span> {post.author}
              </p>
              <h3 style={{ color: "#df9306", marginBottom: "10px" }}>
                {post.title}
              </h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        style={{ color: "white", lineHeight: "2", textDecoration: "underline" }}
      >
        see all blogs
      </a>
    </section>
  );
};

export default Blog;
