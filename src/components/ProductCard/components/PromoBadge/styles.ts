import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: 16,
    width: 75,
    height: 24,
    zIndex: 100,
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
}));
