import React, { useState } from 'react';
import { useRecords } from '../../hooks/useRecords';
import RecentChart from '../../components/recent-chart/recent-chart.component';
import Categories from '../../components/categories/categories.component';

import Layout from '../shared/layout.page';
import { CategoryWrapper } from './overview.styles';
import CategoryChart from '../../components/category-chart/category-chart.component';

const OverviewPage: React.FC = () => {
  const { records } = useRecords();
  const [category, setCategory] = useState<'-' | '+'>('-');

  return (
    <Layout>
      <CategoryWrapper>
        <Categories value={category} onChange={value => setCategory(value)} />
      </CategoryWrapper>
      <RecentChart records={records} category={category} />
      <CategoryChart records={records} category={category} />
    </Layout>
  );
};

export default OverviewPage;
