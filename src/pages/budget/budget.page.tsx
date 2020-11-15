import React, { useState } from 'react';

import Categories from '../../components/categories/categories.component';
import Note from '../../components/note/note.component';
import Tags from '../../components/tags/tags.component';
import NumberPad from '../../components/number-pad/number-pad.component';

import { LayoutContainer } from './budget.styles';

type Category = '-' | '+';

function Budget() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  const handleOnChange = (obj: Partial<typeof selected>) =>
    setSelected({ ...selected, ...obj });

  return (
    <LayoutContainer>
      <Tags value={selected.tags} onChange={tags => handleOnChange({ tags })} />
      <Note
        value={selected.note}
        onChange={note => {
          handleOnChange({ note });
        }}
      />
      <Categories
        value={selected.category}
        onChange={category => handleOnChange({ category })}
      />
      <NumberPad
        value={selected.amount}
        onChange={amount => handleOnChange({ amount })}
        onOk={() => {}}
      />
    </LayoutContainer>
  );
}

export default Budget;
