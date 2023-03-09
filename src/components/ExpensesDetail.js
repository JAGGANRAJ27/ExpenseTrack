import React from 'react';
import { Grid } from '@material-ui/core';
import { Details} from './';
import useStyles from '../styles';

function ExpensesDetail() {
    const classes = useStyles();
    return (
        <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense" />
        </Grid>
        </Grid>
    )
}

export default ExpensesDetail