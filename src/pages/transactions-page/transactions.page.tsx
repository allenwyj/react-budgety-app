import React, { useState } from 'react';
import Categories from '../../components/categories/categories.component';
import { NewRecordItem, useRecords } from '../../hooks/useRecords';
import Layout from '../shared/layout.page';
import {
  CategoryWrapper,
  DateContainer,
  DateTitleContainer,
  EmptyRecordContainer
} from './transactions.styles';
import day from 'dayjs';
import RecordItem from '../../components/record-item/record-item.component';
import BudgetTile from '../../components/budget-tile/budget-tile.component';

const Transactions: React.FC = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records, totalIncome, totalExpense } = useRecords();

  const hashRecords: { [K: string]: NewRecordItem[] } = {};
  const categorisedRecords = records.filter(rec => rec.category === category);

  // putting different records into different key:value based on date.
  categorisedRecords.forEach(record => {
    const key = day(record.createdAt).format('YYYY-MM-DD');
    if (!(key in hashRecords)) {
      hashRecords[key] = [];
    }
    hashRecords[key].push(record);
  });

  // convert hashMap into array and sort the array based on the latest date
  const sortedArray = Object.entries(hashRecords).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  const today = day(new Date()).format('YYYY-MM-DD');
  // if the latest record exists and its date is today, then rename it.
  sortedArray[0] &&
    sortedArray[0][0] &&
    sortedArray[0][0] === today &&
    (sortedArray[0][0] = 'Today');

  return (
    <Layout>
      <BudgetTile totalExpense={totalExpense} totalIncome={totalIncome} />
      <CategoryWrapper>
        <Categories value={category} onChange={value => setCategory(value)} />
      </CategoryWrapper>
      {sortedArray.length === 0 && (
        <EmptyRecordContainer>
          <p>No Records</p>
        </EmptyRecordContainer>
      )}
      {sortedArray.map(([date, sortedRecords]) => {
        if (date !== 'Today') {
          date = day(date).format('DD/MM/YYYY');
        }
        return (
          <div key={date}>
            <DateTitleContainer>
              <DateContainer>{date}</DateContainer>
              <p>
                <span>$ {category}</span>
                {sortedRecords.reduce(
                  (accumulator, currentRecord) =>
                    accumulator + currentRecord.amount,
                  0
                )}
              </p>
            </DateTitleContainer>
            <div>
              {sortedRecords.map(rec => (
                <RecordItem
                  key={rec.id}
                  rec={rec}
                />
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Transactions;
