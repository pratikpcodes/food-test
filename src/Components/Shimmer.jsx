import React from "react";
import download from "../assets/download.jpeg";

const Shimmer = () => {
  return (
    <div className="m-2 transition-transform transform hover:scale-105 grid grid-cols-6 ">
      <img
        src="https://img.freepik.com/free-photo/abstract-gray-oil-paint-textured-background_53876-129925.jpg"
        className="object-cover w-80 h-64 rounded-3xl  "
      />
    </div>
  );
};

const transformShimmer = () => {
  return (
    <div>
      {new Array(20).fill(0).map((element,index) => {
        return <Shimmer key={index} />;
      })}
    </div>
  );
};

export default transformShimmer;
