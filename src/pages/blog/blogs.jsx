import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import blogList from "../../assets/docs/Blogs";
import blogImage from "../../assets/images/Header/Headers.png";
import "./blog.css";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <Header text="Blog" img={blogImage} page="policy"/>
      <section className="blog-container">
        {blogList && blogList.length > 0 ? (
          <div className="blog-section">
            {blogList.map((blog) => (
  <div className="blog-card-wrapper" key={blog.id}>
    <Link to={`/articles/${blog.id}`} className="blog-card">
      <div className="card">
        <img src={blog.image} alt={blog.title} className="blog-image" />

        <div className="badge">{blog.type}</div>

        <h2 className="blog-title">{blog.title}</h2>

        {/* <p className="blog-summary">
          {blog.summary.length > 90 ? blog.summary.slice(0, 90) + "..." : blog.summary}
        </p> */}

        <div className="blog-footer">
          <div className="author">
            <img src={blog.authorImage} alt={blog.author} className="author-img" />
            <div>
              <p className="author-name">{blog.author}</p>
            </div>
          </div>
          
        </div>
        
              <p className="blog-date">{blog.date}</p>
      </div>
    </Link>
  </div>
))}

          </div>
        ) : (
          <p>No blog posts available.</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
