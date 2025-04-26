import { components } from '@/shared/api/generatedTypes';
import { createEffect, createStore } from 'effector';
import { fetchWords, WordsResponse } from '../api/fetchWords';

export type Word = Pick<
  components['schemas']['Word'],
  'kanji_full' | 'pitch' | 'hiragana_full' | 'markers' | 'def'
>;

export const $words = createStore<Word[]>([]);

export const fetchWordsFx = createEffect<
  (value: string) => Promise<WordsResponse | undefined>
>(async (value) => {
  const { data, error } = await fetchWords(value);
  if (error || !data) {
    console.log(error);
    return;
  }
  if (!data?.words) {
    console.log('no result');
    return;
  }
  return data;
});

$words.on(fetchWordsFx.doneData, (_, data) => {
  return data?.words;
});
