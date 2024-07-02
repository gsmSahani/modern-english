import React from "react";
import CourseCards from "./CourseCards";
import { basicTopics } from "../../config/courseTopics";
import bgColorTopics from "../../helper/bgColorTopics";

const BasicCourses = () => {
  return (
    <div className="bg-slate-200 py-12 dark:bg-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <CourseCards
            title="Basic English Course"
            duration="60 days - 2 Months"
            schedule="Monday to Saturday"
            learningPeriod="2 Hours Daily"
            fees="4000"
            topics={basicTopics}
            bgColorTopics={bgColorTopics}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicCourses;