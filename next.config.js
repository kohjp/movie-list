/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/old-blog:path*",
        destination: "/new-blog:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return[
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
      },
    ];
  },
}

module.exports = nextConfig
