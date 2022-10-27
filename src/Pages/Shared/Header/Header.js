import React, { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/e-logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Dna } from "react-loader-spinner";

const Header = () => {
  const [checked, setChecked] = useState(true);
  const { user, loading, logOut } = useContext(AuthContext);

  // signs out the user
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div className="navbar  bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/courses">Courses</Link>
            </li>

            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <img className="w-8" src={logo} alt="" />
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Easy Learn
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/courses">Courses</Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="form-control mx-3">
          {/* theme toggler added but doesn't change theme */}
          <label className="label cursor-pointer">
            <span className="label-text mx-1 min-w-[31px]">{checked ? "Dark" : "Light"}</span>
            <input onChange={() => setChecked(!checked)} type="checkbox" className="toggle toggle-sm ml-1 mr-4" checked={checked} />
          </label>
        </div>
        {/* show the log in or log out and user profile while user not found or found accordingly */}
        {user?.uid ? (
          <>
            <button onClick={handleLogOut} className="btn btn-xs normal-case text-gray-100">
              Log Out
            </button>
            <span className="tooltip tooltip-left" data-tip={user?.displayName || "User"}>
              {user?.photoURL ? <img className="w-8 h-8  mx-4 rounded-full" src={user?.photoURL} alt="" /> : <FaUserAlt className="mx-4" />}
            </span>
          </>
        ) : loading ? (
          <Dna visible={true} height="48" width="48" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
        ) : (
          <Link to="/login" className="btn btn-outline btn-sm text-gray-100">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
