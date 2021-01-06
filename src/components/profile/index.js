import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Paper, Grid, Chip, LinearProgress, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { VictoryPie } from 'victory';
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
      <LinearProgress color='secondary' />
    </div>
  );
  const { state, loading } = props;
  const user = state.team.filter((user) => user.username === id)[0];
  const { stats } = user;
  console.log(user);


  const stats_battlePass = [
    {
      x: "Complete",
      y: stats?.battlePass.progress
    },
    {
      x: "...to go",
      y: 100 - stats?.battlePass.progress
    }
  ]
  return (
    state.loading ? loader() : 
    <div>
      <Typography variant="h2" className={`${classes.fortnite} ${classes.white}`}>Profile - {user.name}</Typography>
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
        {/* -------- now the stats... --------- */}
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className="fortnite">Battlepass</Typography>
            <Box display="flex" alignItems="center"className="m1">
              <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={stats.battlePass.level} />
              </Box>
              <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`LEVEL ${stats.battlePass.level}`}</Typography>
              </Box>
            </Box>
            
          </Grid>
          <Grid item xs={12} sm={6} className={classes.bio} style={{padding: '1em'}}>
            Until next level
            <VictoryPie 
              data={stats_battlePass}
              innerRadius={100}
              animate={{
                duration: 2000
              }}
              colorScale={["green", "#e5e5e5"]}
            />
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