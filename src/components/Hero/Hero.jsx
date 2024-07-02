import React, { useContext } from "react";
import Homepage from "../../assets/image/hero students.webp";
import { FaUserPlus } from "react-icons/fa";
import ThemeContext from "../../helper/ThemeContext";

import { handleWhatsAppMessage } from "../../helper/handleButtonEvents";
const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const overlayOpacity = isDarkMode ? 0.7 : 0.5;

  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
    transition: "opacity 0.3s ease",
  };


  return (
    <div className="relative flex items-center justify-center h-screen w-full">
      <img
        src={Homepage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div style={overlayStyle} className="absolute inset-0"></div>
      <div className="relative text-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 max-w-4xl mx-auto p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
          Modern English Classes
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center mb-4 sm:mb-6">
          Modern spoken English classes prioritize practical communication
          skills, emphasizing fluency, pronunciation, and cultural
          understanding. Through interactive methods and contemporary resources,
          these classes cater to diverse learning styles, offering personalized
          feedback and engaging activities. Designed for academic, professional,
          and social contexts, they empower learners to confidently navigate
          multicultural environments with proficiency and cultural sensitivity.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Join Now"
            onClick={handleWhatsAppMessage}
          >
            <FaUserPlus />
            <span>Join Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
