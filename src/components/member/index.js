import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardMedia, CardHeader, Typography } from '@material-ui/core';
import './member.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function Member (props) {
  const classes = useStyles();
  const { avatar, name, bio } = props.info;

  return(
    <Card raised className={classes.root}>
      <CardHeader
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