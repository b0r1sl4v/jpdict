'use client';

import { Search } from '@/features/Search';
import { $words, WordCard } from '@/features/WordCard';
import { useList } from 'effector-react';

export default function Home() {
  $words.watch((words) => console.log(words));

  const words = useList($words, (word, key) => (
    <WordCard key={key} {...word} />
  ));

  return (
    <div>
      <Search />
      {words ?? null}
    </div>
  );
}
