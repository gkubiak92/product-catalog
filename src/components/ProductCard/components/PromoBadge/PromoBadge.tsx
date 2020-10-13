import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

const PromoBadge = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box className={classes.container}>
      <Grid container justify='center' alignItems='center'>
        <Typography className={classes.text}>{t('promo')}</Typography>
      </Grid>
    </Box>
  );
};

export default PromoBadge;
