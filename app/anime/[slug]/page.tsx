import { Box } from '@mantine/core';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageAnime from '../../../components/PageAnime/PageAnime';
import { Anime, ResponseApiAnime } from '../../../interfaces/Anime';

interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    id: string;
  };
}

const getAnime = async (id: string): Promise<Anime> => {
  try {
    const anime = await fetch(`${process.env.NEXT_PUBLIC_URL_ANIMES}/anime/${id}/full`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then(resp => resp.json());
    return anime.data;
  } catch (error) {
    console.log(error);
    notFound();
  }
};

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_ANIMES}/top/anime?page=1&limit=20&order_by=popularity`);
  const data: ResponseApiAnime = await res.json();

  const paths = data.data.map(anime => ({
    name: anime.mal_id,
  }));
  return paths.map(anime => ({ name: anime.name }));
};

export const generateMetadata = async ({ searchParams }: Props): Promise<Metadata> => {
  try {
    const anime = await getAnime(searchParams.id);
    return {
      title: anime.title,
      description: anime.synopsis,
    };
  } catch (error) {
    return {
      title: 'Anime',
      description: 'once upon a time there was a girl',
    };
  }
};

const AnimePage = async ({ params, searchParams }: Props) => {
  const anime = await getAnime(searchParams.id);
  return (
    <Box component="main">
      <PageAnime anime={anime} />
    </Box>
  );
};

export default AnimePage;
