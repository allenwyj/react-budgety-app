import { useEffect, useRef } from 'react';

/*
  Ignore the first render, and execute the fn at the second render (caused by setState).
*/
export const useUpdate = (fn: () => void, deps: any) => {
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
    console.log(count);
  });

  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, [fn, deps]);
};
