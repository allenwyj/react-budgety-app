import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { NavContainer } from './nav.style';

const Nav: React.FunctionComponent = () => (
  <NavContainer>
    <ul>
      <li>
        <NavLink to="/tags" activeClassName="selected">
          <Icon name="tag" />
          Tags
        </NavLink>
      </li>
      <li>
        <NavLink to="/budget" activeClassName="selected">
          <Icon name="dollar" />
          My Budget
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName="selected">
          <Icon name="chart" />
          Statistics
        </NavLink>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
