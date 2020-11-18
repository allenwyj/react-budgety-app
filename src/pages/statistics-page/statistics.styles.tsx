import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  background: white;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    // align left
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
