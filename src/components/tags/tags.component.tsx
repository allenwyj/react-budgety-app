import React, { useEffect } from 'react';
import { useTags } from '../../hooks/useTags';
import Icon from '../icon/icon.component';
import { TagListContainer, TagsSectionContainer } from './tags.styles';

interface Props {
  value: number[];
  category: '-' | '+';
  onChange: (selected: number[]) => void;
}

// In TS,
// declaring the type of props by <Props> can allow the component
// to take props from its parent.
const Tags: React.FC<Props> = ({ value, category, onChange }) => {
  const { tags, setCategory, capitalisedFirstLetter } = useTags();

  useEffect(() => {
    setCategory(category);
  }, [setCategory, category]);

  const selectedTagIds = value;
  // onChange is going to let parent component knows we have updates here.
  const onToggleTag = (tagId: number) => {
    // Only allows to select one tag
    onChange([tagId]);
  };

  const catgoryColor = category === '+' ? 'selectedInc' : 'selectedExp';
  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) >= 0 ? catgoryColor : '';

  return (
    <TagsSectionContainer>
      <TagListContainer>
        {tags.map(tag => (
          <li
            key={tag.id}
            onClick={() => onToggleTag(tag.id)}
            className={`${getClass(tag.id)} oneLine`}
          >
            <Icon name={tag.name} />
            {capitalisedFirstLetter(tag.name)}
          </li>
        ))}
      </TagListContainer>
    </TagsSectionContainer>
  );
};

export default Tags;
