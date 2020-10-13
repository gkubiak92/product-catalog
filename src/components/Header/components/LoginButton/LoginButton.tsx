import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const LoginButton = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Link id='loginButton' to='/login' className={classes.link}>
      <Button variant='outlined' color='primary'>
        {t('login')}
      </Button>
    </Link>
  );
};

export default LoginButton;
