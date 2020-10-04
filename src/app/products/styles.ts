import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  productsContainer: {
    padding: '48px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '48px 108px',
    },
  },
}));
