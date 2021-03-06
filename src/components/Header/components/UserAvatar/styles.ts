import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  menuItem: {
    '& span': {
      fontSize: 14,
    },
  },
}));
