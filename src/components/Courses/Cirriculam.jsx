import React, { useMemo } from "react";
import renderAdvancedTopics from "../../helper/renderTopics";
import CourseCards from "./CourseCards";
import { basicTopics } from "../../config/courseTopics";
import bgColorTopics from "../../helper/bgColorTopics";

const Curriculum = () => {
  const { commonTopicsMessage, uniqueTopics } = useMemo(() => renderAdvancedTopics(), []);

  return (
    <div className="bg-slate-200 py-12 dark:bg-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* Advanced Course */}
          <CourseCards
            title="Advanced English Course"
            duration="105 days"
            schedule="Monday to Saturday"
            learningPeriod="2 hours daily"
            fees="8000"
            topics={uniqueTopics}
            commonTopicsMessage={commonTopicsMessage}
            bgColorTopics={bgColorTopics}
          />
        </div>
        <div className="flex justify-center mt-8">
          {/* Basic Course */}
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

export default Curriculum;
