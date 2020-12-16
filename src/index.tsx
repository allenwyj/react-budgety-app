import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// getting the actual vh for browsers
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(<App />, document.getElementById('root'));
