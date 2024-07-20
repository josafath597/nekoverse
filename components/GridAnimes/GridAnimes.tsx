'use client';
import { Flex, Grid, Pagination } from '@mantine/core';
import { useEffect } from 'react';
import { useGetAnimes } from '../../hooks/useGetAnimes';
import { Anime } from '../../interfaces/Anime';
import { CardAnime } from '../CardAnime/CardAnime';

const GridAnimes = () => {
  const { queryData, page, setPage } = useGetAnimes();
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
          <Grid.Col key={anime.mal_id} span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CardAnime anime={anime} />
          </Grid.Col>
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
