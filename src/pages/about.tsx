import Seo from "@/components/Seo";
import { BsGithub } from "react-icons/bs";

export default function About() {
  return (
    <div className="container">
      <Seo title="About" />
      <div className="wrap">
        <h2>About</h2>
        <div>
          {`영화 뭐 볼까? 는 'TMDB' OPEN API를 통해 인기영화 리스트를 보여주는 웹
        애플리케이션입니다.`}
        </div>
        <div className="dev-info">
          <BsGithub size={30} /> :
          <a href="https://github.com/kohjp/movie-list">
            https://github.com/kohjp/movie-list
          </a>
        </div>
      </div>
      <style jsx>{`
        .container {
          position: absolute;
          top: 0px;
          height: 100%;
          width: 520px;
          max-width: 100%;
          background-color: #2b2b2b;
          color: white;
          padding: 20px;
          padding-top: 170px;
        }
        .wrap {
          display: flex;
          gap: 30px;
          flex-direction: column;
          position: relative;
          height: 100%;
        }
        .dev-info {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 30px;
          gap: 10px;
        }
      `}</style>
    </div>
  );
}
