export const loadPieoptions = (values: {name:string, value:number}[]) => ({
    title: {
      show: values.length === 0,
      textStyle: {
        color: 'grey',
        fontSize: 20
      },
      text: 'No data',
      left: 'center',
      top: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : <span>$</span>{c} ({d}%)'
    },
    series: [
      {
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        data: values,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });