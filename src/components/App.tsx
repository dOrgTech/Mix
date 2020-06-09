import React from "react";
import { Switch, Route } from "react-router-dom";
import { Landing } from "./Landing";
import Portfolio from "./Portfolio";
import { Dashboard } from "./Dashboard";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Dashboard>
        <Switch>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/anonymize" exact>
            <div>
              Anonymize view coming soon :-)
            </div>
          </Route>
          <Route path="/withdraw" exact>
            <div>
              Withdraw view coming soon :-)
            </div>
          </Route>
        </Switch>
      </Dashboard>
    </Switch>
  );
};

export default App;
