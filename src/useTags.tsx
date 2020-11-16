import { useState } from 'react';

// encapsulate a custom react hook function
export const useTags = () => {
  // declare type of the element
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    { id: 1, name: 'Shopping' },
    { id: 2, name: 'Food' },
    { id: 3, name: 'Accomodation' },
    { id: 4, name: 'Transport' }
  ]);

  return {
    tags,
    setTags
  };
};
