import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const { _id, title, price, img, rating } = course;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course/${_id}`);
  };

  return (
    <div onClick={handleNavigate} className="card w-full lg:w-80 mx-auto bg-base-300 shadow-xl hover:cursor-pointer">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-around w-full my-4">
          <small>Price: ${price}</small>
          <small>Rating: {rating}</small>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm btn-wide">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
