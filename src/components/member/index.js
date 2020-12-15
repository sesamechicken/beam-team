import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardMedia, CardHeader, Typography } from '@material-ui/core';

const useStyles = (theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    backgroundColor: '#01a3c8'
  },
  memberName: {
    fontFamily: "Permanent Marker",
    color: '#fff'
  }
});

export class Member extends React.Component {

  render(){
    const { name, avatar, bio, username } = this.props.info;
    const { classes } = this.props;

    return(
      <Card raised className={classes.root}>
        <CardHeader
          className={classes.header}
          title={
            <Typography className={classes.memberName} variant='h3'>{name}</Typography>
          }
        />
        <Link to={`members/${username}`}>
          <CardMedia
          component="img"
          image={avatar}
          title="Contemplative Reptile"
          className="card-avatar"
          />
        </Link>
        <CardContent>
        <Typography variant='body1' component='p'>{bio}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(useStyles)(Member);
