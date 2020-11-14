import React from 'react';

import Categories from '../../components/categories/categories.component';
import Note from '../../components/note/note.component';
import Tags from '../../components/tags/tags.component';
import NumberPad from '../../components/number-pad/number-pad.component';

import { LayoutContainer } from './budget.styles';

function Budget() {
  return (
    <LayoutContainer>
      <Tags />
      <Note />
      <Categories />
      <NumberPad />
    </LayoutContainer>
  );
}

export default Budget;
