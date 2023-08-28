import styles from "./../styles/index.module.css";
import { Test } from "../components/Test/Test";

export function Home() {
  return (
    <main className={styles.main}>
      <Test />
    </main>
  );
}

export default Home;
