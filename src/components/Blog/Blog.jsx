import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Blog.css"

const Blog = ({ blog }) => {
  return (
    <>
      <Navbar scrollVal={0}/>
      <section className="pgcontainer"></section>
      {/* <section className="pgcontainer"> */}
        
      {/* <h1>{blog.title}</h1>
      
      <p className="post-author">By {blog.Author}</p>
      <div className="post-meta-top">
        <span className="post-date">7 hours ago</span>
        <span className="post-read-time"> • 8 min read</span>
      </div> */}
      {/* </section> */}
      <article className="blog-post">
      <div className="post-meta-top">
        <span className="post-date">{blog.date}</span>
        <span className="post-read-time"> • {blog.readingTime}</span>
      </div>
        <h1 className="post-title">{blog.title}</h1>
      
      <div className="post-meta-top">By {blog.author}</div>
      
      <img  src={blog.image} className="blog-image"/>

      {/* <h1 className="post-title">
        {blog.title}
      </h1> */}

        {blog.content}
      </article>
      {/* 
      <section className="blogContainer">
        {blog.content}
      </section> */}

      <Footer />
    </>
  );
};

export default Blog;
