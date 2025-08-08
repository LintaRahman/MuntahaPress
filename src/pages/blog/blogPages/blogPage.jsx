import React from 'react';
import { useParams } from 'react-router-dom';
import blogList from '../../../assets/docs/Blogs';
import './blogPage.css'
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';


const BlogPage = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const blog = blogList.find((p) => p.id === blogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

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

     <Footer/>
    </>
  );
};

export default BlogPage;
