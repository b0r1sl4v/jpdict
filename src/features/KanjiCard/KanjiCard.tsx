'use client';

import { FC } from 'react';
import { Card } from '@/shared/ui/Card';
import { Kanji } from './model';

import styles from './KanjiCard.module.css';
import { Label, Text } from '@gravity-ui/uikit';

type KanjiCardProps = Kanji;

export const KanjiCard: FC<KanjiCardProps> = (props) => {
  const {
    kanji,
    definition,
    radical,
    radical_name,
    markers,
    kunyomi,
    onyomi,
    parts,
  } = props;
  return (
    <Card>
      <div className={styles.main}>
        <div className={styles.name}>
          <Text variant="display-4">{kanji}</Text>
          <ul className={styles.markers}>
            {markers.map((marker) => (
              <li key={marker}>
                <Label>{marker}</Label>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.secondary}>
          <div className={styles.kunyomi}>
            <Text variant="subheader-3">Kunyomi: </Text>
            <Text variant="body-2">{kunyomi}</Text>
          </div>
          <div className={styles.onyomi}>
            <Text variant="subheader-3">Onyomi: </Text>
            <Text variant="body-2">{onyomi}</Text>
          </div>
          <div className={styles.radicalBlock}>
            <Text variant="subheader-3">Radical</Text>
            <div className={styles.radical}>
              <Text variant="display-2">{radical}</Text>
              <Text variant="body-2">{radical_name}</Text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.definitionBlock}>
        <Text variant="subheader-3">Definition: </Text>
        <Text variant="body-3">{definition}</Text>
      </div>
      {/* <div className={styles.relatedKanji}> */}
      {parts && parts.length > 0 && (
        <div className={styles.partsBlock}>
          <Text variant="subheader-3">Parts</Text>
          <div className={styles.parts}>
            {parts.map((part) => (
              <div key={part.piece} className={styles.part}>
                <Text variant="display-2">{part.piece}</Text>
                <Text variant="body-2">{part.definition}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* </div> */}
    </Card>
  );
};
