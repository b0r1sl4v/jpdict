import useSWR from 'swr';
import { paths } from './generatedTypes';

type ResponseData = paths['/word/search']['get']['responses']['200']['content'];

export type ResponseResult = {
  data?: ResponseData;
  error: Error;
  isLoading: boolean;
};

type UseFetchData = (endpoint: string) => ResponseResult;
type Fetcher = (url: string) => Promise<ResponseData>;

const fetcher: Fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  }).then((response) => response.json());

export const useFetchData: UseFetchData = (endpoint: string) => {
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
