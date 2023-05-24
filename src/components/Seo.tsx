import Head from "next/head";

export default function Seo({ title }: { title: string }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>{title} | 영화 뭐 볼까?</title>
      </Head>
    </>
  );
}
