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
  const findTagIndexById = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndexById(id);
    // deep clone tags array
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // delete one item at index, and add a new obj
    tagsClone.splice(index, 1, { id: id, name: obj.name });
    setTags(tagsClone);
  };

  return {
    tags,
    setTags,
    findTag,
    findTagIndexById,
    updateTag
  };
};
