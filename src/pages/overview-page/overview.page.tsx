import React, { useRef, useEffect, useState } from 'react';
import Chart from '../../components/chart/chart.component';
import Layout from '../shared/layout.page';
import 'echarts/lib/chart/line';
import _ from 'lodash';
import day from 'dayjs';
import { useRecords } from '../../hooks/useRecords';
import { CategoryWrapper } from './overview.styles';
import Categories from '../../components/categories/categories.component';
import { loadOptions } from './overview-echarts.options';

const OverviewPage: React.FC = () => {
  const chartWrapper = useRef<HTMLDivElement>(null);
  const { records } = useRecords();
  const [category, setCategory] = useState<'-' | '+'>('-');

  useEffect(() => {
    // Loading the line chart to the latest dates
    const div = chartWrapper.current as HTMLDivElement;
    div.scrollLeft = div.scrollWidth;
  }, []);

  const getRecords = () => {
    const today = day(new Date());
    const array = [];
    // 30 days
    for (let i = 0; i <= 29; i++) {
      const dateString = today.subtract(i, 'day').format('YYYY-MM-DD');
      const matchedFound = _.filter(records, obj => {
        return (
          day(obj.createdAt).format('YYYY-MM-DD') === dateString &&
          obj.category === category
        );
      });

      const totalAmount = matchedFound.reduce(
        (accumulator, currentVal) => accumulator + currentVal.amount,
        0
      );
      array.push({ date: dateString, value: totalAmount });
    }
    array.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else if (a.date === b.date) {
        return 0;
      } else {
        return -1;
      }
    });

    return array;
  };

  const getOptions = () => {
    const array = getRecords();
    const keys = array.map(item => day(item.date).format('DD/MM'));
    const values = array.map(item => item.value);
    const options = loadOptions(keys, values, category);

    return options;
  };

  return (
    <Layout>
      <h1>Overview Page</h1>
      <CategoryWrapper>
        <Categories value={category} onChange={value => setCategory(value)} />
      </CategoryWrapper>
      <div className={'chart-wrapper'} ref={chartWrapper}>
        <Chart options={getOptions()} />
      </div>
    </Layout>
  );
};

export default OverviewPage;
