import { ChangeEvent } from 'react';

export interface FilterProps {
  name: string;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
