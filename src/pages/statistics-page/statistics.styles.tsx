import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  background: white;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  font-size: 16px;
  line-height: 20px;
  padding: 12px 16px;

  > .note {
    font-size: 14px;
    // align left
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

export const DateContainer = styled.h3`
  font-size: 14px;
  line-height: 20px;
  padding: 10px 16px;
`;
