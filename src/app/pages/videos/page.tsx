import { Metadata } from "next";
import Link from "next/link";
import styles from "./videos.module.scss";
import { data } from "./data";

export const metadata: Metadata = {
  title: "Vídeos - Jessica Crusco",
};

export default function VideosPage() {
  const videos = data;

  console.log("manifest", videos);

  return (
    <>
      <div>
        <h1>Você está na página de vídeos</h1>
        <Link href={"/"}>
          <button>Voltar</button>
        </Link>

        {videos.map((value, index) => (
          <>
            <h2 key={index}>{value.name}</h2>
            <h3>{value.bio}</h3>
          </>
        ))}
      </div>
    </>
  );
}
