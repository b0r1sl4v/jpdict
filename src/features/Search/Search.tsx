import { FC, useState } from 'react';

import { SearchView } from './ui/SearchView';
import { fetchWordsFx } from '../WordCard';
import { fetchKanjiFx } from '../KanjiCard/model';

export const Search: FC = (props) => {
  const [value, setValue] = useState('');

  const onButtonClick = () => {
    Promise.all([fetchWordsFx(value), fetchKanjiFx(value)]).catch((error) => {
      console.log(error);
    });
  };

  return (
    <SearchView
      inputValue={value}
      setInputValue={setValue}
      onButtonClick={onButtonClick}
    />
  );
};
