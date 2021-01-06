import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecordItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 16px;
  margin: 8px 16px 8px 16px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    > .note {
      font-size: 12px;
      margin: auto;
      color: #999;
      max-width: 40vw;
      @media only screen and (min-device-width: 520px) {
        max-width: 200px;
      }
    }
    > .time {
      font-size: 12px;
      color: #d1d1d1;
    }
  }
  > .icon {
    height: 24px;
    width: 24px;
  }
`;
