export const loadOptions = (
  keys: string[],
  values: number[],
  category: '+' | '-'
) => {
  // grid removes the white spaces around the chart
  return {
    grid: {
      top: '10%',
      left: 0,
      right: 0,
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      data: keys
    },
    yAxis: {
      type: 'value',
      show: false
    },
    tooltip: {
      show: true,
      triggerOn: 'click',
      position: 'top',
      formatter: '<span>$</span>{c}'
    },
    series: [
      {
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: { color: category === '-' ? '#f60' : '#6da0f3' },
        data: values,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }
    ]
  };
};
