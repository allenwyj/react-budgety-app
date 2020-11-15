import React, { useState } from 'react';
import { TagListContainer, TagsSectionContainer } from './tags.styles';

interface Props {
  value: string[];
  onChange: (selected: string[]) => void;
}

// In TS,
// declaring the type of props by <Props> can allow the component
// to take props from its parent.
const Tags: React.FC<Props> = ({ value, onChange }: Props) => {
  // declare type of the element
  const [tags, setTags] = useState<string[]>([
    'Shopping',
    'Food',
    'Accomodation',
    'Transport'
  ]);

  const selectedTags = value;

  const onAddTag = () => {
    const newTag = window.prompt(`What's your new tag name?`);

    if (newTag !== null) {
      setTags([...tags, newTag]);
    }
  };

  // onChange is going to let parent component knows we have updates here.
  const onToggleTag = (tag: string) => {
    console.log(tag);
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
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
