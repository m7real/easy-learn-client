import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
  const { _id, title, price, img, details, rating } = course;
  return (
    <div className="w-9/12 mx-auto  mt-12">
      <h2 className="text-4xl font-semibold mb-6 text-center">{title}</h2>
      <hr />
      <img className="mx-auto my-6 w-96" src={img} alt="" />

      <p>{details}</p>
      <p className="font-bold">Price: ${price}</p>
      <p className="font-bold">Rating: {rating}</p>
    </div>
  );
};

export default CourseDetail;
