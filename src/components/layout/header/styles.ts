import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  logo: {
    flex: 2,
  },
  search: {
    flex: 3,
  },
  filters: {
    flex: 4,
  },
  avatar: {
    flex: 1,
  },
  appBar: {
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
    backgroundColor: '#fff',
  },
}));
