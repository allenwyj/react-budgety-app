import React from 'react';

import Categories from '../../components/categories/categories.component';
import Notes from '../../components/notes/notes.component';
import Tags from '../../components/tags/tags.component';
import NumberPad from '../../components/number-pad/number-pad.component';

import { LayoutContainer } from './budget.styles';

function Budget() {
  return (
    <LayoutContainer>
      <Tags />
      <Notes />
      <Categories />
      <NumberPad />
    </LayoutContainer>
  );
}

export default Budget;
