import { makeStyles } from '@material-ui/core/styles';
import loginImg from 'assets/img/login_img.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${loginImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  loginContainer: {
    backgroundColor: '#fff',
    padding: theme.spacing(8, 4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 16),
    },
    height: '100%',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    '&label': {
      fontWeight: 600,
    },
  },
  textField: {
    marginTop: 8,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 12,
  },
  forgotPasswordLink: {
    color: theme.palette.text.secondary,
  },
}));
