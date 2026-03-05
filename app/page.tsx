import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-2xl font-bold">Home</h1>

      <Link href="/dashboard" className="text-blue-500 underline">
        Ir para Dashboard
      </Link>

			<Link href="/login" className="text-blue-500 underline">
        Ir para Login
      </Link>

      <Link href="/signup" className="text-blue-500 underline">
        Ir para Cadastro
      </Link>
    </div>
  );
}