import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardMedia, CardHeader, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    backgroundColor: '#555'
  }
}));

const getStats = ({username}) => {
  console.log(username)
  // This is where I will call for the API
}


export const Member = (props) => {
  const classes = useStyles();
  const { avatar, name, bio } = props.info;
  const stats = getStats(props.info);

  console.log(props)

  return(
    <Card raised className={classes.root}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant='h5'>{name}</Typography>
        }
        avatar={
        <Avatar aria-label="user-avatar">
          {name.charAt(0).toUpperCase()}
        </Avatar>
        }
      />
      <CardMedia
        component="img"
        image={avatar}
        title="Contemplative Reptile"
        className="card-avatar"
      />
      <CardContent>
      <Typography variant='body1' component='p'>{bio}</Typography>
      </CardContent>
    </Card>
  )
}


const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadStats: (member) => dispatch(actions.loadStats(member))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);