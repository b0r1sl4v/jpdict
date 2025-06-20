import { fetchData } from '@/shared/api/fetchData';
import { paths } from '@/shared/api/generatedTypes';

type KanjiSearchResponse =
  paths['/kanji/search']['get']['responses']['200']['content']['application/json'];
export type KanjiResponse =
  paths['/kanji/{kanji}']['get']['responses']['200']['content']['application/json'][];
type GetKanji = Promise<KanjiResponse>;

export async function fetchKanji(value: string): GetKanji {
  const kanjisResponse: KanjiSearchResponse = await fetchData(
    `kanji/search?value=${value}`,
  );
  const kanjis = kanjisResponse.kanjis;
  if (!kanjis?.length) {
    return [];
  }
  const requests = kanjis.map((kanji) =>
    fetchData<KanjiResponse[number]>(`kanji/${kanji.kanji}`),
  );
  const kanjiDetails: KanjiResponse = await Promise.all(requests);
  return kanjiDetails;
}
