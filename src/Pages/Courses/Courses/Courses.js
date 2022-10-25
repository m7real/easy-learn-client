import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="grid lg:grid-cols-12 text-slate-200 gap-5 w-10/12 mx-auto mt-10">
      {/* Left Side Nav */}
      <div className=" lg:col-span-3 bg-base-300 shadow-xl rounded-lg  min-h-fit p-4">
        {courses.map((course) => (
          <p key={course._id} className="bg-base-100 mt-3 px-4 py-3 rounded-lg hover:text-slate-400">
            <Link to={`/course/${course._id}`}>{course.title}</Link>
          </p>
        ))}
      </div>
      {/* Right Side Card Section */}
      <div className="lg:col-span-9 rounded-lg grid lg:grid-cols-2 gap-x-3 gap-y-8">
        {courses.map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
