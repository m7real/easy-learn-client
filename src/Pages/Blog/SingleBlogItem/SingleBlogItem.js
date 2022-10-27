import React from "react";

const SingleBlogItem = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="mt-6 p-10 shadow-lg rounded-xl">
      <h2 className="text-2xl mb-3">{question}</h2>
      <p> {answer}</p>
    </div>
  );
};

export default SingleBlogItem;
