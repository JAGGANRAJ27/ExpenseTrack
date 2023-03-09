import React, {  useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';

const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root} style={{background:'#C3F3C0'}}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
  <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
     
    </Card>
  );
};

export default ExpenseTracker;
