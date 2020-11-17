import React, { useState } from 'react';

import Categories from '../../components/categories/categories.component';
import Note from '../../components/note/note.component';
import Tags from '../../components/tags/tags.component';
import NumberPad from '../../components/number-pad/number-pad.component';

import { LayoutContainer } from './budget.styles';
import { useRecords } from '../../hooks/useRecords';

type Category = '-' | '+';

const DEFAULT_RECORD = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Budget() {
  const [selected, setSelected] = useState(DEFAULT_RECORD);

  const { addRecord } = useRecords();
  // Partial: only needs to match part of types
  const handleOnChange = (obj: Partial<typeof selected>) =>
    setSelected({ ...selected, ...obj });

  const saveNewRecord = () => {
    addRecord(selected);
    alert('Saved!');
    setSelected(DEFAULT_RECORD);
  };

  return (
    <LayoutContainer>
      <Tags
        value={selected.tagIds}
        onChange={tagIds => handleOnChange({ tagIds })}
      />
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
        onOk={saveNewRecord}
      />
    </LayoutContainer>
  );
}

export default Budget;
