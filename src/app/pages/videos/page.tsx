import { Metadata } from "next";
import Link from "next/link";
import styles from "./videos.module.scss";
import data from "@/app/data";

export const metadata: Metadata = {
  title: "Vídeos - Jessica Crusco",
};

export default function VideosPage() {
  const videos = data();

  console.log("manifest", videos);

  return (
    <>
      <div>
        <h1>Você está na página de vídeos</h1>
        <Link href={"/"}>
          <button>Voltar</button>
        </Link>
        <h2>{videos.name}</h2>
      </div>
    </>
  );
}
