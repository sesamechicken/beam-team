import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadNews } from '../../redux/actions';
import { CircularProgress, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import '../../index.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: '1em'
  },
  img: {
    maxWidth: '100%'
  },
  container: {
    textAlign: 'center',
    margin: 'auto',
    width: '100%'
  },
  news: {
    color: '#3f51b5',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '10px 10px 0 10px',
    borderRadius: '22px',
    textAlign: 'center'
  },
  fortnite: {
    fontFamily: 'BurbankBigCondensed-Black'
  },
  white: {
    color: '#fff',
    textShadow: '1px 1px 5px black'
  }
}));


const loader = () => (
  <div style={{textAlign: 'center'}}>
    <CircularProgress color='secondary' />
  </div>
);

const Home = (props) => {
  const classes = useStyles();
  const { loadNews } = props;

  useEffect( () => {
    loadNews();
  }, []);
  
  const { image = '', motds = [] } = props.news;
  const { loading } = props;
  let date = '' || props.news.date && new Date(props.news.date);

    
  return (
    <div>
      <Typography className={`${classes.fortnite} ${classes.news}`} variant="h4">BEAM TEAM NEWS</Typography>
      <Typography className={`${classes.fortnite}`} variant="subtitle1">
        <span className={classes.white}>Updated on {date && format(date, 'PPpp')}</span>
      </Typography>
      <Grid className={classes.container} container>
      {
        loading === true ? loader() : motds.map((motd) => 
          <Grid item key={motd.id} lg={6}>
            <Paper className={classes.paper} elevation={3}>
              <Typography className={classes.fortnite} variant="h4">{motd.title}</Typography>
              <Typography variant="body1">{motd.body}</Typography>
              <img className={classes.img} src={motd.tileImage} alt={motd.title} />
            </Paper> 
          </Grid>
        )
      }
      </Grid>
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
