import React from 'react';
import { Route, Redirect, useLocation, Switch, withRouter, useHistory } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../components/home';
import Roster from '../components/roster';
import Profile from '../components/profile';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const Routes = (props) => {
  const classes = useStyles();

  const history = useHistory();
  

  const handleMemberClick = () => {
    console.log(history)
    history.push('/members')
  };

    console.log(`routes says: ${JSON.stringify(props)}`)
    return (
      <div>
        <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography className={classes.title} variant="h6" >BT</Typography>
                <Button color="inherit" onClick={handleMemberClick}>Members</Button>
                <Button color="inherit" onClick={handleMemberClick}>Item Shop</Button>
              </Toolbar>
            </AppBar>
          </div>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props}/>} />
        <Route exact path='/members' render={(props) => <Roster {...props} />} />
        <Route path='/members/:id' render={(props) => <Profile {...props} />} />
      </Switch>
      </div>
    )
}

export default withRouter(Routes);
