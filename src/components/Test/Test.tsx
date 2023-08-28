import Link from "next/link";
import styles from "./Test.module.scss";

export const Test = () => {
  return (
    <div className={`${styles.buttonClass}`}>
      <Link href={`pages/filmes`}>Teste de Páginas</Link>
      <Link href={`pages/abobrinha`}>
        <button>Teste</button>
      </Link>
    </div>
  );
};
