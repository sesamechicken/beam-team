import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '1em',
    padding: '1em',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '8px 8px 0 0'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return(
    <footer className={classes.footer}>&copy; The Beam Team. Made with ❤️ by PROJECT107/sesamechicken0</footer>
  )
}

export default Footer;
