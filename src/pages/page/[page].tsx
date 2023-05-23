import PageNation from "@/components/PageNation";
import Seo from "@/components/Seo";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
}

export default function Home({
  results,
  page,
  total_pages,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const handleClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div>
      <Seo title="Home" />
      <div className="movieinfo_wrap">
        {results?.map((movie: MovieProps) => {
          return (
            <div
              onClick={() => handleClick(movie.id, movie.title)}
              className="movie"
              key={movie.id}
            >
              <img
                className="poster_img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster-image"
              />
              <h4>
                <Link href={`/movies/${movie.title}/${movie.id}`}>
                  {movie.title}
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
      <PageNation page={page} total={total_pages} />
      <style jsx>{`
        .movieinfo_wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          cursor: pointer;
        }
        .poster_img {
          max-width: 100%;
          border-radius: 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
          transition: 0.5s;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
          margin-bottom: 5rem;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  const { results, page, total_pages } = await (
    await fetch(`http://localhost:3000/api/movies/${params.query.page}`)
  ).json();
  return {
    props: { results, page, total_pages },
  };
}
