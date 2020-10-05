import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const PromoBadge = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justify='center' alignItems='center'>
        <Typography className={classes.text}>Promo</Typography>
      </Grid>
    </Box>
  );
};

export default PromoBadge;
