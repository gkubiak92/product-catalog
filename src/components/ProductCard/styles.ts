import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  productCard: {
    position: 'relative',
    width: '90%',
    height: 400,
    marginBottom: 32,
  },
  image: {
    height: 200,
  },
  productCardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 140,
  },
  rating: {
    marginTop: 'auto',
  },
}));
