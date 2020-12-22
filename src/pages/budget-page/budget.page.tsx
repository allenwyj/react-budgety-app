import React, { useState } from 'react';

import Categories from '../../components/categories/categories.component';
import Note from '../../components/note/note.component';
import Tags from '../../components/tags/tags.component';
import NumberPad from '../../components/number-pad/number-pad.component';

import { CategoryWrapper, LayoutContainer } from './budget.styles';
import { useRecords } from '../../hooks/useRecords';
import CreatedDate from '../../components/created-date/created-date.component';
import { convertDateToString } from './budget.utils';

type Category = '-' | '+';

const DEFAULT_RECORD = {
  tagIds: [999] as number[],
  createdAt: convertDateToString(new Date().toISOString()), // default: the current time
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
      setNewRecord(DEFAULT_RECORD);
    }
  };

  return (
    <LayoutContainer className={'Budget'}>
      <Tags
        value={newRecord.tagIds}
        category={newRecord.category}
        onChange={tagIds => handleOnChange({ tagIds })}
      />
      <CreatedDate
        value={newRecord.createdAt}
        onChange={createdAt => handleOnChange({ createdAt })}
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
          onChange={category => handleOnChange({ category, tagIds: [999] })}
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