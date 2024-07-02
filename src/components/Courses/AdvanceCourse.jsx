import React from "react";
import renderAdvancedTopics from "../../helper/renderTopics";
import CourseCards from "./CourseCards";
import bgColorTopics from "../../helper/bgColorTopics";

const AdvanceCourse = () => {
  const { commonTopicsMessage, uniqueTopics } = renderAdvancedTopics();

  return (
    <div className="bg-slate-200 py-12 dark:bg-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <CourseCards
            title="Advanced English Course"
            duration="105 days"
            schedule="Monday to Saturday"
            learningPeriod="2 hours daily"
            fees="8000"
            topics={uniqueTopics}
            commonTopicsMessage={commonTopicsMessage}
            bgColorTopics={bgColorTopics} /* Specify your background colors if needed */
          />
        </div>
      </div>
    </div>
  );
};

export default AdvanceCourse;
