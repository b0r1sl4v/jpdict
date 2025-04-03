import { Button, TextInput } from '@gravity-ui/uikit';
import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react';

import styles from './SearchView.module.css';

type SearchViewProps = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  onButtonClick: MouseEventHandler;
};

export const SearchView: FC<SearchViewProps> = (props) => {
  const { inputValue, setInputValue, onButtonClick } = props;

  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <TextInput
          type="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <Button view="action" onClick={onButtonClick}>
        Search
      </Button>
    </div>
  );
};
