import styled from 'styled-components';

export const RecentChartContainer = styled.div`
  margin: 8px 16px;
  background: white;
  > p {
    padding: 12px 8px;
  }

  > .chart-wrapper {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }

    // show 7 days for recent chart.
    > div {
      width: 430%;
    }
  }
`;

export const NoteTextContainer = styled.p`
  font-size: 14px;
  color: #c5c5c5;
`;
