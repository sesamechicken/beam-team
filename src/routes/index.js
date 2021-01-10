import React, { useState } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Home from '../components/home';
import Roster from '../components/roster';
import Profile from '../components/profile';
import ItemShop from '../components/itemshop';
import Footer from '../components/footer';
import logo from '../static/logo.png';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuBttn: {
    backgroundColor: '#fff'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  logo: {
    textAlign: 'center',
    '& img': {
      maxHeight: '80px'
    }
  },
}));

const Routes = (props) => {
  const [drawerOpen, toggleDrawer] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3} >
          <Grid item xs>
            <IconButton className={classes.menuBttn} color="primary" aria-label="menu" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs className={classes.logo}>
            <Link to='/'><img src={logo} /></Link>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      <Drawer elevation={10} anchor='left' open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List className={classes.drawer}>
          <ListItem button component={Link} to='/' onClick={() => toggleDrawer(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to='/members' onClick={() => toggleDrawer(false)}>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItem>
          <ListItem button component={Link} to='/itemshop' onClick={() => toggleDrawer(false)}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Item Shop" />
          </ListItem>
        </List>
      </Drawer>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props}/>} />
        <Route exact path='/itemshop' render={(props) => <ItemShop {...props} />} />
        <Route exact path='/members' render={(props) => <Roster {...props} />} />
        <Route path='/members/:id' render={(props) => <Profile {...props} />} />
      </Switch>
      <Footer />
      </div>
    </div>
  );
};

export default withRouter(Routes);
