// CoursesShimmer.jsx
import React from "react";

const CoursesShimmer = () => (
  <div className="flex flex-col items-center space-y-4">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-200 h-32 w-96 animate-pulse rounded-md"
      ></div>
    ))}
  </div>
);

export default CoursesShimmer;
