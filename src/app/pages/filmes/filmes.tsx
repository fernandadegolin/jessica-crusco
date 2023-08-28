import Link from "next/link";

export default function Filmes() {
  return (
    <>
      <Link href={"/abobrinha"}>FILMES</Link>
      <div>
        <Link href={"/"}>Voltar</Link>
      </div>
    </>
  );
}
