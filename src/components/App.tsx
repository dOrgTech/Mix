import React from 'react';
import { Typography } from 'antd'
import { Switch, Route } from 'react-router-dom';
import { Landing } from './Landing';

const { Title } = Typography

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
