import { useMemo } from 'react';
import { basicTopics, advancedTopics } from '../config/courseTopics';

const renderAdvanceTopics = (basicTopics, advancedTopics) => {
  const commonTopics = basicTopics.filter(topic => advancedTopics.includes(topic));
  const uniqueTopics = advancedTopics.filter(topic => !basicTopics.includes(topic));
  const commonTopicsMessage = commonTopics.length > 0 ? 'All basic topics covered here' : '';

  return {
    commonTopicsMessage,
    uniqueTopics,
  };
};

const MemoizedRenderAdvanceTopics = useMemo(() => renderAdvanceTopics(basicTopics, advancedTopics), [basicTopics, advancedTopics]);

export default MemoizedRenderAdvanceTopics;
