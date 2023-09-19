import styles from "./videos.module.scss";

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body className={styles.layout}>{children}</body>;
}
