import React, { Component} from 'react';
import { Container } from '@material-ui/core';
import Example from './components/example';
import Roster from './components/roster';
import styles from './app.css';
import members from './members.json'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


function App(){
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


    console.log(members)
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container maxWidth='lg'>
            <div>logo</div>
            <div>stats</div>
            <Roster team={members} />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    );
}

export default App;
