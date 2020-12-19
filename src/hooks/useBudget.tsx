import { useState, useEffect } from 'react';
import { useUpdate } from './useUpdate';

export const useBudget = () => {
  const [budget, setBudget] = useState<number | null>(null);

  useEffect(() => {
    const tempBudget = JSON.parse(
      window.localStorage.getItem('budget') || 'null'
    );
    setBudget(tempBudget);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('budget', JSON.stringify(budget));
  }, budget);

  const addBudget = (newBudget: string) => {
    if (newBudget.includes(' ')) {
      alert(`Budget can't have any space.`);
      return;
    }
    if (!Number.isNaN(newBudget) && isFinite(parseFloat(newBudget))) {
      alert('Successful');
      setBudget(parseFloat(newBudget));
    } else {
      alert('Please enter numbers.');
    }
  };

  return { budget, addBudget };
};
