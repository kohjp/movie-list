import Link from "next/link";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

export default function PageNation({
  page,
  total,
}: {
  page: number;
  total: number;
}) {
  const renderPages = [];
  for (let i = 1; i <= 5; i++) {
    renderPages.push(i + 5 * Math.floor((page - 1) / 5));
  }

  return (
    <div className="page_container">
      <Link href={`/page/1`}>
        <HiChevronDoubleLeft />
      </Link>
      <Link
        href={`/page/${
          5 * Math.floor((page - 1) / 5) <= 0
            ? 1
            : 5 * Math.floor((page - 1) / 5)
        }`}
      >
        <HiChevronLeft />
      </Link>
      {renderPages.map((el) => (
        <Link href={`/page/${el}`} key={el}>
          <span className={page === el ? "active" : ""}>{el}</span>
        </Link>
      ))}
      <Link
        href={`/page/${
          5 * Math.floor((page + 4) / 5) >= 500
            ? 500
            : 5 * Math.floor((page + 4) / 5) + 1
        }`}
      >
        <HiChevronRight />
      </Link>
      <Link href={`/page/500`}>
        <HiChevronDoubleRight />
      </Link>
      <style jsx>
        {`
          .page_container {
            max-width: 512px;
            width: 100%;
            position: fixed;
            bottom: 0;
            background-color: white;
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            height: 70px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px -50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px -30px 60px -30px;
          }
          .active {
            color: tomato;
          }
        `}
      </style>
    </div>
  );
}
