import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import NoMatch from './pages/404-page/no-match.page';
import Budget from './pages/budget-page/budget.page';
import OverviewPage from './pages/overview-page/overview.page';
import Statistics from './pages/statistics-page/statistic.page';

const AppWrapper = styled.div`
  color: #333;
  max-width: 520px;
  margin: auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/budget" />
          <Route exact path="/budget" component={Budget} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/overview" component={OverviewPage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
