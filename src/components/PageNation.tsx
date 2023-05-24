import Link from "next/link";

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
      <Link
        href={`/page/${
          5 * Math.floor((page - 1) / 5) <= 0
            ? 1
            : 5 * Math.floor((page - 1) / 5)
        }`}
      >
        {"<"}
      </Link>
      {renderPages.map((el) => (
        <Link href={`/page/${el}`} key={el}>
          <span className={page === el ? "active" : ""}>{el}</span>
        </Link>
      ))}
      <Link
        href={`/page/${
          5 * Math.floor((page + 4) / 5) >= total
            ? total
            : 5 * Math.floor((page + 4) / 5) + 1
        }`}
      >
        {">"}
      </Link>
      <style jsx>
        {`
          .page_container {
            max-width: 100%;
            position: fixed;
            bottom: 0;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 520px;
            gap: 10px;
            font-size: 30px;
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
