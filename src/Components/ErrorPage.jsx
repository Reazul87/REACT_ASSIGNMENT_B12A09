import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-orange-300 via-cyan-200 to-pink-300 h-screen text-center bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-emerald-500 mb-4">
        404
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-sky-800">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 px-5">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        to="/"
        className="px-5 py-3 text-white bg-emerald-400 rounded-lg hover:bg-pink-400 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
