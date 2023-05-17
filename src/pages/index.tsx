import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] =
    useState<{ id: number; title: string; poster_path: string }[]>();

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies")).json();
      setMovies(results);
      console.log(movies);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      <div className="movieinfo_wrap">
        {movies?.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <img
                className="poster_img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster-image"
              />
              <h4>{movie.title}</h4>
            </div>
          );
        })}
      </div>
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
