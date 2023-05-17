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
      <h1>Home</h1>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => {
        return (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster-image"
            />
            <h4>{movie.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
