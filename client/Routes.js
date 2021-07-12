import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import FinancialLiteracy from './components/FinancialLiteracy';
import JobResearch from './components/JobResearch';
import SavingsCalculator from './components/SavingsCalculator';
import Login from './components/login.js'

export default function Routes() {
  return (
    <Switch>
      <Route path='/job-research' component={JobResearch} />
      <Route path='/financial-literacy' component={FinancialLiteracy} />
      <Route path='/savings-calculator' component={SavingsCalculator} />
      <Route path='/login' component={Login} />
    </Switch>
  );
}
