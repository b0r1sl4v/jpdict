import { ResponseResult, fetchData } from '@/shared/api/fetchData';
import { paths } from '@/shared/api/generatedTypes';

export type WordsResponse =
  paths['/word/search']['get']['responses']['200']['content']['application/json'];
type GetWords = Promise<ResponseResult<WordsResponse>>;

export async function fetchWords(value: string): GetWords {
  return fetchData(`word/search?value=${value}&pg=1`);
}
