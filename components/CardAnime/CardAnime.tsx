import { Badge, Card, Flex, Grid, Text } from '@mantine/core';
import Link from 'next/link';
import { Anime } from '../../interfaces/Anime';

interface Props {
  anime: Anime;
}

export const CardAnime = ({ anime }: Props) => (
  <Grid.Col key={anime.mal_id} span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 3 }}>
    <Card
      component={Link}
      href={`/anime/${anime.mal_id}`}
      style={{
        backgroundImage: `url(${anime.images.jpg.image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '17vh',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 5,
        padding: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${anime.images.jpg.image_url})`;
        e.currentTarget.style.backgroundSize = '110%';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundImage = `url(${anime.images.jpg.image_url})`;
        e.currentTarget.style.backgroundSize = 'cover';
      }}
    >
      <Badge>Episodes: {anime.episodes}</Badge>
      <Flex style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} justify="center" p={3}>
        <Text c="text.0" size="xs" fw={500}>
          {anime.title}
        </Text>
      </Flex>
    </Card>
  </Grid.Col>
);
