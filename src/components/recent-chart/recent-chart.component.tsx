import React, { useRef, useEffect } from 'react';
import Chart from '../chart/chart.component';
import 'echarts/lib/chart/bar';
import _ from 'lodash';
import day from 'dayjs';
import { loadOptions } from './recent-chart.options';
import { NoteTextContainer, RecentChartContainer } from './recent-chart.styles';

type Props = {
  category: '-' | '+';
  records: any;
};

const RecentChart: React.FC<Props> = props => {
  const { records, category } = props;
  // get the parent element of chart
  const chartWrapper = useRef<HTMLDivElement>(null);

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
    <RecentChartContainer>
      <p>Daily Overviews (in last 30 days)</p>
      <div className={'chart-wrapper'} ref={chartWrapper}>
        <Chart options={getOptions()} />
      </div>
      <NoteTextContainer>
        * Scroll left or right to view more days.
      </NoteTextContainer>
    </RecentChartContainer>
  );
};

export default RecentChart;
