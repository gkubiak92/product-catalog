import React from 'react';
import { Avatar, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authLogout } from 'redux/auth/authSlice';

const UserAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar src='https://picsum.photos/100/100' onClick={handleClick} />
      <Menu elevation={0} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <ListItemText onClick={() => dispatch(authLogout())}>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserAvatar;
