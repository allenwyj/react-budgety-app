import { useState } from 'react';
import { createId } from './lib/createId';

type DefaultTags = { id: number; name: string };

const DEFAULT_TAGS: DefaultTags[] = [
  { id: createId(), name: 'Shopping' },
  { id: createId(), name: 'Food' },
  { id: createId(), name: 'Accomodation' },
  { id: createId(), name: 'Transport' }
];

// encapsulate a custom react hook function
export const useTags = () => {
  // declare type of the element
  const [tags, setTags] = useState<{ id: number; name: string }[]>(
    DEFAULT_TAGS
  );
  // encapsulate findTag function
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

  return {
    tags,
    setTags,
    findTag
  };
};
