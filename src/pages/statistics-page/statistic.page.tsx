import React, { useState } from 'react';
import Categories from '../../components/categories/categories.component';
import { useRecords } from '../../hooks/useRecords';
import { useTags } from '../../hooks/useTags';
import Layout from '../shared/layout.page';
import { CategoryWrapper, ItemContainer } from './statistics.styles';
import day from 'dayjs';

const Statistics: React.FC = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { findTag } = useTags();

  return (
    <Layout>
      <CategoryWrapper>
        <Categories value={category} onChange={value => setCategory(value)} />
      </CategoryWrapper>
      <div>
        {records.map(el => (
          <ItemContainer>
            <div className="tags">
              {el.tagIds.map(tagId => {
                const tag = findTag(tagId);
                const tagName = tag ? tag.name : '';
                return <span>{tagName}</span>;
              })}
            </div>
            {el.note && <div className="note">{el.note}</div>}
            <div className="amount">${el.amount}</div>
            {/* {day(el.createdAt).format('DD/MM/YYYY')} */}
          </ItemContainer>
        ))}
      </div>
    </Layout>
  );
};

export default Statistics;
