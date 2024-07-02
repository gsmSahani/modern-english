// HomeShimmer.jsx
import React from "react";

const HomeShimmer = () => (
  <div className="flex flex-col items-center space-y-4">
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-200 h-96 w-96 animate-pulse rounded-md"
      ></div>
    ))}
  </div>
);

export default HomeShimmer;
