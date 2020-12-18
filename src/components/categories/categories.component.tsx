import React, { useState } from 'react';
import { CategoriesSection } from './categories.styles';

type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
};

const Categories: React.FC<Props> = props => {
  const categoryMap = { '-': 'Expense', '+': 'Income' };
  // get type pf categoryMap and get its keys as the type
  // type x = typeof categoryMap;
  type Keys = keyof typeof categoryMap;

  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value;
  const setCategory = props.onChange;

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
