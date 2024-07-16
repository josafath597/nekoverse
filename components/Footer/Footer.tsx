import { Anchor, Flex, Text } from '@mantine/core';

const Footer = () => (
  <Flex direction="column" align="center" gap={8} bg="nekoColors.9" py={8}>
    <Text size="sm">Desarrollado por Fabián Josafat Cárdenas Aldana</Text>
    <Text size="sm">Datos proporcionados por la API de Jikan</Text>
    <Anchor size="sm" href="https://github.com/tu-usuario" target="_blank">
      Encuentra este proyecto en GitHub
    </Anchor>
    <Text size="sm">© 2024 Fabián Josafat Cárdenas Aldana</Text>
  </Flex>
);

export default Footer;
