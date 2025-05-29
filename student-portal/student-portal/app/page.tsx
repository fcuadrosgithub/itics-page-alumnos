import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Bienvenido al Portal Educativo
              </h1>
              <p className="text-xl text-gray-600">
                Tu plataforma integral para acceder a recursos académicos, información curricular y servicios
                estudiantiles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-pink-500 hover:bg-pink-600">
                  <Link href="/especialidad">Especialidad</Link>
                </Button>
                <Button asChild variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                  <Link href="/plan-estudios">Plan de Estudios</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/logo-tics.png"
                alt="Estudiantes universitarios"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos para Estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Módulos de Especialidad"
              description="Conoce los módulos especializados y competencias profesionales de nuestra carrera."
              icon="BookOpen"
              link="/especialidad"
            />
            <FeatureCard
              title="Recursos Estudiantiles"
              description="Accede a herramientas, anuncios y recursos para tu trayectoria académica."
              icon="Users"
              link="/recursos-estudiantes"
            />
            <FeatureCard
              title="Plan de Estudios"
              description="Consulta la retícula completa del programa académico en formato PDF."
              icon="FileText"
              link="/plan-estudios"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para resolver tus dudas y apoyarte en tu trayectoria académica.
          </p>
          <Button asChild className="bg-pink-500 hover:bg-pink-600">
            <Link href="/necesitas-ayuda">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  link: string
}

function FeatureCard({ title, description, icon, link }: FeatureCardProps) {
  const icons: Record<string, React.ReactNode> = {
    BookOpen: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-pink-500 mb-4"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    Users: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-pink-500 mb-4"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" x2="20" y1="8" y2="14"></line>
        <line x1="23" x2="23" y1="11" y2="11"></line>
      </svg>
    ),
    FileText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-pink-500 mb-4"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" x2="8" y1="13" y2="13"></line>
        <line x1="16" x2="8" y1="17" y2="17"></line>
        <line x1="10" x2="8" y1="9" y2="9"></line>
      </svg>
    ),
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      {icons[icon]}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="link" className="text-pink-600 hover:text-pink-700 mt-auto">
        <Link href={link}>Saber más →</Link>
      </Button>
    </div>
  )
}
