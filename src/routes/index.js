import React from 'react';
import { Link, Route, Redirect, useLocation, Switch, withRouter, useHistory } from 'react-router-dom';
import { Grid, Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../components/home';
import Roster from '../components/roster';
import Profile from '../components/profile';
import logo from '../static/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    padding: theme.spacing(2),
  },
  logo: {
    flexGrow: 0,
    maxHeight: '180px'
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0);'
  }

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
        <header className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <Grid item className={classes.buttons}>
              <Button size='large' color="primary" variant="contained" onClick={handleMemberClick}>Item Shop</Button>
            </Grid>
            <Grid item className={classes.buttons}>
              <Link to={'/'}><img className={classes.logo} src={logo} /></Link>
            </Grid>
            <Grid item className={classes.buttons}>
              <Button size='large' color="primary" variant="contained" onClick={handleMemberClick}>Members</Button>
            </Grid>
          </Grid>
        </header>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props}/>} />
        <Route exact path='/members' render={(props) => <Roster {...props} />} />
        <Route path='/members/:id' render={(props) => <Profile {...props} />} />
      </Switch>
      </div>
    )
}

export default withRouter(Routes);
