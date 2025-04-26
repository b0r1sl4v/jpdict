import { Card, Text } from '@gravity-ui/uikit';
import { FC } from 'react';

import styles from './WordCard.module.css';
import { Word } from './model';

type WordCardViewProps = Word;

export const WordCard: FC<WordCardViewProps> = (props) => {
  const { kanji_full, hiragana_full, def, markers } = props;
  return (
    <Card className={styles.card}>
      <div>
        <Text>{hiragana_full}</Text>
        <Text variant="subheader-3">{kanji_full}</Text>
        <Text>{markers}</Text>
      </div>
      <div className={styles.definition}>
        <Text>{def}</Text>
      </div>
    </Card>
  );
};
