import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import NoMatch from './pages/404-page/no-match.page';
import Budget from './pages/budget/budget.page';
import Statistics from './pages/statistics/statistic.page';
import Tags from './pages/tag/tag.page';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/budget" />
          <Route path="/tags" component={Tags} />
          <Route path="/budget" component={Budget} />
          <Route path="/statistics" component={Statistics} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
