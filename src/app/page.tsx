'use client';

import { Search } from '@/features/Search';
import { $words, WordCard } from '@/features/WordCard';
import { CardList } from '@/shared/ui/CardList';
import { useList } from 'effector-react';

import style from './page.module.css';
import { useState } from 'react';

export default function Home() {
  $words.watch((words) => console.log(words));
  const [wordsLoading, setWordsLoading] = useState(false);

  const words = useList($words, (word, key) => (
    <li>
      <WordCard key={key} {...word} />
    </li>
  ));

  return (
    <div className={style.page}>
      <Search setWordsLoading={setWordsLoading} />
      {$words && (
        <CardList loading={wordsLoading} listHeight={800} listWidth={1000}>
          {words}
        </CardList>
      )}
    </div>
  );
}
