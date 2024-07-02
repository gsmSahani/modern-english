import React from "react";
import { FaWhatsapp, FaUserGraduate } from "react-icons/fa";
import { handleWhatsAppMessage,handleEnrollNow } from "../../helper/handleButtonEvents";
import cardData from "../../config/pricingCard";
import renderButton from "../../helper/renderButton";

const Cards = () => {
  return (
    <div className="dark:bg-gray-600 dark:text-white bg-white pt-0">
      <div className="container mx-auto px-4 py-8 overflow-x-hidden ">
        <h1 className="text-center text-3xl font-bold pb-8 dark:text-white">Courses Pricing</h1>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map(({ title, price, duration, topics }, index) => (
            <div
              key={index}
              className="relative bg-slate-200 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 dark:bg-black "
            >
              <h2 className="text-2xl font-bold my-2 dark:text-white">{title}</h2>
              <p className="text-xl text-black dark:text-white mb-2">₹{price}</p>
              <p className="text-black dark:text-white mb-2">Duration: {duration}</p>
              <ul className="text-black dark:text-white mb-4">
                {topics.map((topic, index) => (
                  <li key={index}>• {topic}</li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row justify-center md:justify-between lg:justify-start lg:gap-2 space-y-4 md:space-y-0 md:space-x-4">
                {renderButton(
                  "WhatsApp",
                  () => handleWhatsAppMessage(title),
                  FaWhatsapp,
                  true
                )}
                {renderButton("Enroll Now", handleEnrollNow, FaUserGraduate)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
