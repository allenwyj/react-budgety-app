import React from 'react';
import { useRecords } from '../../hooks/useRecords';
import {
  BudgetTileContainer,
  ExpenseNumberContainer,
  IncomeNumberConatiner,
  TitleContainer
} from './budget-tile.styles';
import { useBudget } from '../../hooks/useBudget';

const BudgetTile: React.FC = () => {
  const { totalIncome, totalExpense } = useRecords();
  const { budget, addBudget } = useBudget();

  const onUserClick = () => {
    const userInput = window.prompt('Enter your budget for this month.');
    if (!userInput) {
      alert(`Budget can't be empty.`);
      return;
    }
    addBudget(userInput);
  };

  return (
    <BudgetTileContainer>
      <TitleContainer>Your Spending This Month</TitleContainer>
      <ExpenseNumberContainer>$ {totalExpense}</ExpenseNumberContainer>
      <IncomeNumberConatiner>
        <TitleContainer>
          <p>Your Income This Month</p>
          <p className="number">$ {totalIncome}</p>
        </TitleContainer>
        <TitleContainer>
          <p>Budget left</p>
          <p className="number">
            {budget ? `$ ${budget - totalExpense}` : '***'}
          </p>
        </TitleContainer>
      </IncomeNumberConatiner>
      <button onClick={onUserClick}>Set Budget</button>
    </BudgetTileContainer>
  );
};
export default BudgetTile;
