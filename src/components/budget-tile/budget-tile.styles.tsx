import styled from 'styled-components';

export const BudgetTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin: 8px 16px;

  > button {
    font-size: 14px;
    color: #228b22;
    border: none;
    background: inherit;
    margin: 12px auto;
  }
`;

export const TitleContainer = styled.div`
  display: block;
  color: #c5c5c5;
  font-size: 14px;
  padding: 12px 8px;

  > .number {
    color: #000;
    margin: 8px 0 8px 8px;
  }
`;

export const ExpenseNumberContainer = styled.span`
  font-size: 22px;
  padding: 0 0 0 16px;
  font-weight: 700;
`;

export const IncomeNumberConatiner = styled.div`
  display: flex;
  justify-content: space-between;
`;
