import { useState, useEffect } from 'react';
import { useUpdate } from './useUpdate';

type NewRecordItem = {
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
    const records = JSON.parse(window.localStorage.getItem('records') || '[]');
    setRecords(records);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: MyNewRecord) => {
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
  };

  return { records, addRecord };
};
