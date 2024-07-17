import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { Anime, ResponseApiAnime } from '../../../interfaces/Anime';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_ANIMES}/top/anime?page=1&limit=20&order_by=popularity`);
  const data: ResponseApiAnime = await res.json();

  const paths = data.data.map(anime => ({
    params: { slug: anime.mal_id.toString() },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_ANIMES}/anime/${params?.slug}/full`);
  const anime = await res.json();

  if (!anime) {
    return { notFound: true };
  }

  return {
    props: {
      anime: anime.data,
    },
    revalidate: 86400, // Utiliza ISR para revalidar la página regularmente
  };
};

interface Props {
  anime: Anime;
}

const AnimePage = ({ anime }: Props) => {
  return (
    <div>
      <h1>{anime.title}</h1>
      <Image src={anime.images.jpg.image_url} alt={`Imagen de ${anime.title}`} width={300} height={300} />
      {/* Otros detalles aquí */}
    </div>
  );
};

export default AnimePage;
