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
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: '48px 24px 24px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '48px 108px',
      '& #logo': {
        flex: 1,
        marginRight: '105px',
      },
      '& #searchbar': {
        flex: 3,
        marginRight: '24px',
      },
      '& #filters': {
        flex: 4,
      },
      '& #langSelector': {
        marginRight: '16px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& #logo': {
        order: 1,
      },
      '& #useravatar': {
        order: 2,
      },
      '& #loginButton': {
        order: 2,
      },
      '& #searchbar': {
        order: 3,
        width: '100%',
        margin: '20px 0',
      },
      '& #filters': {
        order: 4,
      },
      '& #langSelector': {
        order: 5,
        marginLeft: 'auto',
      },
    },
    backgroundColor: '#fff',
  },
}));
