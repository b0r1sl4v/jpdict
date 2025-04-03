import { ResponseResult, useFetchData } from '@/shared/api/useFetchData';

type UseGetWords = (value: string) => ResponseResult;

export const useGetWords: UseGetWords = (value) => {
  return useFetchData(`word/search?value=${value}&pg=1`);
};
