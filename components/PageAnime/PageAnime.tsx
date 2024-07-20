import { Badge, Box, Card, Container, Flex, Text, Title } from '@mantine/core';
import NextImage from 'next/image';
import Link from 'next/link';
import { Anime } from '../../interfaces/Anime';
import { Gradient } from '../Gradient/Gradient';
import { Relations } from '../Relations/Relations';
import styles from './PageAnime.module.css';

const PageAnime = ({ anime }: { anime: Anime }) => {
  return (
    <Box component="section">
      <Flex bg="nekoColors.9" className={styles.animeHeader}>
        <Container size="lg" w="100%">
          <Box className={styles.animeContainer}>
            <Box className={styles.animeContainer__Header}>
              <Flex gap="sm" direction="column">
                <Box className={styles.animeHeader__container}>
                  <Title order={1} c="text.9" className={styles.titleAnime}>
                    {anime.title}
                  </Title>
                  <Badge color="nekoColors.1" variant="filled" size="md">
                    <Text fw="600">{anime.type}</Text>
                  </Badge>
                </Box>
                <Box className={styles.animeHeader__containerSubtitles}>
                  <Text size="xs">{anime.title_japanese}</Text>
                  <Text size="xs">{anime.title_english}</Text>
                </Box>
              </Flex>
            </Box>
            <Flex direction="column" align="center">
              <Title order={5} c="text.9">
                Rating
              </Title>
              <Card p={0} h="5vh" radius="xs">
                <Flex bg="nekoColors.1" h="5vh" p="xs" justify="center" align="center">
                  <Text size="25" fw={900}>
                    {anime.score}
                  </Text>
                </Flex>
              </Card>
            </Flex>
          </Box>
        </Container>
      </Flex>
      <Container size="lg" className={styles.animeContainerInformation}>
        <Box className={styles.animeImageBox}>
          <NextImage
            // component={NextImage}
            src={anime.images.jpg.image_url}
            alt={anime.title}
            width={300}
            height={400}
            style={{
              border: '3px solid white',
              borderRadius: '5px',
              objectFit: 'cover',
            }}
          />
          <Gradient status={anime.status} />
        </Box>
        <Flex w="100%" gap="xs" direction="column" justify="center" align="center" pt="xs" pb="xl">
          <Card shadow="sm" w="100%">
            <Flex direction="column" gap={10}>
              <Title order={3}>Synopsis</Title>
              <Flex gap="md">
                {anime.genres.map(genre => (
                  <Badge key={genre.mal_id}>{genre.name}</Badge>
                ))}
              </Flex>
              <Text>{anime.synopsis}</Text>
            </Flex>
          </Card>
          <Card shadow="sm" w="100%">
            <Flex direction="column" gap={10} px="md">
              <Flex justify="space-between">
                <Text>{`Duration per episode: ${anime.duration}`}</Text>
                <Text>{`Rating: ${anime.rating}`}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>{`Source: ${anime.source}`}</Text>
                <Text>{`Aired: ${anime.aired.string}`}</Text>
              </Flex>
            </Flex>
          </Card>
          <Card shadow="sm" w="100%">
            <Flex direction="column" gap={10} px="md">
              <Title order={3}>Trailer</Title>
              <iframe
                width="100%"
                height="315"
                src={
                  `https://www.youtube.com/embed/${anime.trailer.youtube_id}?enablejsapi=1&wmode=opaque&autoplay=0",` ||
                  undefined
                }
                title={anime.title}
              />
            </Flex>
          </Card>
          <Card shadow="sm" w="100%">
            <Flex direction="column" gap={10} px="md">
              <Title order={3}>Openings & Endings</Title>
              {anime.theme.openings.length > 0 ? (
                <Flex direction="column" gap={10}>
                  <Text>Openings</Text>
                  {anime.theme.openings.map(opening => (
                    <Text key={opening}>{opening}</Text>
                  ))}
                </Flex>
              ) : null}
              {anime.theme.endings.length > 0 ? (
                <Flex direction="column" gap={10}>
                  <Text>Endings</Text>
                  {anime.theme.endings.map(ending => (
                    <Text key={ending}>{ending}</Text>
                  ))}
                </Flex>
              ) : null}
            </Flex>
          </Card>
          <Card shadow="sm" w="100%">
            <Flex direction="column" gap={10} px="md">
              <Relations relations={anime.relations} />
            </Flex>
          </Card>
          <Card shadow="sm" w="100%">
            <Flex direction="column" gap={10} px="md">
              <Title order={3}>External Links</Title>
              {anime.external.map(external => (
                <Text component={Link} target="_blank" href={external.url} key={external.url}>
                  {external.url}
                </Text>
              ))}
            </Flex>
          </Card>
          <Card shadow="sm" w="100%">
            <Flex direction="column" gap={10}>
              <Title order={3}>Streaming</Title>
              {anime.streaming.map(streaming => (
                <Text component={Link} target="_blank" href={streaming.url} key={streaming.name}>
                  {streaming.url}
                </Text>
              ))}
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageAnime;
