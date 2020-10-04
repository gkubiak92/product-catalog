import React from 'react';
import logo from 'assets/img/jointshio_logo.png';
import { useStyles } from './styles';

const Logo = () => {
  const classes = useStyles();

  return (
    <div id='logo' className={classes.logo}>
      <img src={logo} alt='' />
    </div>
  );
};

export default Logo;
