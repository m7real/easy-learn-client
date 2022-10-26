import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-[46.5vh]">
      <div>
        <h4 className="text-xl font-semibold text-center">Selected Course:</h4>
        <h2 className="text-3xl mt-6 px-7 py-3 glass rounded-xl">{course.title}</h2>
      </div>
    </div>
  );
};

export default Checkout;
