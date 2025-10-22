import React from "react";
import { Navigate } from "react-router";

const PrivateRouters = ({ children }) => {
  if (!user) {
    return <Navigate to={"/"}></Navigate>;
  }
  return children;
};

export default PrivateRouters;
