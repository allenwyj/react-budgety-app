import React from 'react';
import { useTags } from '../../useTags';
import { TagListContainer, TagsSectionContainer } from './tags.styles';

interface Props {
  value: number[];
  onChange: (selected: number[]) => void;
}

// In TS,
// declaring the type of props by <Props> can allow the component
// to take props from its parent.
const Tags: React.FC<Props> = ({ value, onChange }: Props) => {
  const { tags, addTag } = useTags();

  const selectedTagIds = value;

  // onChange is going to let parent component knows we have updates here.
  const onToggleTag = (tagId: number) => {
    console.log(tagId);
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      onChange([...selectedTagIds, tagId]);
    }
  };

  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';

  return (
    <TagsSectionContainer>
      <TagListContainer>
        {tags.map(tag => (
          <li
            key={tag.id}
            onClick={() => onToggleTag(tag.id)}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </TagListContainer>
      <button onClick={addTag}>new tag</button>
    </TagsSectionContainer>
  );
};

export default Tags;
