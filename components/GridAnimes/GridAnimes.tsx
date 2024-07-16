'use client';
import { Flex, Grid, Pagination } from '@mantine/core';
import { useEffect } from 'react';
import { useGetAnimes } from '../../hooks/useGetAnimes';
import { Anime } from '../../interfaces/Anime';
import { CardAnime } from '../CardAnime/CardAnime';

const GridAnimes = () => {
  const { queryData, page, limit, setPage, setLimit } = useGetAnimes();
  const animes: Anime[] = queryData?.data?.data || [];
  useEffect(() => {
    console.log(queryData?.data?.data);
  }, [queryData.data]);
  return (
    <Flex direction="column" gap="md" pb="xl">
      <Flex justify="flex-end">
        <Pagination
          value={page}
          onChange={setPage}
          total={queryData.data?.pagination.items.total || 0}
          radius="xs"
          siblings={3}
        />
      </Flex>
      <Grid>
        {animes.map(anime => (
          <CardAnime anime={anime} key={anime.mal_id} />
        ))}
      </Grid>
      <Flex justify="flex-end">
        <Pagination
          value={page}
          onChange={setPage}
          total={queryData.data?.pagination.items.total || 0}
          radius="xs"
          siblings={3}
        />
      </Flex>
    </Flex>
  );
};

export default GridAnimes;
