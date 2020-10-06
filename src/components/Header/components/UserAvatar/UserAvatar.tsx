import React from 'react';
import { Avatar, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authLogout } from 'redux/auth/auth.slice';
import { useStyles } from './styles';

const UserAvatar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id='useravatar'>
      <Avatar
        className={classes.avatar}
        src='https://picsum.photos/100/100'
        onClick={handleClick}
      />
      <Menu
        elevation={8}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemText className={classes.menuItem} onClick={() => dispatch(authLogout())}>
            Logout
          </ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserAvatar;
