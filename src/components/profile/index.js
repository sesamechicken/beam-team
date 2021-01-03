import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Paper, Grid, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {loadStats} from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  user_icon: {
    maxWidth: '150px',
    backgroundColor: '#fff',
    borderRadius: '12px'
  },
  bio: {
    backgroundColor: '#fff',
    borderRadius: '12px'
  },
  game: {
    margin: '1em'
  },
  subname: {
    color: '#666'
  },
  fortnite: {
    fontFamily: 'BurbankBigCondensed-Black'
  },
  white: {
    color: '#fff',
    textShadow: '1px 1px 10px #444'
  }
}));

const Profile = (props) => {
  const classes = useStyles();
  let { id } = useParams();

  useEffect( () => {
    props.loadStats(id);
  }, []);

  const loader = () => (
    <div style={{textAlign: 'center'}}>
      <CircularProgress color='secondary' />
    </div>
  );
  const { state, loading } = props;
  const user = state.team.filter((user) => user.username === id)[0];
  
  console.log(user);

  return (
    state.loading ? loader() : 
    <div>
      <Typography variant="h2" className={`${classes.fortnite} ${classes.white}`}>Profile</Typography>
      <Paper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img className={classes.user_icon} src={user.avatar} />
          </Grid>
          <Grid item xs={6} className={classes.bio}>
            <Typography className={classes.fortnite} variant="h3">{user.name}</Typography>
            <Typography className={classes.subname} variant="subtitle2">Epic name: {user.username}</Typography>
            <Typography>{user.bio}</Typography>
          </Grid>
        </Grid>
            {user.platform.toUpperCase()}
            <Grid container>
              <Grid item xs={12}>
                <div>{user.games.map((game) => 
                  <Chip color="primary" key={game.title} label={game.title} />
                )}
                </div>
              </Grid>
            </Grid>
        <hr />
        <Grid container>
          <Grid item xs={6}>
            <img className={classes.user_icon} src={user.avatar} />
          </Grid>
          <Grid item xs={6} className={classes.bio}>
            <Typography variant="h3">{user.name}</Typography>
            <Typography variant="subtitle2">{user.username}</Typography>
            <Typography>{ user.bio }</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadStats: (member) => dispatch(loadStats(member))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Profile);