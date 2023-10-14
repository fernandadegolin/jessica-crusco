import { Metadata } from "next";
import styles from "./videos.module.scss";

export const metadata: Metadata = {
  title: `Vídeos - Jessica Crusco`,
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Página de Vídeos</h1>
        <hr />
        {children}
      </body>
    </html>
  );
}
