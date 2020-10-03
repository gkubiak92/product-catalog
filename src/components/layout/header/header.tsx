import { AppBar, Toolbar } from '@material-ui/core';
import Logo from 'components/logo/Logo';
import React from 'react';
import Filters from './Filters/Filters';
import SearchBar from './SearchBar/SearchBar';
import { useStyles } from './styles';
import UserAvatar from './UserAvatar/UserAvatar';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Logo />
        <SearchBar />
        <Filters />
        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
