import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "111dd6564b7437a6e15dcd273bc377ed";

export default function Home() {
  const [movies, setMovies] =
    useState<{ id: number; original_title: string }[]>();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
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
            <h4>{movie.original_title}</h4>
          </div>
        );
      })}
    </div>
  );
}
