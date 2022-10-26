import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "../../Pages/Others/Spinner/Spinner";

/* 
1. only allow authenticated users to visit the route
2. Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
