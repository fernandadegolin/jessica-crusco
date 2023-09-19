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
  return <body className={styles.layout}>{children}</body>;
}
