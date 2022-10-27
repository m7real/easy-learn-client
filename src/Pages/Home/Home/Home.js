import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <div>
        <h2 className="text-5xl mt-10 px-10 glass  py-4 shadow-2xl rounded-xl">Welcome To Easy Learn</h2>
        <p className="text-xl mt-6">
          The World's #1 Online Based Learning Platform.
          <br />
          We Provide Quality Learning Content on Various Technology.
        </p>
        {/* navigate to the courses page */}
        <Link to="/courses" className="btn btn-outline btn-wide mx-auto  mt-10">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
