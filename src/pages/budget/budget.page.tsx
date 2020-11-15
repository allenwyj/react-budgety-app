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

  return (
    <LayoutContainer>
      {selected.tags.join('.')}
      <br />
      {selected.note}
      <Tags
        value={selected.tags}
        onChange={tags => setSelected({ ...selected, tags: tags })}
      />
      <Note
        value={selected.note}
        onChange={note => {
          setSelected({ ...selected, note: note });
        }}
      />
      <Categories
        value={selected.category}
        onChange={category => setSelected({ ...selected, category: category })}
      />
      <NumberPad
        value={selected.amount}
        onChange={amount => setSelected({ ...selected, amount: amount })}
        onOk={() => {}}
      />
    </LayoutContainer>
  );
}

export default Budget;
