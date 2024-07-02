import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { handleEnrollNow } from "../../helper/handleButtonEvents";

const CourseCards = ({
  title,
  duration,
  schedule,
  learningPeriod,
  fees,
  topics = [],
  commonTopicsMessage = "",
  bgColorTopics,
}) => {
  return (
    <div className="bg-white dark:bg-black dark:text-white rounded-xl shadow-md overflow-hidden w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl my-5">
        {title}
      </h1>

      <div className="p-6 md:p-8">
        <div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Curriculum Details
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">
            {title}
          </p>
          <p className="mt-2 text-gray-500">
            Duration: {duration}
            <br />
            Schedule: {schedule}
            <br />
            Learning Period: {learningPeriod}
            <br />
            Fees: ₹{fees} /-
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold my-3">Topics Included:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-500">
          {commonTopicsMessage && (
            <div className=" p-3 rounded-lg text-center font-medium bg-green-700 text-black">
              {commonTopicsMessage}
            </div>
          )}
            {topics.map((topic, index) => (
              
              <div
                key={index}
                className={`p-3 rounded-lg text-center font-medium ${
                  bgColorTopics[index % bgColorTopics.length]
                }`}
              >
                {topic}
              </div>
            ))}
          </div>
          
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
            onClick={handleEnrollNow}
          >
            <FaUserGraduate className="mr-2" />
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
