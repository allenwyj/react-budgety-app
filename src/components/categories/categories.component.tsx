import React from 'react';
import { CategoriesSection } from './categories.styles';

const Categories = () => {
  return (
    <CategoriesSection>
      <ul>
        <li className="selected">Expense</li>
        <li>Income</li>
      </ul>
    </CategoriesSection>
  );
};

export default Categories;
