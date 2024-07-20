'use client';
import { Flex, Title, useMantineTheme } from '@mantine/core';

function gradientToString(gradient: any) {
  return `linear-gradient(${gradient.deg}deg, ${gradient.from}, ${gradient.to})`;
}

export const Gradient = ({ status }: { status: string }) => {
  const theme = useMantineTheme();
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      style={{ borderRadius: 6, backgroundImage: gradientToString(theme.defaultGradient) }}
      py="xs"
    >
      <Title order={5}>{`Status: ${status}`}</Title>
    </Flex>
  );
};
