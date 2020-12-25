import { useState, useEffect } from 'react';
import { useUpdate } from './useUpdate';
import day from 'dayjs';

export type NewRecordItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createdAt: string;
};

export const useRecords = () => {
  const [records, setRecords] = useState<NewRecordItem[]>([]);
  // TODO: useRef for totalIncome and totalExpense
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);

  useEffect(() => {
    const tempRecords = JSON.parse(
      window.localStorage.getItem('records') || '[]'
    );
    setRecords(tempRecords);
    console.log('mounted');
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
    const tempIncome = calSameMonthCategoryTotalAmount('+');
    const tempExpense = calSameMonthCategoryTotalAmount('-');
    setTotalIncome(tempIncome);
    setTotalExpense(tempExpense);
    console.log('set');
  }, records);

  const thisMonth = day(new Date()).format('YYYY-MM');

  const calSameMonthCategoryTotalAmount = (cat: '-' | '+') => {
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

    setRecords([...records, newRecord]);
    alert('Saved!');
    return true;
  };

  return { records, totalIncome, totalExpense, addRecord };
};
