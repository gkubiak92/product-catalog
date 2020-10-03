import { AppBar, Button, Toolbar } from '@material-ui/core';
import Logo from 'components/logo/Logo';
import React from 'react';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Logo />
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
