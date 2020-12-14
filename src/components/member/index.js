import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardMedia, CardHeader, Typography } from '@material-ui/core';

const useStyles = (theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    backgroundColor: '#555'
  }
});

const getStats = (props) => {
  console.log(props)
  // This is where I will call for the API
  const { loadStats, info } = props;
  loadStats(info.username);
}


export class Member extends React.Component {
  
  componentDidMount(){
    const { loadStats } = this.props

    loadStats(this.props.info.username);
  }

  

  render(){
    const { name, avatar, bio } = this.props.info;
    const { classes } = this.props;

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
const styledComponent = withStyles(useStyles)(Member);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);