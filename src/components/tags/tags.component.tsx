import React from 'react';
import { TagListContainer, TagsSectionContainer } from './tags.styles';

const Tags = () => {
  return (
    <TagsSectionContainer>
      <TagListContainer>
        <li>Shopping</li>
        <li>Food</li>
        <li>Accomodation</li>
        <li>Transport</li>
      </TagListContainer>
      <button>new tag</button>
    </TagsSectionContainer>
  );
};

export default Tags;
