import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center transition-opacity duration-300">
      <FadeLoader />
    </div>
  );
};

export default Loading;
