import React, { useState } from 'react';
import { TagListContainer, TagsSectionContainer } from './tags.styles';

const Tags: React.FC = () => {
  // declare type of the element
  const [tags, setTags] = useState<string[]>([
    'Shopping',
    'Food',
    'Accomodation',
    'Transport'
  ]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onAddTag = () => {
    const newTag = window.prompt(`What's your new tag name?`);

    if (newTag !== null) {
      setTags([...tags, newTag]);
    }
  };

  const onToggleTag = (tag: string) => {
    console.log(tag);
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <TagsSectionContainer>
      <TagListContainer>
        {tags.map(tag => (
          <li
            key={tag}
            onClick={() => onToggleTag(tag)}
            className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          >
            {tag}
          </li>
        ))}
      </TagListContainer>
      <button onClick={onAddTag}>new tag</button>
    </TagsSectionContainer>
  );
};

export default Tags;
