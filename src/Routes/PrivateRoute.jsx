import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader";
import { AuthContext } from "../authContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loader/>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;