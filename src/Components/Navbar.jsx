import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import { Link } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../Context/AuthContext";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=""
        >
          <Link
            to="/"
            className="text-xl my-0 md:text-2xl font-semibold text-emerald-700"
          >
            Green Nest
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 40, scale: 1 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ direction: 0.6, scale: 1.1 }}
          className="flex justify-center items-center gap-2.5"
        >
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MyLink to={"/"}>Home</MyLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MyLink to={"/plants"}>Plants</MyLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MyLink to={"/profile"}>Profile</MyLink>
          </motion.li>
        </motion.ul>

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
              className="dropdown-content z-[20] w-52 top-8 -right-21 md:top-10 md:right-0 menu shadow bg-base-100 rounded-box p-2.5 bg-base-300"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="font-semibold mb-0.5 md:text-lg"
              >
                {user?.displayName || "Unknown User"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 40, y: -40, scale: 1 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.3, scale: 0.9, delay: 0.12 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="text-sm md:text-md font-medium text-gray-600"
              >
                {user?.email}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: 50, y: -40, scale: 1 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.3, scale: 0.9, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSignout}
                className="btn btn-error btn-sm mt-2 text-cyan-800 hover:text-cyan-200/60"
              >
                Sign Out
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="space-x-5">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-ghost bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
            >
              <Link to={"/login"}>Login</Link>
            </motion.button>
            <motion.button
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-ghost bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
            >
              <Link to={"/register"}>Register</Link>
            </motion.button>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
