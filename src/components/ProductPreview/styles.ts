import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  dialogContainer: {},
  dialogBox: {
    background: 'transparent',
  },
  titleContainer: {
    position: 'relative',
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 0,
  },
  image: {
    width: '100%',
  },
  dialogContent: {
    padding: 24,
    [theme.breakpoints.up('md')]: {
      padding: '24px 32px 56px 32px',
    },
  },
  productTitle: {
    fontSize: 24,
  },
  productDesc: {
    fontSize: 18,
  },
}));
