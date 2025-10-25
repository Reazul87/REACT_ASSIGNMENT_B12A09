import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#587291] via-[#1662af] to-[#2F97C1] h-screen text-center ">
      <motion.h1
        initial={{ opacity: 0, y: -180 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-emerald-500 mb-4"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 180, x: 180 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl md:text-2xl font-semibold mb-2 text-[#15E6CD]"
      >
        Page Not Found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -180, x: -180 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[#15E6CD] mb-6 px-5"
      >
        The page you’re looking for doesn’t exist or was moved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 180 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to={"/"}
          className="px-5 py-3 text-white bg-emerald-400 rounded-lg hover:bg-pink-400 transition-all"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
