import { useState } from 'react';

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
