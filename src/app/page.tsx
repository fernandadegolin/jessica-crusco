import Link from "next/link";

export function Home() {
  return (
    <>
      <header>
        <h1>Sou a Home</h1>
      </header>

      <Link href={"/pages/videos"}>
        <button>Vídeos</button>
      </Link>
      <Link href={"/pages/galeria"}>
        <button>Galeria</button>
      </Link>
    </>
  );
}

export default Home;
