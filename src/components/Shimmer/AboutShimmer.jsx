// AboutShimmer.jsx
import React from "react";

const AboutShimmer = () => (
  <div className="flex flex-col items-center space-y-4">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-200 h-64 w-96 animate-pulse rounded-md"
      ></div>
    ))}
  </div>
);

export default AboutShimmer;
