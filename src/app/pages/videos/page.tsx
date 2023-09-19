import { Metadata } from "next";
import Link from "next/link";
import styles from "./videos.module.scss";

export const metadata: Metadata = {
  title: "Vídeos - Jessica Crusco",
};

export default function VideosPage() {
  return (
    <>
      <div>
        <h1>Você está na página de vídeos</h1>

        <Link href={"/"}>
          <button>Voltar</button>
        </Link>
      </div>
    </>
  );
}
