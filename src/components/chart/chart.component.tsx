import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

interface Props {
  // TODO: BUG: the newest version has problem
  //options: echarts.EChartOption: https://github.com/apache/incubator-echarts/issues/13850
  options: any;
}

const Chart: React.FC<Props> = props => {
  const container = useRef<HTMLDivElement>(null);
  const chart = useRef(null) as any;
  const { options } = props;

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    console.log(options);
    if (container.current) {
      // set the height and widht for echart
      container.current.style.width = `${width - 20}px`;
      container.current.style.height = `${(width - 20) * 1.2}px`;
      chart.current = echarts.init(container.current, 'dark');
    } else console.warn('Error!');
    chart.current.setOption(options);
  }, []);

  return <div ref={container} />;
};

export default Chart;
