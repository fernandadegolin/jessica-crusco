import Link from "next/link";
import VideosPage from "./pages/videos/page";

export function Home() {
  return (
    <>
      <header>
        <h1>Sou a Home</h1>
      </header>

      <Link href={"/pages/videos"}>
        <button>Vídeos</button>
      </Link>
    </>
  );
}

export default Home;
