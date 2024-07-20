'use client';
import { Box, Flex, Text, Title } from '@mantine/core';
import { Relation } from '../../interfaces/Anime';

export const Relations = ({ relations }: { relations: Relation[] }) => {
  return (
    <Box>
      <Title order={3}>Relations</Title>
      {relations.map(relation => (
        <Flex key={relation.relation} direction="column">
          <Title order={5} p={0}>
            {relation.relation}
          </Title>
          {relation.entry.map(entry => (
            <Text ml="xs" my={2} key={entry.name}>
              {entry.name}
            </Text>
          ))}
        </Flex>
      ))}
    </Box>
  );
};
