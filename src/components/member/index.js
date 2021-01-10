import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardMedia, CardHeader, CardActions, Chip, Typography } from '@material-ui/core';
import { getPlatformIcon } from '../../utils';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '0',
    paddingTop: '56.25%', // 16:9
  },
  header: {
    backgroundColor: '#3f51b5',
    textAlign: 'center',
  }
}));


const Member = (props) => {
  const classes = useStyles();
  const { name, avatar, bio, username, platform, services = [] } = props.info;

  return(
    <Card raised>
      <CardHeader
        className={classes.header}
        title={
          <Typography className="fortnite" variant='h3'>{name}</Typography>
        }
      />
      <Link to={`members/${username}`}>
        <CardMedia
          component="img"
          image={avatar}
          title={name}
        />
      </Link>
      <CardContent>
        <Typography variant='body1' component='p'>{bio}</Typography>
      </CardContent>
      <CardActions>
        <Chip
          icon={<img className="icon" alt={platform} src={getPlatformIcon(platform)} />}
          label={platform.toUpperCase()}
        />
        {
          services.map((svc) =>
          <Chip
            key={name+svc}
            icon={<img className="icon" alt={svc.service} src={getPlatformIcon(svc.service)} />}
            label={svc?.service?.toUpperCase()}
          /> 
          )
        }
      </CardActions>
    </Card>
  );
}
export default Member;
