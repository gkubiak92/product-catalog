import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';

const SearchBar = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div id='searchbar'>
      <OutlinedInput
        className={classes.searchBar}
        fullWidth
        placeholder='Search'
        value={searchText}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton aria-label='search input' onClick={() => {}}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchBar;
