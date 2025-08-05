import React from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import blogList from '../../assets/docs/Blogs';


const BlogPage = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const blog = blogList.find((p) => p.id === blogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
      <Blog blog={blog} />
  );
};

export default BlogPage;
