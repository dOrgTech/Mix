import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default App;
