import { useState } from 'react';
import { createId } from './lib/createId';

// encapsulate a custom react hook function
export const useTags = () => {
  // declare type of the element
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    { id: createId(), name: 'Shopping' },
    { id: createId(), name: 'Food' },
    { id: createId(), name: 'Accomodation' },
    { id: createId(), name: 'Transport' }
  ]);

  return {
    tags,
    setTags
  };
};
