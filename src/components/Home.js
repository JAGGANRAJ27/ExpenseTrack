import React,{useRef} from 'react';
import { Grid } from '@material-ui/core';
import useStyles from '../styles';
import { Main } from '../components';

function Home() {
    const classes = useStyles();
    const main = useRef(null)
  return (
    
    <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
    <Grid ref={main} item xs={12} sm={3} className={classes.main}>
        <Main/>
    </Grid>
  </Grid>
  )
}

export default Home