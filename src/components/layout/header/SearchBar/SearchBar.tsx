import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <OutlinedInput
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
  );
};

export default SearchBar;
