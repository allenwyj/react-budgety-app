import { useState, useEffect } from 'react';
import { useUpdate } from './useUpdate';

export type NewRecordItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createdAt: string;
};
type MyNewRecord = Omit<NewRecordItem, 'createdAt'>;

// type MyNewRecord = NewRecordItem & {
//   createdAt: string; // ISO 8601
// };

export const useRecords = () => {
  const [records, setRecords] = useState<NewRecordItem[]>([]);

  useEffect(() => {
    const tempRecords = JSON.parse(window.localStorage.getItem('records') || '[]');
    setRecords(tempRecords);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: MyNewRecord) => {
    if (newRecord.amount <= 0) {
      alert('Sorry, amount should be greater than 0!');
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert('Please select a tag for your record!');
      return false;
    }
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
    alert('Saved!');
    return true;
  };

  return { records, addRecord };
};
