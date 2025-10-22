import React from "react";
import { ClipLoader, FadeLoader, MoonLoader, RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
      <RingLoader />
      <MoonLoader />
      <FadeLoader />
      <ClipLoader />
    </div>
  );
};

export default Loading;
