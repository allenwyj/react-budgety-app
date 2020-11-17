// encapsulation by function
let id = parseInt(window.localStorage.getItem('idMax') || '0');

export const createId = () => {
  id += 1;
  window.localStorage.setItem('idMax', id.toString());
  return id;
};
