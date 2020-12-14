import React, { useState } from 'react';
import { render } from 'react-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import actions from '../../redux/actions';
import Member from '../member';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Roster = (props) => {
  const classes = useStyles();
  const {team} = props;

  return(
    <div className={classes.root}>
      <h2>Beam Team Team</h2>
      <Grid alignContent='center' container spacing={3}>
      {
        team.map((teammate) => 
        <Grid className={classes.paper} key={teammate.name} sm={6} item md={4}>
          <Member info={teammate} />
          </Grid>)
      }
      </Grid>
    </div>
  )
};

export default Roster;