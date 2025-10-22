import React from "react";
import MyContainer from "./MyContainer";
import { Link } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-slate-200 py-2 shadow border-b border-b-gray-50">
      <MyContainer className="flex items-center justify-between md:flex-row space-y-2.5 flex-col">
        <Link className="text-xl my-0 md:text-2xl font-semibold text-green-500">
          Green Nest
        </Link>
        <ul className="flex justify-center items-center gap-2.5">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/plants"}>Plants</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        <div className="space-x-5">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/register"}>Register</Link>
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
