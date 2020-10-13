import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLangChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => i18n.changeLanguage(event.target.value as string);

  return (
    <Select variant='outlined' id='lang' value={i18n.language} onChange={handleLangChange}>
      {Object.keys(i18n.services.resourceStore.data).map((lang) => (
        <MenuItem value={lang} key={lang}>
          {lang}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
