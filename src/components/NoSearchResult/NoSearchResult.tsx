import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import NoSearchResultIcon from 'assets/svg/no-search-result.svg';

const NoSearchResult = () => (
  <Grid container justify='center' alignItems='center'>
    <Grid item xs={12} lg={6} component={Paper} elevation={0}>
      <Grid container direction='column' justify='center' alignItems='center'>
        <img src={NoSearchResultIcon} alt='no search result' />
        <Typography gutterBottom variant='h5' component='h2'>
          Ooops... It's empty here
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          There are no products on the list
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default NoSearchResult;
