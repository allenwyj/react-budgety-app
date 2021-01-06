import React from 'react';
import { useBudget } from '../../hooks/useBudget';
import {
  BudgetTileContainer,
  ExpenseNumberContainer,
  IncomeNumberConatiner,
  TitleContainer
} from './budget-tile.styles';

interface BudgetTileProps {
  totalIncome: number;
  totalExpense: number;
}

const BudgetTile: React.FC<BudgetTileProps> = ({
  totalIncome,
  totalExpense
}) => {
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
