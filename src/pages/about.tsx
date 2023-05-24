import Seo from "@/components/Seo";

export default function About() {
  return (
    <div className="container">
      <Seo title="About" />
      <div className="wrap">
        <div>
          {`영화 뭐 보지? 는 'TMDB' OPEN API를 통해 인기영화 리스트를 보여주는 웹
        애플리케이션입니다.`}
        </div>
        <div>
          <div>
            <span>github : </span>
            <a href="https://github.com/kohjp/movie-list">
              https://github.com/kohjp/movie-list
            </a>
          </div>
          <div>
            <span>TMDB : </span>
            <a href="https://www.themoviedb.org/">
              https://www.themoviedb.org/
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 100%;
        }
        .wrap {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
