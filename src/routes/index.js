import React, { useState } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { Button, Drawer, List, ListItem , ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../components/home';
import Roster from '../components/roster';
import Profile from '../components/profile';
import Header from '../components/header';
import ItemShop from '../components/itemshop';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Routes = (props) => {
  const [drawerOpen, toggleDrawer] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <p onClick={() => toggleDrawer(true)}>menu</p>
      <div >
        <Drawer elevation={10} anchor='left' open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <List className={classes.drawer}>
            <ListItem button component={Link} to='/' onClick={() => toggleDrawer(false)}>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button component={Link} to='/members' onClick={() => toggleDrawer(false)}>
              <ListItemText>Members</ListItemText>
            </ListItem>
            <ListItem button component={Link} to='/itemshop' onClick={() => toggleDrawer(false)}>
              <ListItemText>Item Shop</ListItemText>
            </ListItem>
          </List>
      </Drawer>
      </div>
      <Header />
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props}/>} />
        <Route exact path='/itemshop' render={(props) => <ItemShop {...props} />} />
        <Route exact path='/members' render={(props) => <Roster {...props} />} />
        <Route path='/members/:id' render={(props) => <Profile {...props} />} />
      </Switch>
    </div>
  );
};

export default withRouter(Routes);
