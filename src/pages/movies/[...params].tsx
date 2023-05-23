import Seo from "@/components/Seo";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

interface Detail {
  params: [string, string];
}

export default function MovieDetail({ params }: Detail) {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
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
export function getStaticProps({ params: { params } }: Params) {
  console.log(params);
  return {
    props: { params },
  };
}

interface Params {
  params: {
    params: GetStaticPropsContext;
  };
}

export async function getStaticPaths() {
  return {
    paths: [], // 동적 경로가 없으므로 빈 배열로 설정
    fallback: "blocking", // 다른 경로로의 접근은 서버 사이드에서 대기
  };
}
