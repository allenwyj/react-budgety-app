import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { NavContainer } from './nav.style';

const Nav = () => (
  <NavContainer>
    <ul>
      <li>
        <Icon name="tag" />
        <Link to="/tags">Tags</Link>
      </li>
      <li>
        <Icon name="dollar" />
        <Link to="/budget">My Budget</Link>
      </li>
      <li>
        <Icon name="chart" />
        <Link to="/statistics">Statistics</Link>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
