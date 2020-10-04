import React, { FormEvent, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Logo from 'components/logo/Logo';
import { Box, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { authStart } from 'redux/auth/authSlice';
import { RootState } from 'redux/rootReducer';

export const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector<RootState>((state) => state.auth.loading);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authStart({ username, password }));
  };

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={false} sm={5} className={classes.image} />
      <Grid item xs={12} sm={7}>
        <Grid
          container
          direction='column'
          justify='flex-start'
          alignItems='flex-start'
          className={classes.loginContainer}
        >
          <Grid item>
            <Logo />
          </Grid>
          <Box my='auto'>
            <Typography component='h1' variant='h5'>
              Login
            </Typography>
            <form className={classes.form} noValidate onSubmit={onSubmit}>
              <TextField
                className={classes.textField}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                placeholder='Email Address'
                name='username'
                autoComplete='username'
                autoFocus
                value={username}
                onChange={handleUsernameChange}
              />
              <TextField
                className={classes.textField}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                placeholder='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={handlePasswordChange}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                {isLoading ? <CircularProgress color='secondary' /> : 'Sign Up'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
