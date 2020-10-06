import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    width: '90%',
    height: 400,
    marginBottom: 32,
  },
  image: {
    height: 170,
  },
  productCardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  productCardActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // reset default muicard action left margin
    '&.MuiCardActions-spacing > :not(:first-child)': {
      margin: 0,
    },
    padding: '0 16px 24px 16px',
  },
  rating: {
    marginBottom: 18,
    '& span.MuiRating-icon': {
      marginRight: 10,
    },
  },
}));
