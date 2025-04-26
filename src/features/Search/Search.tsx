import { FC, useState } from 'react';

import { SearchView } from './ui/SearchView';
import { fetchWordsFx } from '../WordCard';

export const Search: FC = () => {
  const [value, setValue] = useState('');

  const onButtonClick = () => {
    fetchWordsFx(value);
  };

  return (
    <SearchView
      inputValue={value}
      setInputValue={setValue}
      onButtonClick={onButtonClick}
    />
  );
};
