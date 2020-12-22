import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Member from '../member';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  fortnite: {
    fontFamily: 'BurbankBigCondensed-Black'
  },
  news: {
    color: '#3f51b5',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '10px 10px 0 10px',
    borderRadius: '22px',
    textAlign: 'center',
    marginBottom: '1em'
  },
}));


const Roster = (props) => {
  const classes = useStyles();
  const { team } = props;

  return(
    <div className={classes.root}>
      <Typography className={`${classes.fortnite} ${classes.news}`} variant='h4'>The Beam Team</Typography>
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

const mapStateToProps = ({team = []}) => {
  return {
    team
  };
};

export default connect(mapStateToProps)(Roster);
