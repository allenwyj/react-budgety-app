import { useState, useEffect } from 'react';
import { useUpdate } from './useUpdate';
import { createId } from '../lib/createId';

type DefaultTags = { id: number; name: string };

// const DEFAULT_EXPENSE_TAGS: DefaultTags[] = [
//   { id: createId(), name: 'Shopping' },
//   { id: createId(), name: 'Food' },
//   { id: createId(), name: 'Accomodation' },
//   { id: createId(), name: 'Transport' }
// ];

// const DEFAULT_INCOME_TAGS: DefaultTags[] = [
//   { id: createId(), name: 'Salary' },
//   { id: createId(), name: 'Bank' }
// ];

const DEFAULT_EXPENSE_TAGS: DefaultTags[] = [
  { id: 1, name: 'food' },
  { id: 2, name: 'drinks' },
  { id: 3, name: 'fruits' },
  { id: 4, name: 'snacks' },
  { id: 5, name: 'dining' },
  { id: 6, name: 'clothing' },
  { id: 7, name: 'shopping' },
  { id: 8, name: 'house' },
  { id: 9, name: 'transport' },
  { id: 10, name: 'entertainment' },
  { id: 11, name: 'pet' },
  { id: 12, name: 'recharge' },
  { id: 13, name: 'travel' },
  { id: 14, name: 'car' },
  { id: 15, name: 'bills' },
  { id: 16, name: 'health' },
  { id: 17, name: 'education' },
  { id: 999, name: 'others' }
];

const DEFAULT_INCOME_TAGS: DefaultTags[] = [
  { id: 101, name: 'salary' },
  { id: 102, name: 'part-time' },
  { id: 103, name: 'bonus' },
  { id: 104, name: 'investment' },
  { id: 999, name: 'others' }
];

// encapsulate a custom react hook function
export const useTags = () => {
  // declare type of the element
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const [category, setCategory] = useState<'+' | '-'>('-');
  const allTags = [...DEFAULT_EXPENSE_TAGS, ...DEFAULT_INCOME_TAGS];

  useEffect(() => {
    if (category === '-') {
      setTags(DEFAULT_EXPENSE_TAGS);
    } else if (category === '+') {
      setTags(DEFAULT_INCOME_TAGS);
    }
  }, [category]);

  // encasulate a new custom hook to avoid setting empty data into localStorage.
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);

  // encapsulate findTag function
  const findTag = (id: number) => allTags.filter(tag => tag.id === id)[0];

  const findTagIndexById = (id: number) => {
    let result = -1;
    for (let i = 0; i < allTags.length; i++) {
      if (allTags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const addTag = () => {
    let newTag = window.prompt(`What's your new tag name?`);

    if (newTag === null || newTag === '') {
      alert(`Name can't be empty`);
      return;
    }
    // remove trimming spaces.
    newTag.trim();

    if (newTag.length <= 15) {
      setTags([...allTags, { id: createId(), name: newTag }]);
    } else {
      alert(`Name should be within 15 characters.`);
    }
  };

  const updateTag = (id: number, { name }: { name: string }) => {
    setTags(allTags.map(tag => (tag.id === id ? { id, name } : tag)));
  };

  const deleteTag = (id: number) => {
    setTags(allTags.filter(tag => tag.id !== id));
  };

  const capitalisedFirstLetter = (tagName: string) => {
    return tagName.charAt(0).toUpperCase() + tagName.slice(1);
  };

  return {
    tags,
    setTags,
    findTag,
    updateTag,
    deleteTag,
    addTag,
    findTagIndexById,
    setCategory,
    capitalisedFirstLetter
  };
};
