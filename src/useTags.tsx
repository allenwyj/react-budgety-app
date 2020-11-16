import { useState } from 'react';

// encapsulate a custom react hook function
export const useTags = () => {
  // declare type of the element
  const [tags, setTags] = useState<string[]>([
    'Shopping',
    'Food',
    'Accomodation',
    'Transport'
  ]);

  return {
    tags,
    setTags
  };
};
