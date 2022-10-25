import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="grid lg:grid-cols-12 text-slate-200 gap-5 w-10/12 mx-auto mt-10">
      {/* Left Side Nav */}
      <div className=" lg:col-span-3 bg-base-300 shadow-xl rounded-lg  min-h-fit p-4">
        {courses.map((c) => (
          <p key={c._id} className="bg-base-100 mt-3 px-4 py-3 rounded-lg hover:text-slate-400">
            <Link to={`/course/${c._id}`}>{c.title}</Link>
          </p>
        ))}
      </div>
      {/* Right Side Card Section */}
      <div className="lg:col-span-9 bg-base-300 min-h-screen"></div>
    </div>
  );
};

export default Courses;
