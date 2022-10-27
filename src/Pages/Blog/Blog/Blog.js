import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlogItem from "../SingleBlogItem/SingleBlogItem";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div>
      {blogs.map((blog) => (
        <SingleBlogItem key={blog._id} blog={blog}></SingleBlogItem>
      ))}
    </div>
  );
};

export default Blog;
