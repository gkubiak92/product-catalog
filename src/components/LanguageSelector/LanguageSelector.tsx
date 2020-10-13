import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

const LanguageSelector = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const handleLangChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => i18n.changeLanguage(event.target.value as string);

  return (
    <div id='langSelector'>
      <Select
        className={classes.langSelector}
        variant='outlined'
        value={i18n.language}
        onChange={handleLangChange}
      >
        {Object.keys(i18n.services.resourceStore.data).map((lang) => (
          <MenuItem value={lang} key={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSelector;
