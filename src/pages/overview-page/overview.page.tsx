import React from 'react';
import Chart from '../../components/chart/chart.component';
import Layout from '../shared/layout.page';

import 'echarts/lib/chart/line';

const OverviewPage: React.FC = () => {
  const options = {
    xAxis: {
      type: 'category',
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31'
      ]
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      show: true
    },
    series: [
      {
        data: [
          120,
          200,
          150,
          80,
          70,
          110,
          130,
          120,
          200,
          150,
          80,
          70,
          110,
          130,
          120,
          200,
          150,
          80,
          70,
          110,
          130,
          120,
          200,
          150,
          80,
          70,
          110,
          130,
          120,
          200,
          150
        ],
        type: 'line',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }
    ]
  };

  return (
    <Layout>
      <h1>Overview Page</h1>
      <Chart options={options} />
    </Layout>
  );
};

export default OverviewPage;
