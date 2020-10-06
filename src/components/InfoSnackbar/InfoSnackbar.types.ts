import { SyntheticEvent } from 'react';

export interface InfoSnackbarProps {
  message: string;
  open: boolean;
  autoHideDuration: number;
  onClose: (event: SyntheticEvent<Element, Event>) => void;
  severity: 'error' | 'warning' | 'info' | 'success';
}
