import React from "react";
import BasicCourses from "./BasicCourses";
import AdvanceCourse from "./AdvanceCourse";
import { Helmet } from "react-helmet-async";
import Cirriculam from "./Cirriculam";
const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses | English Classes in Pardi Valsad</title>
        <meta
          name="description"
          content="Explore our English courses offered in Pardi Valsad, Gujarat. Improve your English speaking, grammar, and vocabulary skills."
        />
      </Helmet>
      <div className="dark:bg-gray-600">
        <Cirriculam/>
        <div className="container mx-auto px-4 py-8 dark:bg-gray-600 dark:text-white">
          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Perks of Joining</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Public speaking sessions every Saturday</li>
              <li>Debates on trending topics</li>
              <li>Essay writing competitions</li>
              <li>Spell bee competitions</li>
              <li>Academic vocabulary sessions</li>
              <li>Practice with amazing idioms and phrasal verbs</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="mb-4">
              Please note that the timings and fees are subject to change based
              on the batch and season. For the most up-to-date information,
              please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;