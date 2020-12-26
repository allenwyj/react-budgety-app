import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { NavContainer } from './nav.style';

const Nav: React.FC = () => (
  <NavContainer>
    <ul>
      <li>
        <NavLink to="/budget" activeClassName="selected">
          <Icon name="dollar" />
          Budget
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName="selected">
          <Icon name="chart" />
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to="/overview" activeClassName="selected">
          <Icon name="chart" />
          Overview
        </NavLink>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
