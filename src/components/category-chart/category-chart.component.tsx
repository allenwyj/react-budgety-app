import React from 'react';
import 'echarts/lib/chart/pie';
import Chart from '../chart/chart.component';
import day from 'dayjs';
import { NewRecordItem } from '../../hooks/useRecords';
import {
  DefaultTags,
  DEFAULT_EXPENSE_TAGS,
  DEFAULT_INCOME_TAGS
} from '../../data/tags-name';
import { CategoryChartContainer } from './category-chart.styles';
import { loadPieoptions } from './category-chart.options';

type Props = {
  category: '-' | '+';
  records: any;
};

const CategoryChart: React.FC<Props> = props => {
  const { records, category } = props;

  const getRecords = () => {
    const thisMonth = day(new Date()).format('YYYY-MM');
    // records from the same month
    const categorisedRecords = records.filter(
      (rec: NewRecordItem) =>
        rec.category === category &&
        day(thisMonth).isSame(rec.createdAt, 'month')
    );
    const hashRecords: { [K: string]: number[] } = {};
    categorisedRecords.forEach((record: NewRecordItem) => {
      const key = record.tagIds[0];
      if (!(key in hashRecords)) {
        hashRecords[key] = [];
      }
      hashRecords[key].push(record.amount);
    });
    return hashRecords;
  };

  const getRecordsByTag = () => {
    const recordsArr = Object.entries(getRecords());
    const tagSelections =
      category === '-' ? DEFAULT_EXPENSE_TAGS : DEFAULT_INCOME_TAGS;
    const totalAmountById = recordsArr.map(rec => {
      const totalAmount = rec[1].reduce(
        (accumulator, currentVal) => accumulator + currentVal,
        0
      );
      const found = tagSelections.find(
        (el: DefaultTags) => el.id === parseInt(rec[0])
      );
      return {
        name: found ? found.name : 'No Tag', // pick the tag name
        value: totalAmount
      };
    });
    return totalAmountById;
  };

  const getOptions = () => {
    const array = getRecordsByTag();
    return loadPieoptions(array);
  };

  return (
    <CategoryChartContainer>
      <p>Monthly Overview - {day(new Date()).format('MM/YYYY')}</p>
      <div className={'category-chart-wrapper'}>
        <Chart options={getOptions()} />
      </div>
    </CategoryChartContainer>
  );
};

export default CategoryChart;
