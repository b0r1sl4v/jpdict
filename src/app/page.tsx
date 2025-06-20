'use client';

import { Search } from '@/features/Search';
import { $words, fetchWordsFx, WordCard } from '@/features/WordCard';
import { CardList } from '@/shared/ui/CardList';
import { useList, useUnit } from 'effector-react';

import styles from './page.module.css';
import { $kanji, fetchKanjiFx } from '@/features/KanjiCard/model';
import { KanjiCard } from '@/features/KanjiCard/KanjiCard';

export default function Home() {
  const wordsPending = useUnit(fetchWordsFx.pending);
  const kanjiPending = useUnit(fetchKanjiFx.pending);

  const words = useList($words, (word, key) => (
    <li>
      <WordCard key={key} {...word} />
    </li>
  ));

  const kanji = useList($kanji, (kanji, key) => (
    <li>
      <KanjiCard key={key} {...kanji} />
    </li>
  ));

  return (
    <div className={styles.page}>
      <Search />
      <div className={styles.lists}>
        <CardList loading={wordsPending} listHeight={800} listWidth={1000}>
          {words}
        </CardList>
        <CardList loading={kanjiPending} listHeight={800} listWidth={600}>
          {kanji}
        </CardList>
      </div>
    </div>
  );
}
