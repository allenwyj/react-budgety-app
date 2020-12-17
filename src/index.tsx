import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const getInnerHeight = () => {
  // getting the actual vh for browsers
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

getInnerHeight();
window.addEventListener('resize', getInnerHeight);

ReactDOM.render(<App />, document.getElementById('root'));
