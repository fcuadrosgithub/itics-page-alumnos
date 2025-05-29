import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a2463] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-gray-200">
                Formando profesionales con excelencia académica y compromiso social
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/alumnos">
                  <Button variant="secondary" size="lg">
                    Alumnos
                  </Button>
                </Link>
                <Link href="/aspirantes">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-[#0a2463]"
                    size="lg"
                  >
                    Aspirantes
                  </Button>
                </Link>
                <Link href="/docentes">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-[#0a2463]"
                    size="lg"
                  >
                    Docentes
                  </Button>
                </Link>
                <Link href="/egresados">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-[#0a2463]"
                    size="lg"
                  >
                    Egresados
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-[#0a2463] p-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Excelencia Académica</h3>
                <p className="text-muted-foreground">
                  Programas educativos de calidad con reconocimiento nacional e internacional.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-[#0a2463] p-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z" />
                    <circle cx="12" cy="8" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Vinculación Empresarial</h3>
                <p className="text-muted-foreground">
                  Alianzas estratégicas con empresas para prácticas profesionales y bolsa de trabajo.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-[#0a2463] p-4">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Investigación e Innovación</h3>
                <p className="text-muted-foreground">
                  Desarrollo de proyectos de investigación con impacto en la sociedad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
