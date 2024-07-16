import { Carousel } from '@mantine/carousel';
import { Flex, Image } from '@mantine/core';
import NextImage from 'next/image';
import { Anime } from '../../interfaces/Anime';
interface Props {
  anime: Anime;
}

export const CarouselItem = ({ anime }: Props) => {
  console.log(anime.trailer.embed_url);
  return (
    <Carousel.Slide>
      <Flex>
        <Image
          component={NextImage}
          src={anime.images?.jpg?.large_image_url || ''}
          width={100}
          height={300}
          alt={anime.title}
        />
        {/* <Center>
          <Text>{anime.title}</Text>
        </Center> */}
      </Flex>
    </Carousel.Slide>
  );
};
