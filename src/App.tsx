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
import Statistics from './pages/statistics-page/statistic.page';
import Tag from './pages/tag-page/tag.page';
import TagsCollection from './pages/tags-collection/tags-collection.page';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/budget" />
          <Route exact path="/tags" component={TagsCollection} />
          <Route exact path="/tags/:tag" component={Tag} />
          <Route exact path="/budget" component={Budget} />
          <Route exact path="/statistics" component={Statistics} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
