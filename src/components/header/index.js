import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../static/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    padding: theme.spacing(1),
  },
  logo: {
    maxWidth: '100%'
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0);'
  }

}));


const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  

  const handleMemberClick = () => {
    history.push('/members')
  };

  const handleItemShopClick = () => {
    history.push('/itemshop')
  };

  return(
    <header className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <Grid item className={classes.buttons}>
              <Button size='medium' color="primary" variant="contained" onClick={handleItemShopClick}>Item Shop</Button>
            </Grid>
            <Grid item className={classes.buttons}>
              <Link to={'/'}>
                <div style={{width: '50px'}}>
                  <img className={classes.logo} src={logo} />
                </div>
              </Link>
            </Grid>
            <Grid item className={classes.buttons}>
              <Button size='medium' color="primary" variant="contained" onClick={handleMemberClick}>Members</Button>
            </Grid>
          </Grid>
        </header>
  )
}

export default Header;