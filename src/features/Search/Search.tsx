import { FC, useState } from 'react';

import { SearchView } from './ui/SearchView';
import { useGetWords } from './api/useGetWords';

export const Search: FC = () => {
  const [value, setValue] = useState('');

  const onButtonClick = () => {
    const { data, error, isLoading } = useGetWords(value)
  }

  return <SearchView inputValue={value} setInputValue={setValue} onButtonClick={} />;
};
