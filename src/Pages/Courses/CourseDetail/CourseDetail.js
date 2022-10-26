import React, { useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { GiCutDiamond } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";

const CourseDetail = () => {
  const course = useLoaderData();
  const navigate = useNavigate();

  const ref = useRef();

  //   destructuring loaded data for better use
  const { _id, title, price, img, details, rating } = course;

  // const options = {
  //   orientation: "portrait",
  //   unit: "in",
  //   format: [100, 100],
  // };

  const handleNavigate = () => {
    navigate(`/checkout/${_id}`);
  };

  return (
    <div ref={ref} className="w-9/12 mx-auto  mt-12">
      <h2 className="text-4xl font-semibold mb-6 text-center">
        <span className="mr-3">{title}</span>
        <ReactToPdf targetRef={ref} filename="course-details.pdf" x={0.5} y={0.5} scale={0.8}>
          {({ toPdf }) => <FaDownload onClick={toPdf} className="inline hover:cursor-pointer hover:text-blue-500" />}
        </ReactToPdf>
      </h2>
      <hr />
      <img className="mx-auto my-6 w-96" src={img} alt="" />
      <p>
        <span className="font-bold text-xl">Course Overview: </span> {details}
      </p>

      <p className="font-bold my-3">Rating: {rating}</p>
      <p className="font-bold mb-3">Price: ${price}</p>
      <button onClick={handleNavigate} className="btn glass     ">
        Get premium access
        <GiCutDiamond className="ml-2" />
      </button>
    </div>
  );
};

export default CourseDetail;
