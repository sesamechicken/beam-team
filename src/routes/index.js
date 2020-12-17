import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../components/home';
import Roster from '../components/roster';
import Profile from '../components/profile';
import Header from '../components/header';
import ItemShop from '../components/itemshop';

const Routes = (props) => {
    return (
      <div>
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
