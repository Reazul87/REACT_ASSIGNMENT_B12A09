import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const shared = {
    password: 3545,
  };
  return <AuthContext value={shared}>{children}</AuthContext>;
};

export default AuthProvider;
