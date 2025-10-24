import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";

const PrivateRouters = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  return user ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname}></Navigate>
  );
};

export default PrivateRouters;
