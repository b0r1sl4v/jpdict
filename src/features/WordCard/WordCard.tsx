import { Label, Text } from '@gravity-ui/uikit';
import { FC } from 'react';

import styles from './WordCard.module.css';
import { Word } from './model';
import { Card } from '@/shared/ui/Card';

type WordCardViewProps = Word;

export const WordCard: FC<WordCardViewProps> = (props) => {
  const { kanji_full, hiragana_full, def, markers } = props;
  return (
    <Card className={styles.card}>
      <div className={styles.main_info}>
        <div className={styles.title}>
          <Text variant={kanji_full ? 'subheader-3' : 'header-2'}>
            {hiragana_full}
          </Text>
          {kanji_full && <Text variant="header-2">{kanji_full}</Text>}
        </div>
        <ul className={styles.markers}>
          {markers?.map((marker) => (
            <li key={marker}>
              <Label>{marker}</Label>
            </li>
          ))}
        </ul>
      </div>
      <ol className={styles.definition}>
        {def?.map((definition) => (
          <li key={definition}>
            <Text variant="body-3">{definition}</Text>
          </li>
        ))}
      </ol>
    </Card>
  );
};
