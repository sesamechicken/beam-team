import React, { Component} from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import './App.css';

function App(props){
  return(
    <Router>
        <CssBaseline>
          <Container className='main-body' maxWidth='lg'>
            <Routes />
          </Container>
        </CssBaseline>
    </Router>
  );
}

export default App;
