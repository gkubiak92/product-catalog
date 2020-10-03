import { ChangeEvent } from 'react';

export interface FilterProps {
  name: string;
  checked: boolean;
  onChecked: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
