/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/page/1",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return[
      {
        source: "/api/movies/:page",
        destination: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=:page&sort_by=popularity.desc&api_key=${API_KEY}`
      },
      {
        source: "/api/movies/playing",
        destination: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${'2023-05-23'}&release_date.lte=${'2023-05-23'}&api_key=${API_KEY}`
      },
      {
        source: "/api/movies/top",
        destination: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
      },
      {
        source: "/api/movies/upcoming",
        destination: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?language=ko-KR&api_key=${API_KEY}`
      }
    ];
  },
}

module.exports = nextConfig
