import React, { useState } from 'react';
import { CategoriesSection } from './categories.styles';

const Categories = () => {
  const categoryMap = { '-': 'Expense', '+': 'Income' };
  // get type pf categoryMap and get its keys as the type
  // type x = typeof categoryMap;
  type Keys = keyof typeof categoryMap;

  const [categoryList] = useState<Keys[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <CategoriesSection>
      <ul>
        {categoryList.map(el => (
          <li
            key={el}
            className={category === el ? 'selected' : ''}
            onClick={() => setCategory(el)}
          >
            {categoryMap[el]}
          </li>
        ))}
      </ul>
    </CategoriesSection>
  );
};

export default Categories;
