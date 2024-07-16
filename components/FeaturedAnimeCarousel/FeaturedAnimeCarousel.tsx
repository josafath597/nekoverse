'use client';

import { Flex, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useGetAnimes } from '../../hooks/useGetAnimes';

const FeaturedAnimeCarousel = () => {
  const { queryData, page, limit, setPage, setLimit } = useGetAnimes();
  useEffect(() => {
    console.log(queryData.data);
  }, [queryData.data]);

  return (
    <Flex>
      {/* <Carousel
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 0, sm: '' }}
        withIndicators
        w="100%"
        h={500}
      >
        {(queryData.data?.data || []).map(anime => (
          <CarouselItem key={anime.mal_id} anime={anime} />
        ))}
      </Carousel> */}
      <Flex>
        <Title order={2}>Featured Anime</Title>
      </Flex>
    </Flex>
  );
};

export default FeaturedAnimeCarousel;
