import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Logo from 'components/logo/Logo';
import { Box } from '@material-ui/core';

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
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
            <form className={classes.form} noValidate>
              <TextField
                className={classes.textField}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                placeholder='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
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
                Sign In
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
