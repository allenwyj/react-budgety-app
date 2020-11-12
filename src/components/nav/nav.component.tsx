import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { NavContainer } from './nav.style';

const Nav = () => (
  <NavContainer>
    <ul>
      <li>
        <Link to="/tags">
          <Icon name="tag" />
          Tags
        </Link>
      </li>
      <li>
        <Link to="/budget">
          <Icon name="dollar" />
          My Budget
        </Link>
      </li>
      <li>
        <Link to="/statistics">
          <Icon name="chart" />
          Statistics
        </Link>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
