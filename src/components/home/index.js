import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadNews } from '../../redux/actions';
import { CircularProgress, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format, parseISO } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginBottom: '1em'
  },
  img: {
    maxWidth: '100%'
  },
  container: {
    textAlign: 'center',
    margin: 'auto',
    width: '100%'
  },
  white: {
    color: '#fff'
  }
}));

const Home = (props) => {
  const classes = useStyles();

  useEffect( () => {
    props.loadNews();
  }, []);
  
  const { image, motds = [], date = '' } = props.news;
  const { loading } = props;

const loader = () => (
  <div style={{textAlign: 'center'}}>
    <CircularProgress color='secondary' />
  </div>
)

  console.log('loading is: ', loading)
  return (
    <div>
      <Typography className={classes.white} variant="h2">BEAM TEAM NEWS</Typography>
      <Typography className={classes.white} variant="subtitle1">Updated on {date}}</Typography>
      {
        loading === true ? loader() : motds.map((motd) => 
          <Grid xs="12" className={classes.container} container key={motd.id}>
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h4">{motd.title}</Typography>
              <Typography variant="body1">{motd.body}</Typography>
              <img className={classes.img} src={motd.tileImage} alt={motd.title} />
            </Paper>
          </Grid>
          
        )
      }
    </div>
  )
}

const mapStateToProps = ({news, loading}) => {
  return {
    news,
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadNews: () => dispatch(loadNews())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
