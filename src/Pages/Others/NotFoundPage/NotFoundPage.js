import React from "react";
import { Link } from "react-router-dom";
import cover from "../../../assets/notFound/notfound.png";

const NotFoundPage = () => {
  return (
    <div className="not-found text-center flex flex-col items-center justify-center min-h-screen">
      <img className="w-96" src={cover} alt="" />
      <h2 className="mb-6">Looks Like The Page You Are Looking For Does Not Exist</h2>
      <Link className="btn btn-outline btn-wide" to="/">
        Return To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
