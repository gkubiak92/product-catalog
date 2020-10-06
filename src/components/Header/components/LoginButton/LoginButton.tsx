import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const LoginButton = () => {
  const classes = useStyles();

  return (
    <Link id='loginButton' to='/login' className={classes.link}>
      <Button variant='outlined' color='primary'>
        Log In
      </Button>
    </Link>
  );
};

export default LoginButton;
