import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer } from './nav.style';

require('../../icons/dollar.svg');
require('../../icons/tag.svg');
require('../../icons/chart.svg');

const Nav = () => (
  <NavContainer>
    <ul>
      <li>
        <svg className="icon">
          <use xlinkHref="#tag" />
        </svg>
        <Link to="/tags">Tags</Link>
      </li>
      <li>
        <svg className="icon">
          <use xlinkHref="#dollar" />
        </svg>
        <Link to="/budget">My Budget</Link>
      </li>
      <li>
        <svg className="icon">
          <use xlinkHref="#chart" />
        </svg>
        <Link to="/statistics">Statistics</Link>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
