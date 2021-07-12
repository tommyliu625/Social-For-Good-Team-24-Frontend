import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import FinancialLiteracy from './components/FinancialLiteracy';
import JobResearch from './components/JobResearch';
import SavingsCalculator from './components/SavingsCalculator';
import Login from './components/login.js';
import Worksheet from './components/Worksheet.js'

export default function Routes() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }
  return (
    <Switch>
      <Route path='/job-research' component={JobResearch} />
      <Route path='/financial-literacy' component={FinancialLiteracy} />
      <Route path='/savings-calculator' component={SavingsCalculator} />
      <Route path='/worksheet' component={Worksheet} />
      <Route 
            path='/login' 
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />    </Switch>
  );
}
