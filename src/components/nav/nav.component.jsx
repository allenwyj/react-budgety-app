import React from 'react';

import { Link } from 'react-router-dom';

import { NavContainer } from './nav.style';

const Nav = () => (
  <NavContainer>
    <ul>
      <li>
        <Link to="/tags">Tags</Link>
      </li>
      <li>
        <Link to="/budget">My Budget</Link>
      </li>
      <li>
        <Link to="/statistics">Statistics</Link>
      </li>
    </ul>
  </NavContainer>
);

export default Nav;
