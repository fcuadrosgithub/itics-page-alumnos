import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-[#003366] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Instituto Tecnológico Superior del Occidente del Estado de Hidalgo</h1>
            <nav className="hidden md:flex space-x-6">
              <Link href="#" className="hover:underline">
                Aspirantes
              </Link>
              <Link href="#" className="hover:underline">
                Docentes
              </Link>
              <Link href="#" className="hover:underline font-bold border-b-2 border-white pb-1">
                Alumnos
              </Link>
              <Link href="#" className="hover:underline">
                Egresados
              </Link>
              <Link href="#" className="hover:underline">
                Público
              </Link>
            </nav>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-[#004d99] text-white py-3">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold">Ingeniería en Tecnologías de la Información y Comunicaciones</h2>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#003366]">Alumnos</h2>

        {/* Avisos Temporales - Destacados */}
        <div className="mb-12 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <h3 className="text-xl font-bold text-yellow-800 mb-3">Avisos Temporales</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-md border border-yellow-200">
              <h4 className="font-bold text-yellow-700 mb-2">Evaluación Docente</h4>
              <p className="text-gray-700 mb-2">Periodo de evaluación: 15 - 30 de Mayo 2025</p>
              <Link href="http://evaluaciondocente.itsoeh.edu.mx/" target="_blank" className="text-blue-600 hover:underline inline-flex items-center">
                Realizar evaluación <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-4 rounded shadow-md border border-yellow-200">
              <h4 className="font-bold text-yellow-700 mb-2">Pagos</h4>
              <p className="text-gray-700 mb-2">Segunda oportunidad: Fecha límite 20 de Mayo 2025</p>
              <p className="text-gray-700 mb-2">Reinscripción: Inicia 1 de Junio 2025</p>
              <Link href="https://estudiantes.itsoeh.edu.mx/" target="_blank" className="text-blue-600 hover:underline inline-flex items-center">
                Genera tus pagos <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-4 rounded shadow-md border border-yellow-200">
              <h4 className="font-bold text-yellow-700 mb-2">Titulación</h4>
              <p className="text-gray-700 mb-2">Entrega de documentos: Hasta 25 de Mayo 2025</p>
              <Link href="https://www.itsoeh.edu.mx/front/documentos/egresados/REQUISITOS%20PARA%20REGISTRO%20DE%20PRODUCTO%20DE%20TITULACI%C3%93N%20(1).pdf" target="_blank" className="text-blue-600 hover:underline inline-flex items-center">
                Proceso de titulación <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Secciones principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/alumnos/perfil-egreso" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Perfil de Egreso</h3>
              <p className="text-gray-600 mb-4">
                Conoce los objetivos educativos y atributos que desarrollarás durante tu formación académica.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/plan-estudios" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Plan de Estudios</h3>
              <p className="text-gray-600 mb-4">
                Consulta la estructura curricular de la carrera y las asignaturas por semestre.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/temarios" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Temarios</h3>
              <p className="text-gray-600 mb-4">
                Accede a los contenidos detallados de cada una de las materias del programa.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/calendario" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Calendario Escolar</h3>
              <p className="text-gray-600 mb-4">Consulta las fechas importantes del ciclo escolar actual.</p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/conect" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Conect</h3>
              <p className="text-gray-600 mb-4">
                Accede al portal escolar para consultar tu información escolar como calificaciones, horario, kardex y más.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Acceder <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/contacto" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Contacto</h3>
              <p className="text-gray-600 mb-4">
                Información de contacto de coordinadores, profesores y áreas administrativas.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver contactos <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <footer className="bg-[#002244] text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Instituto Tecnológico Superior del Occidente del Estado de Hidalgo</h3>
              <p className="text-sm">
                Formando profesionales en tecnologías de la información y comunicaciones desde 1995.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                
                <li>
                  <Link href="https://www.itsoeh.edu.mx/front/services.html" target="_blank" className="text-sm hover:underline">
                    Oferta Académica
                  </Link>
                </li>
                <li>
                  <Link href="https://estudiantes.itsoeh.edu.mx" target="_blank" className="text-sm hover:underline">
                    Servicios Escolares
                  </Link>
                </li>
                <li>
                  <Link href="https://www.itsoeh.edu.mx/front/biblioteca/index.html" target="_blank" className="text-sm hover:underline">
                    Biblioteca Digital
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <address className="not-italic text-sm">
                <p>Paseo del Agrarismo 2000.</p>
                <p>Carr. Mixquiahuala - Tula, km 2.5</p>
                <p>Mixquiahuala de Juárez, Hidalgo, C.P. 42700</p>
                <p>Tel: 01 (738) 73 54000</p>
                <p>Email: contacto@universidad.edu.mx</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
            <p>© 2025 Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
