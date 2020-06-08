import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './Landing';
import Portfolio from './Portfolio';
import { Dashboard } from './Dashboard';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing/>
      </Route>
      <Route path="/portfolio" exact>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
