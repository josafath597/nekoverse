import { BackgroundImage, Badge, Box, Card, Flex, Text } from '@mantine/core';
import Link from 'next/link';
import { Anime } from '../../interfaces/Anime';
import styles from './CardAnime.module.css';
interface Props {
  anime: Anime;
}

export const CardAnime = ({ anime }: Props) => (
  <Flex>
    <Card
      component={Link}
      href={{
        pathname: `/anime/${anime.title.toLowerCase().trim().replace(/\s+/g, '_')}`,
        query: { id: anime.mal_id },
      }}
      p={0}
      w="100%"
    >
      <>
        <BackgroundImage src={anime.images.jpg.image_url} className={styles.cardAnime} />
        <Box style={{ width: '100%', position: 'absolute', bottom: '0px', left: '0px' }}>
          <Badge>Episodes: {anime.episodes}</Badge>
          <Flex style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} justify="center" p={3}>
            <Text c="text.0" size="xs" fw={500}>
              {anime.title}
            </Text>
          </Flex>
        </Box>
      </>
    </Card>
  </Flex>
);
