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

  // const findTagIndexById = (id: number) => {
  //   let result = -1;
  //   for (let i = 0; i < tags.length; i++) {
  //     if (tags[i].id === id) {
  //       result = i;
  //       break;
  //     }
  //   }
  //   return result;
  // };

  const updateTag = (id: number, { name }: { name: string }) => {
    setTags(tags.map(tag => (tag.id === id ? { id, name } : tag)));
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return {
    tags,
    setTags,
    findTag,
    updateTag,
    deleteTag
  };
};
