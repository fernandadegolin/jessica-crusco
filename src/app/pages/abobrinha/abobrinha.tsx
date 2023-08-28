import Link from "next/link";

export default function Abobrinha() {
  return (
    <>
      <h1>Estou em Abobrinha</h1>
      <Link href={"/pages/filmes"}>
        <button>QUERO IR PARA FILMES</button>
      </Link>
    </>
  );
}
