import { AppBar, Toolbar } from '@material-ui/core';
import Logo from 'components/Logo/Logo';
import React from 'react';
import Filters from './components/Filters/Filters';
import SearchBar from './components/SearchBar/SearchBar';
import { useStyles } from './styles';
import UserAvatar from './components/UserAvatar/UserAvatar';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { isAuthenticated } from 'redux/auth/auth.selectors';
import LoginButton from './components/LoginButton/LoginButton';
import LanguageSelector from 'components/LanguageSelector/LanguageSelector';

const Header = () => {
  const classes = useStyles();
  const isAuth = useSelector<RootState, boolean>(isAuthenticated);

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Logo />
        <SearchBar />
        <Filters />
        <LanguageSelector />
        {isAuth ? <UserAvatar /> : <LoginButton />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
