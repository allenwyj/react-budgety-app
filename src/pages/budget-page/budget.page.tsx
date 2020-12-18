import React, { useState } from 'react';

import Categories from '../../components/categories/categories.component';
import Note from '../../components/note/note.component';
import Tags from '../../components/tags/tags.component';
import NumberPad from '../../components/number-pad/number-pad.component';

import { CategoryWrapper, LayoutContainer } from './budget.styles';
import { useRecords } from '../../hooks/useRecords';

type Category = '-' | '+';

const DEFAULT_RECORD = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Budget() {
  const [newRecord, setNewRecord] = useState(DEFAULT_RECORD);
  const { addRecord } = useRecords();
  // Partial: only needs to match part of types
  const handleOnChange = (obj: Partial<typeof newRecord>) =>
    setNewRecord({ ...newRecord, ...obj });

  const saveNewRecord = () => {
    if (addRecord(newRecord)) {
      // reset all fields
      setNewRecord({
        tagIds: [],
        note: '',
        category: '-',
        amount: 0
      });
    }
  };

  return (
    <LayoutContainer className={'Budget'}>
      <Tags
        value={newRecord.tagIds}
        category={newRecord.category}
        onChange={tagIds => handleOnChange({ tagIds })}
      />
      <Note
        value={newRecord.note}
        onChange={note => {
          handleOnChange({ note });
        }}
      />
      <CategoryWrapper>
        <Categories
          value={newRecord.category}
          onChange={category => handleOnChange({ category })}
        />
      </CategoryWrapper>
      <NumberPad
        value={newRecord.amount}
        onChange={amount => handleOnChange({ amount })}
        onOk={saveNewRecord}
      />
    </LayoutContainer>
  );
}

export default Budget;
