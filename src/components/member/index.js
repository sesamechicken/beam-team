import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardMedia, CardHeader, CardActions, Typography } from '@material-ui/core';
import ps4 from '../../static/icons/ps4.png';
import xbox from '../../static/icons/xbox.png';
import nintendo from '../../static/icons/nintendo.png';
import pc from '../../static/icons/pc.png';


const useStyles = makeStyles((theme) => ({
  media: {
    height: '0',
    paddingTop: '56.25%', // 16:9
  },
  header: {
    backgroundColor: '#3f51b5',
    textAlign: 'center',
  },
  memberName: {
    color: '#fff',
    fontFamily: 'BurbankBigCondensed-Black'
  },
  icon: {
    maxWidth: '32px'
  }
}));


const Member = (props) => {
  const classes = useStyles();

  const getPlatformIcon = (props, platform) => {
    console.log(`platform icon for ${props.info.name} is ${platform}`)
    switch (platform){
      case 'ps4':
        return ps4;
      case 'xbox':
        return xbox;
      case 'nintendo':
        return nintendo;
      case 'pc': 
        return pc;
      default:
        return 'dont know'
    }
  }


  const { name, avatar, bio, username, platform } = props.info;

  return(
    <Card raised>
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
          title={name}
        />
      </Link>
      <CardContent>
        <Typography variant='body1' component='p'>{bio}</Typography>
      </CardContent>
      <CardActions>
        Platform: <img className={classes.icon} alt={platform} src={getPlatformIcon(props, platform)} />
      </CardActions>
    </Card>
  );
}
export default Member;
