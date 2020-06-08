import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './Landing';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing/>
      </Route>
    </Switch>
  );
}

export default App;
