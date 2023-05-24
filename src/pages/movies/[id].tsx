import Seo from "@/components/Seo";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useRouter } from "next/router";

interface MovieInfo {
  id: number;
  title: string;
  release_date: string;
}

export default function MovieDetail({
  result,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  // const [title, id] = params || [];
  return (
    <div>
      <Seo title={result.title} />
      <h2>{result.title}</h2>
      <div className="poster-wrap">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
          alt="poster-image"
        />
      </div>
      <div className="info-wrap">
        <div className="info-keyword">제목</div>
        <div className="info-content">{result.title}</div>
        <div className="info-keyword">장르</div>
        <div className="info-content">
          {result.genres.map((el: { id: number; name: string }) => (
            <span className="genres" key={el.id}>
              {el.name}
            </span>
          ))}
        </div>
        <div className="info-keyword">제작사</div>
        <div className="info-content">
          {result.production_companies.map(
            (el: { id: number; name: string; logo_path: string }) => (
              <div className="production-companies" key={el.id}>
                {el.logo_path ? (
                  <img
                    className="production-companies-image"
                    src={`https://image.tmdb.org/t/p/w500/${el.logo_path}`}
                    alt="production-companies-image"
                  />
                ) : (
                  ""
                )}
                <span>{el.name}</span>
              </div>
            )
          )}
        </div>
        <div className="info-keyword">개봉일</div>
        <div className="info-content">{result.release_date}</div>
        <div className="info-keyword">상영시간</div>
        <div className="info-content">{result.runtime} 분</div>
        <div className="info-keyword">평점</div>
        <div className="info-content">{result.vote_average} 점</div>
        <div className="info-keyword last-keyword">줄거리</div>
        <div className="info-content last-content">{result.overview}</div>
      </div>
      <style jsx>{`
        .info-wrap {
          display: grid;
          grid-template-columns: 1fr 4fr;
          margin-top: 30px;
          margin-bottom: 30px;
          border: 3px solid tomato;
        }
        .info-keyword {
          text-align: center;
          padding-top: 10px;
          padding-bottom: 10px;
          vertical-align: bottom;
          border-right: 1px solid white;
          border-bottom: 1px solid white;
          background-color: tomato;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .last-keyword {
          border-bottom: 0;
        }
        .info-content {
          padding: 10px 20px;
          border-bottom: 1px solid #b7b7b7;
        }
        .last-content {
          border-bottom: 0;
        }
        .genres {
          background-color: tomato;
          margin-right: 5px;
          padding: 5px 10px;
          color: white;
          border-radius: 12px;
        }
        .poster-wrap {
          display: flex;
          justify-content: center;
        }
        .poster-image {
          max-width: 100%;
        }
        .production-companies {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .production-companies-image {
          object-fit: contain;
          height: 30px;
        }
      `}</style>
    </div>
  );
}

/*
getStaticProps
"빌드 시에 딱 한 번"만 호출되고, 바로 static file로 빌드된다. 따라서, 이후 수정이 불가능하다.
SSG (Static Site Generation) 개념이다.
앱 빌드 후에 웬만하면 바뀌지 않는 내용 (고정된 내용)이 있는 page가 있는 경우에만 사용하는 것이 좋다.
장점은 호출 시 마다 매번 data fetch를 하지 않으니 getServerSideProps보다 성능면에서 좋다.
*/

export async function getServerSideProps({ params: { id } }: Params) {
  const result = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movie/${id}`)
  ).json();

  return {
    props: { result },
  };
}

interface Params {
  params: {
    id: GetServerSidePropsContext;
  };
}
