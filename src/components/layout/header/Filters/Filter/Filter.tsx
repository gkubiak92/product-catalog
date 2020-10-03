import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import React from 'react';
import { FilterProps } from './Filter.types';
import { useStyles } from './styles';

const Filter = ({ name, checked, onChecked }: FilterProps) => {
  const classes = useStyles();

  return (
    <FormGroup row>
      <FormControlLabel
        className={classes.text}
        control={<Checkbox checked={checked} onChange={onChecked} name={name} />}
        label='Secondary'
      />
    </FormGroup>
  );
};

export default Filter;
