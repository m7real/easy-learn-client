import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { setLoading, providerLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // getting the route to be redirected after login
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        toast.success("Login Successful!");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
        toast.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // sign in with google
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  // sign in with github
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl my-2 font-bold">Please Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label text-warning">{error}</label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline btn-ghost">
              <FcGoogle />
              <span className="ml-4">Sign In With Google</span>
            </button>
            <button onClick={handleGithubSignIn} type="button" className="btn btn-outline btn-ghost ">
              <FaGithub />
              <span className="ml-4">Sign In With Github</span>
            </button>
            <label className="label">
              {/* sending the location that had to be redirected if logged in to the register form so that it can redirect to the desired page  */}
              <Link to="/register" state={{ from: location.state?.from }} replace className="label-text-alt link link-hover">
                New to the site? <span className="text-success">Register Here</span>
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
