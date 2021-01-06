import { useState, useEffect, useCallback } from 'react';
import { useUpdate } from './useUpdate';
import day from 'dayjs';

export type NewRecordItem = {
  id: number;
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createdAt: string;
};

export const useRecords = () => {
  const [records, setRecords] = useState<NewRecordItem[]>([]);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);

  useEffect(() => {
    const tempRecords = JSON.parse(
      window.localStorage.getItem('records') || '[]'
    );
    const tempIncome = calSameMonthCategoryTotalAmount('+', tempRecords);
    const tempExpense = calSameMonthCategoryTotalAmount('-', tempRecords);
    setRecords(tempRecords);
    setTotalIncome(tempIncome);
    setTotalExpense(tempExpense);
  }, []);

  const saveLocal = useCallback(() => {
    // TODO: DidMounted will set records once - unnecessary
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  useUpdate(saveLocal, records);

  const calSameMonthCategoryTotalAmount = (
    cat: '-' | '+',
    records: NewRecordItem[]
  ) => {
    const thisMonth = day(new Date()).format('YYYY-MM');
    const categorisedRecords = records.filter(
      rec =>
        rec.category === cat && day(thisMonth).isSame(rec.createdAt, 'month')
    );
    const totalAmount = categorisedRecords.reduce(
      (accumulator, currentVal) => accumulator + currentVal.amount,
      0
    );
    return totalAmount;
  };

  const addRecord = (newRecord: NewRecordItem) => {
    if (newRecord.amount <= 0) {
      alert('Sorry, amount should be greater than 0!');
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert('Please select a tag for your record!');
      return false;
    }

    // append ID
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    alert('Saved!');
    return true;
  };

  const findRecord = (id: number) => {
    return records.filter(record => record.id === id)[0];
  };

  const updateRecord = (record: any) => {
    setRecords(
      records.map(currentRecord =>
        currentRecord.id === record.id ? record : currentRecord
      )
    );
    alert('Updated!');
  };

  const deleteRecord = (id: number) => {
    setRecords(records.filter(record => record.id !== id));
    alert('Deleted!');
  };

  return {
    records,
    totalIncome,
    totalExpense,
    addRecord,
    findRecord,
    updateRecord,
    deleteRecord
  };
};
