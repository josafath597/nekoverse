import { Badge, Container, Flex, Title } from '@mantine/core';
import GridAnimes from '../components/GridAnimes/GridAnimes';

export default function HomePage() {
  return (
    <Container size="lg" w="100%">
      <Flex direction="column" pt="xl" gap="md">
        <Flex bg="white" justify="center" align="center" p="lg" style={{ borderRadius: 10 }}>
          <Title order={1} c="dark">
            NekoVerse: Discover the World of Anime Information
          </Title>
        </Flex>
        <Flex justify="space-between">
          <Title order={2}>Most Popular Animes</Title>
          <Badge size="xl">Today</Badge>
        </Flex>
        <GridAnimes />
        {/* <FeaturedAnimeCarousel /> */}
      </Flex>
    </Container>
  );
}
