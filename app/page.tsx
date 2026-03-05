import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
       <section className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Saldanha Ltda.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Soluções de software personalizadas para impulsionar o crescimento
          e a inovação do seu negócio.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/signup">
            <Button size="lg">Começar agora</Button>
          </Link>

          <Link href="/login">
            <Button variant="outline" size="lg">
              Já tenho conta
            </Button>
          </Link>
        </div>
      </section>

      {/* PREVIEW DO DASHBOARD */}
      <section className="py-24 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Um sistema completo para sua empresa
          </h2>

          <p className="mt-4 text-muted-foreground">
            Acompanhe métricas, gerencie projetos e visualize dados estratégicos em tempo real.
          </p>

          {/* Mock do Dashboard */}
          <div className="mt-12 rounded-2xl border bg-background shadow-xl p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-primary/10 p-6">
                <h3 className="text-lg font-semibold">Receita Mensal</h3>
                <p className="mt-2 text-2xl font-bold">R$ 82.450</p>
              </div>

              <div className="rounded-xl bg-primary/10 p-6">
                <h3 className="text-lg font-semibold">Projetos Ativos</h3>
                <p className="mt-2 text-2xl font-bold">12</p>
              </div>

              <div className="rounded-xl bg-primary/10 p-6">
                <h3 className="text-lg font-semibold">Novos Clientes</h3>
                <p className="mt-2 text-2xl font-bold">28</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-muted/40 p-6">
  <div className="h-56 w-full">
    <svg
      viewBox="0 0 800 300"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Linha principal */}
      <path
        d="
          M0 200
          C80 140, 120 260, 200 180
          S320 100, 400 160
          S520 250, 600 140
          S720 110, 800 170
        "
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Área preenchida */}
      <path
        d="
          M0 200
          C80 140, 120 260, 200 180
          S320 100, 400 160
          S520 250, 600 140
          S720 110, 800 170
          L800 300
          L0 300
          Z
        "
        fill="url(#areaGradient)"
      />
    </svg>
  </div>
</div>
          </div>

          <div className="mt-10">
            <Link href="/dashboard">
              <Button size="lg">
                Acessar Dashboard Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Transforme dados em decisões estratégicas
        </h2>

        <p className="mt-4 text-muted-foreground">
          Comece hoje mesmo e leve sua gestão para o próximo nível.
        </p>

        <Link href="/signup">
          <Button size="lg" className="mt-6">
            Criar minha conta
          </Button>
        </Link>
      </section>

    </main>
  )
}