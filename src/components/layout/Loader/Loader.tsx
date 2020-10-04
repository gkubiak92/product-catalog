import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

const Loader = () => (
  <Grid container justify='center' alignItems='center'>
    <CircularProgress />
  </Grid>
);

export default Loader;
