import { useState, useEffect } from 'react';
import { useUpdate } from './useUpdate';
import { createId } from '../lib/createId';
import { DEFAULT_EXPENSE_TAGS, DEFAULT_INCOME_TAGS } from '../data/tags-name';

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
