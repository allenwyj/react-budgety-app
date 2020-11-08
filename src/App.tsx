import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import styled from 'styled-components';

const PageContaniner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid red;
`;

const SwitchContainer = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }
`;

function App() {
  return (
    <Router>
      <PageContaniner>
        <SwitchContainer>
          <Switch>
            <Redirect exact from="/" to="/budget" />
            <Route path="/tags" component={Tags} />
            <Route path="/budget" component={Budget} />
            <Route path="/statistics" component={Statistics} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </SwitchContainer>
        <Nav>
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
        </Nav>
      </PageContaniner>
    </Router>
  );
}

function Statistics() {
  return <h2>My Statistics</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Budget() {
  return <h2>Budget</h2>;
}

function NoMatch() {
  return <h2>404 Page</h2>;
}

export default App;
