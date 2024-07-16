import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ResponseApiAnime } from '../interfaces/Anime';

const getAnimes = async (page: number, limit: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_ANIMES}/top/anime?page=${page}&limit=${limit}&order_by=popularity`,
  );
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  const data = await response.json();
  return data;
};

export const useGetAnimes = (): {
  queryData: UseQueryResult<ResponseApiAnime, Error>;
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
} => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const queryData = useQuery({
    queryKey: ['animes', { page, limit }],
    queryFn: () => getAnimes(page, limit),
    refetchOnWindowFocus: false,
  });
  return { queryData, page, limit, setPage, setLimit };
};
