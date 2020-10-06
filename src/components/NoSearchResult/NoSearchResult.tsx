import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import NoSearchResultIcon from 'assets/svg/no-search-result.svg';
import { useStyles } from './styles';

const NoSearchResult = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item className={classes.paper} xs={12} lg={6} component={Paper} elevation={0}>
        <Grid
          container
          className={classes.paperContainer}
          direction='column'
          justify='center'
          alignItems='center'
        >
          <img src={NoSearchResultIcon} alt='no search result' />
          <Typography gutterBottom variant='h5' component='h2' align='center'>
            Ooops... It's empty here
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p' align='center'>
            There are no products on the list
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NoSearchResult;
