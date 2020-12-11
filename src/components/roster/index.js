import React from 'react';
import { render } from 'react-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Member from '../member';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Roster(props) {
  const classes = useStyles();
    const {team} = props;

    return(
      <div className={classes.root}>
        <h2>Beam Team Team</h2>
        <Grid container spacing={3}>
        {
          team.map((teammate) => <Grid className={classes.paper} key={teammate.name} item md={4}>
            <Member info={teammate} />
            </Grid>)
        }
        </Grid>
      </div>
    )
}