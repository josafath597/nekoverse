import { ActionIcon, AppShell, Container, Flex, Image } from '@mantine/core';
import { IconSearch, IconUser } from '@tabler/icons-react';
import NextImage from 'next/image';
import nameNeko from './../../assets/nameNeko.png';
import nekoverse from './../../assets/nekoverse1.png';

export const Header = () => {
  return (
    <AppShell.Header bg="nekoColors.1" style={{ display: 'flex', alignItems: 'center' }}>
      <Container size="lg" w="100%">
        <Flex justify="space-between">
          <Flex align="center" gap={5}>
            <Image component={NextImage} width={85} src={nekoverse} alt="nekoverse" />
            <Image component={NextImage} width={250} src={nameNeko} alt="nekoverse" />
          </Flex>
          <Flex gap={10}>
            <ActionIcon variant="transparent" size="xl">
              <IconSearch color="white" />
            </ActionIcon>
            <ActionIcon variant="transparent" size="xl">
              <IconUser color="white" />
            </ActionIcon>
          </Flex>
        </Flex>
      </Container>
    </AppShell.Header>
  );
};
