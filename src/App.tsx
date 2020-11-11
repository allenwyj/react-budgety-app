import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from './pages/layout.component';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/budget" />
        <Route path="/tags" component={Tags} />
        <Route path="/budget" component={Budget} />
        <Route path="/statistics" component={Statistics} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>My Statistics</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Budget() {
  return (
    <Layout>
      <h2>Budget</h2>
    </Layout>
  );
}

function NoMatch() {
  return <h2>404 Page</h2>;
}

export default App;
