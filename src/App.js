import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import IncomeDetail from './components/IncomeDetail';
import ExpensesDetail from './components/ExpensesDetail';
import Statements from './components/Statements';
import Home from './components/Home';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <Router>
    <div>
      <AppBar>
        <Toolbar>
      <Button><Link to="/">Home</Link></Button>
      <Button><Link to="/incomedetail">Income</Link></Button>
      <Button><Link to="/expensesdetail">Expenses</Link></Button>
      <Button><Link to="/statements">Statement</Link></Button>
        </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/incomedetail">
            <IncomeDetail/>
          </Route>
          <Route path="/expensesdetail">
            <ExpensesDetail/>
          </Route>
          <Route path="/statements">
            <Statements/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="*">
            <Home/>
          </Route>
        </Switch>
    </div></Router>
  );
};

export default App;
