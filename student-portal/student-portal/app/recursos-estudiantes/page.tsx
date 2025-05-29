import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecursosEstudiantes() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Recursos para Estudiantes</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Bienvenido a tu espacio. Aquí encontrarás recursos y herramientas relevantes para tu trayectoria
        académica.
      </p>

      {/* Acceso a Conect */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-pink-600">Plataforma Conect</h2>
              <p className="text-gray-700 mb-4">
                Accede a la plataforma educativa oficial para consultar calificaciones, horarios y recursos académicos.
              </p>
            </div>
            <div>
              <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3">
                <Link href="http://conect.itsoeh.edu.mx/mix_21_alu/" target="_blank" rel="noopener noreferrer">
                  Acceder a Conect
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ayuda y Soporte */}
      <section className="bg-purple-50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-pink-600">¿Necesitas ayuda?</h2>
            <p className="text-gray-600 mb-4">
              Nuestro equipo de soporte está disponible para resolver tus dudas académicas y técnicas.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <Link href="/necesitas-ayuda">Contactar Soporte</Link>
            </Button>
          
          </div>
        </div>
      </section>
    </div>
  )
}
