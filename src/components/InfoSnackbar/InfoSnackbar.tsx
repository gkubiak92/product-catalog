import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { InfoSnackbarProps } from './InfoSnackbar.types';

const InfoSnackbar = ({
  message,
  open,
  autoHideDuration,
  onClose,
  severity,
}: InfoSnackbarProps) => (
  <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
    <Alert onClose={onClose} severity={severity} elevation={8}>
      {message}
    </Alert>
  </Snackbar>
);

export default InfoSnackbar;
