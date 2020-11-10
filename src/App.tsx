import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Nav from './components/nav/nav.component';

import styled from 'styled-components';

const PageContaniner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SwitchContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
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
        <Nav />
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
