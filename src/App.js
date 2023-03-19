import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import IncomeDetail from './components/IncomeDetail';
import ExpensesDetail from './components/ExpensesDetail';
import Statements from './components/Statements';
import Home from './components/Home';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <Router>
    <div>
      <AppBar>
        <Toolbar>
      <Link to="/" className={classes.links}>Home</Link>
      <Link to="/incomedetail" className={classes.links}>Income</Link>
      <Link to="/expensesdetail" className={classes.links}>Expenses</Link>
      <Link to="/statements" className={classes.links}>Statement</Link>
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
