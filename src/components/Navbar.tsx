import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div className="logo">
        <img src="/logo.svg" />
        <h2>영화 뭐 보지?</h2>
      </div>
      <div>
        <Link href="/">
          <div className={router.pathname === "/" ? "active" : ""}>Home</div>
        </Link>
        <Link href="/about">
          <div className={router.pathname === "/about" ? "active" : ""}>
            About
          </div>
        </Link>
      </div>
      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          background-color: white;
          z-index: 100;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        img {
          object-fit: fill;
          width: 50px;
          height: 40px;
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
