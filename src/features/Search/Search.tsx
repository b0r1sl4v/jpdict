import { Dispatch, FC, SetStateAction, useState } from 'react';

import { SearchView } from './ui/SearchView';
import { fetchWordsFx } from '../WordCard';

type SearchProps = {
  setWordsLoading: Dispatch<SetStateAction<boolean>>;
};

export const Search: FC<SearchProps> = (props) => {
  const { setWordsLoading } = props;
  const [value, setValue] = useState('');

  const onButtonClick = () => {
    setWordsLoading(true);
    fetchWordsFx(value)
      .finally(() => {
        setWordsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setWordsLoading(false);
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
