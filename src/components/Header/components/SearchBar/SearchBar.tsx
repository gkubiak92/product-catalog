import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import React, { FormEvent, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchParam } from 'redux/products/products.slice';
import { RootState } from 'redux/rootReducer';
import { getSearchText } from 'redux/products/products.selectors';
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
  const classes = useStyles();
  const initialSearchText = useSelector<RootState, string>(getSearchText);
  const [searchText, setSearchText] = useState(initialSearchText);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setSearchParam(searchText));
  };

  return (
    <div id='searchbar'>
      <form onSubmit={handleSearchSubmit}>
        <OutlinedInput
          className={classes.searchBar}
          fullWidth
          placeholder={t('search')}
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
      </form>
    </div>
  );
};

export default SearchBar;
