import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Paper, Grid, Chip, LinearProgress, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {loadStats} from '../../redux/actions';
import { getPlatformIcon, PieChart } from '../../utils';
import { types } from '@babel/core';

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
  },
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
  const user = state.team?.filter((user) => user.username === id)[0];
  const { stats = undefined } = user;
  const stats_battlePass = [
    {
      x: "Complete",
      y: stats?.battlePass?.progress
    },
    {
      x: "...to go",
      y: 100 - stats?.battlePass?.progress
    }
  ]
  return (
    state.loading && user?.stats == null && stats == null ? loader() : 
    <div>
      <Typography variant="h2" className={`${classes.fortnite} ${classes.white}`}>Profile - {user.name}</Typography>
      <Paper elevation={3}>
        <Grid container style={{padding: '1em'}}>
          <Grid item xs={6}>
            <img className={classes.user_icon} src={user.avatar} />
          </Grid>
          <Grid item xs={6} className={classes.bio}>
            <Typography className={classes.fortnite} variant="h3">{user.name}</Typography>
            <Typography className={classes.subname} variant="subtitle2">Epic name: {user.username}</Typography>
            <Typography>{user.bio}</Typography>
            Platform: <Chip 
              icon={<img className="icon" src={getPlatformIcon(user.platform)} />} 
              label={user.platform.toUpperCase()}
            />
          </Grid>
        </Grid>
        <Grid container style={{padding: '1em'}} spacing={2}>
          <Grid item xs={6}>
            <div><Typography variant='body2'>Also plays: </Typography>{user.games.map((game) => 
              <Chip color="primary" key={game.title} label={game.title} />
            )}
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body2'>Services: </Typography>
            {user.services && user.services?.map((service, index) => 
              <Chip color="primary" key={service+index} label={service.service} />
            )}
          </Grid>
        </Grid>
        <Typography style={{textAlign: 'center'}} variant='body2'>NOTE: These stats are <b>ONLY</b> for the current season.</Typography>
        <hr />
        {/* -------- now the stats... --------- */}
        <Grid container>
          <Grid item xs={12} style={{padding: '1em'}}>
            <Typography variant="h3" className="fortnite">Battlepass Stats</Typography>
            <Box display="flex" alignItems="center"className="m1">
              <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={stats?.battlePass?.level || 0} />
              </Box>
              <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`LVL ${stats?.battlePass?.level}`}</Typography>
              </Box>
            </Box>
            <Typography variant='h3' className='fortnite' align='center'>{`LEVEL ${stats?.battlePass.level}`}</Typography>
            <Typography className='fortnite' variant="h4" align='center'>{100 - stats?.battlePass?.progress}% until next level</Typography>
          </Grid>
        </Grid>
        {/* --- user stats --- */}
        <hr />
        <Grid container style={{padding: '1em'}}>
            <Grid item xs={12}>
              <Typography variant="h3" className="fortnite">User Stats</Typography>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} sm={4}>
                <Typography variant='h4' className='fortnite'>Kills</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats?.all.overall.kills.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant='h4' className='fortnite'>Deaths</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats?.all.overall.deaths.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Typography variant='h4' className='fortnite'>KD</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats?.all.overall.kd}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant='h4' className='fortnite'>Kills per match</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats?.all.overall.killsPerMatch.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant='h4' className='fortnite'>Kills per minute</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats?.all.overall.killsPerMin.toLocaleString()}</Typography>
              </Grid>
            </Grid>
            
        </Grid>
        <hr />
        <Grid container style={{padding: '1em'}}>
          <Grid item xs={12}>
            <Typography variant="h3" className="fortnite">Game Stats</Typography>
          </Grid>
          <Grid item container>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Wins</Typography>
                <Typography variant='h5' className='fortnite'>{parseInt(stats?.stats.all.overall.wins.toLocaleString())}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Win Rate</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats.all.overall.winRate}%</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Matches</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats.all.overall.matches.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Score</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats.all.overall.score.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Score Per Match</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats.all.overall.scorePerMatch.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Score Per Minute</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats.all.overall.scorePerMin.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Players Outlived</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats.all.overall.playersOutlived.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h4' className='fortnite'>Kills per minute</Typography>
                <Typography variant='h5' className='fortnite'>{stats?.stats.all.overall.killsPerMin.toLocaleString()}</Typography>
              </Grid>
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