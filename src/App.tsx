import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import MobileViewOnly from './components/display-mobile-only/display-mobile-only.component';
import NoMatch from './pages/404-page/no-match.page';
import Budget from './pages/budget-page/budget.page';
import OverviewPage from './pages/overview-page/overview.page';
import TransactionPage from './pages/transaction-page/transaction.page';
import Transactions from './pages/transactions-page/transactions.page';

const AppWrapper = styled.div`
  color: #333;
  max-width: 520px;
  margin: auto;
  background: linen;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/budget" />
          <Route exact path="/budget" component={Budget} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/transactions/:id" component={TransactionPage} />
          <Route exact path="/overview" component={OverviewPage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
      <MobileViewOnly />
    </AppWrapper>
  );
}

export default App;
