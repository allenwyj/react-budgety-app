import React, { ReactNode, useState } from 'react';
import Categories from '../../components/categories/categories.component';
import { NewRecordItem, useRecords } from '../../hooks/useRecords';
import { useTags } from '../../hooks/useTags';
import Layout from '../shared/layout.page';
import {
  CategoryWrapper,
  DateContainer,
  ItemContainer
} from './statistics.styles';
import day from 'dayjs';

const Statistics: React.FC = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { findTag } = useTags();

  const hashRecords: { [K: string]: NewRecordItem[] } = {};
  const categorisedRecords = records.filter(rec => rec.category === category);

  // putting different records into different key:value based on date.
  categorisedRecords.forEach(record => {
    const key = day(record.createdAt).format('DD-MM-YYYY');
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

  // TODO: 做笔记，concat，reduce
  return (
    <Layout pageName={'Stats'}>
      <CategoryWrapper>
        <Categories value={category} onChange={value => setCategory(value)} />
      </CategoryWrapper>
      {sortedArray.map(([date, sortedRecords]) => (
        <div key={date}>
          <DateContainer>{date}</DateContainer>
          <div>
            {sortedRecords.map(rec => (
              <ItemContainer key={rec.createdAt}>
                <div className="tags oneLine">
                  {rec.tagIds
                    .map(tagId => {
                      const tag = findTag(tagId);
                      const tagName = tag ? tag.name : '';
                      return <span key={tagId}>{tagName}</span>;
                    })
                    .reduce(
                      // if currVal is not the last one, append with comma
                      (result, span, index, arr) =>
                        result.concat(
                          index < arr.length - 1 ? [span, ','] : [span]
                        ),
                      [] as ReactNode[]
                    )}
                </div>
                {rec.note && <div className="note oneLine">{rec.note}</div>}
                <div className="amount">${rec.amount}</div>
              </ItemContainer>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Statistics;
