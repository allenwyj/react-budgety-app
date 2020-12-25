import React, { useState } from 'react';
import { useRecords } from '../../hooks/useRecords';
import RecentChart from '../../components/recent-chart/RecentChart.component';
import Categories from '../../components/categories/categories.component';

import Layout from '../shared/layout.page';
import { CategoryWrapper } from './overview.styles';

const OverviewPage: React.FC = () => {
  const { records } = useRecords();
  const [category, setCategory] = useState<'-' | '+'>('-');

  return (
    <Layout>
      <h1>Overview Page</h1>
      <CategoryWrapper>
        <Categories value={category} onChange={value => setCategory(value)} />
      </CategoryWrapper>
      <RecentChart records={records} category={category} />
    </Layout>
  );
};

export default OverviewPage;
