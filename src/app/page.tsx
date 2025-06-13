'use client';

import { Search } from '@/features/Search';
import { $words, WordCard } from '@/features/WordCard';
import { CardList } from '@/shared/ui/CardList';
import { useList } from 'effector-react';

import style from './page.module.css';

export default function Home() {
  $words.watch((words) => console.log(words));

  const words = useList($words, (word, key) => (
    <li>
      <WordCard key={key} {...word} />
    </li>
  ));

  return (
    <div className={style.page}>
      <Search />
      <CardList>{words ?? null}</CardList>
    </div>
  );
}
