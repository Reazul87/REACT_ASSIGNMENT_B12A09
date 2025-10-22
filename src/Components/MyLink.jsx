import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, to, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-purple-500 font-semibold border-b border-b-violet-500 rounded-b-md pb-px"
          : `${className} font-medium`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
