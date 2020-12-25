import React from 'react';
import 'echarts/lib/chart/pie';
import Chart from '../chart/chart.component';
import day from 'dayjs';
import _ from 'lodash';
import { NewRecordItem } from '../../hooks/useRecords';

type Props = {
  category: '-' | '+';
  records: any;
};
type DefaultTags = { id: number; name: string };

const DEFAULT_EXPENSE_TAGS: DefaultTags[] = [
  { id: 1, name: 'food' },
  { id: 2, name: 'drinks' },
  { id: 3, name: 'fruits' },
  { id: 4, name: 'snacks' },
  { id: 5, name: 'dining' },
  { id: 6, name: 'clothing' },
  { id: 7, name: 'shopping' },
  { id: 8, name: 'house' },
  { id: 9, name: 'transport' },
  { id: 10, name: 'entertainment' },
  { id: 11, name: 'pet' },
  { id: 12, name: 'recharge' },
  { id: 13, name: 'travel' },
  { id: 14, name: 'car' },
  { id: 15, name: 'bills' },
  { id: 16, name: 'health' },
  { id: 17, name: 'education' },
  { id: 999, name: 'others' }
];

const DEFAULT_INCOME_TAGS: DefaultTags[] = [
  { id: 101, name: 'salary' },
  { id: 102, name: 'part-time' },
  { id: 103, name: 'bonus' },
  { id: 104, name: 'investment' },
  { id: 999, name: 'others' }
];

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
    console.log(categorisedRecords);
    const hashRecords: { [K: string]: number[] } = {};
    categorisedRecords.forEach((record: NewRecordItem) => {
      const key = record.tagIds[0];
      if (!(key in hashRecords)) {
        hashRecords[key] = [];
      }
      hashRecords[key].push(record.amount);
    });
    console.log(hashRecords);
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

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : <span>$</span>{c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: getRecordsByTag(),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return <Chart options={options} />;
};

export default CategoryChart;
