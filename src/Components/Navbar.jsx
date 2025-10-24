import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import { Link } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../Context/AuthContext";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);

  const handleSignout = () => {
    logout()
      .then(() => {
        toast.success("Successfully Logout");
      })
      .catch((e) => {
        toast.error(e.code);
        console.log(e.code);
      });
  };

  return (
    <div className="bg-[#C2E2FA] py-2 border-b border-b-gray-200">
      <MyContainer className="flex items-center justify-between md:flex-row space-y-2.5 flex-col px-5 md:px-20">
        <Link
          to="/"
          className="text-xl my-0 md:text-2xl font-semibold text-purple-500"
        >
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

        {loading ? (
          <MoonLoader size={32} color="#3ff443" />
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <img
                src={user?.photoURL || "/alt.png"}
                className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer"
              />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content z-[20] w-52 top-8 -right-20 md:top-10 md:right-0 menu shadow bg-base-100 rounded-box p-2.5 bg-base-300"
            >
              <h2 className="font-semibold mb-0.5 md:text-lg">
                {user?.displayName || "Unknown User"}
              </h2>
              <p className="text-sm md:text-md font-medium text-gray-600">
                {user?.email}
              </p>
              <button
                onClick={handleSignout}
                className="btn btn-error btn-sm mt-2 text-cyan-800 hover:text-cyan-200/60"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-5">
            <button className="btn btn-ghost bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="btn btn-ghost bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
