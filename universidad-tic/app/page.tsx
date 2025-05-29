import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-[#002244] to-[#004488] text-white py-4 shadow-md">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo ITSOEH" className="h-20 hidden md:block" />
        <h1 className="text-xl md:text-2xl font-serif font-bold leading-snug tracking-wide max-w-md">
  Instituto Tecnológico Superior del <br className="hidden md:block" />
  Occidente del Estado de Hidalgo
</h1>
      </div>
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
         <Link href="/" className="hover:text-yellow-300 transition-colors">Aspirantes</Link>
         <Link href="/" className="hover:text-yellow-300 transition-colors">Docentes</Link>
         <Link href="/" className="hover:text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1">Alumnos</Link>
         <Link href="/" className="hover:text-yellow-300 transition-colors">Egresados</Link>
         <Link href="/" className="hover:text-yellow-300 transition-colors">Público</Link>
      </nav>
      <button className="md:hidden p-2 rounded hover:bg-white/10 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</header>

      <div className="bg-[#004d99] text-white py-3 shadow-sm">
  <div className="container mx-auto px-4">
    <h2 className="text-xl font-semibold tracking-wide">Ingeniería en Tecnologías de la Información y Comunicaciones</h2>
  </div>
</div>

      <section className="container mx-auto px-4 py-12">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-[#002244] tracking-tight drop-shadow-sm">
    Alumnos
  </h2>

  {/* Avisos Temporales */}
  <div className="mb-12 bg-gray-100 border-l-4 border-gray-400 p-6 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-blue-800 mb-6">Avisos Temporales</h3>

  <div className="grid md:grid-cols-3 gap-6">
    {/* Aviso: Evaluación Docente */}
    <div className="bg-white p-5 rounded-xl shadow-md border border-blue-200 hover:shadow-lg hover:scale-[1.02] transition duration-200">
      <h4 className="font-bold text-[#003366] mb-2">Evaluación Docente</h4>
      <div className="mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg mb-3">
                    <p className="text-sm text-blue-800 font-medium">Periodo: 15 - 30 de Mayo 2025</p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Participa en la evaluación de tus profesores. Tu opinión es importante para mejorar la calidad
                    educativa.
                  </p>
                </div>

      <Link
        href="http://evaluaciondocente.itsoeh.edu.mx/"
        target="_blank"
        className="text-blue-600 hover:underline inline-flex items-center font-medium group"
      >
        Realizar evaluación
        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>

    {/* Aviso: Pagos */}
    <div className="bg-white p-5 rounded-xl shadow-md border border-blue-200 hover:shadow-lg hover:scale-[1.02] transition duration-200">
      <h4 className="font-bold text-[#003366] mb-2">Pagos</h4>
      <div className="mb-4 space-y-2">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">Segunda oportunidad</p>
                    <p className="text-xs text-gray-600">Fecha límite: 30 de Mayo 2025</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">Reinscripción</p>
                    <p className="text-xs text-gray-600">Inicia: Agosto 2025</p>
                  </div>
                </div>

      <Link
        href="https://estudiantes.itsoeh.edu.mx/"
        target="_blank"
        className="text-blue-600 hover:underline inline-flex items-center font-medium group">
        Genera tus pagos
        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>

    {/* Aviso: Titulación */}
    <div className="bg-white p-5 rounded-xl shadow-md border border-blue-200 hover:shadow-lg hover:scale-[1.02] transition duration-200">
      <h4 className="font-bold text-[#003366] mb-2">Titulación</h4>
      <div className="mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg mb-3">
                    <p className="text-sm text-blue-800 font-medium">Entrega de documentos</p>
                    <p className="text-xs text-gray-600">Hasta: 25 de Mayo 2025</p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Revisa los requisitos y documentos necesarios para tu proceso de titulación.
                  </p>
                </div>

      <Link
        href="https://www.itsoeh.edu.mx/front/documentos/egresados/REQUISITOS%20PARA%20REGISTRO%20DE%20PRODUCTO%20DE%20TITULACI%C3%93N%20(1).pdf"
        target="_blank"
        className="text-blue-600 hover:underline inline-flex items-center font-medium group"
      >
        Proceso de titulación
        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
</div>


        {/* Secciones principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/alumnos/perfil-egreso" className="group h-full">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Perfil de Egreso</h3>
              <p className="text-gray-600 mb-4">
                Conoce los objetivos educativos y atributos que desarrollarás durante tu formación académica.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/plan-estudios" className="group h-full">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Plan de Estudios</h3>
              <p className="text-gray-600 mb-4">
                Consulta la estructura curricular de la carrera y las asignaturas por semestre.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/temarios" className="group h-full">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Temarios</h3>
              <p className="text-gray-600 mb-4">
                Accede a los contenidos detallados de cada una de las materias del programa.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/calendario" className="group h-full">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Calendario Escolar</h3>
              <p className="text-gray-600 mb-4">Consulta las fechas importantes del ciclo escolar actual.</p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Ver más <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/conect" className="group h-full">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
              <h3 className="text-xl font-bold text-[#003366] mb-3">Conect</h3>
              <p className="text-gray-600 mb-4">
                Accede al portal escolar para consultar tu información escolar como calificaciones, horario, kardex y más.
              </p>
              <span className="text-blue-600 group-hover:underline inline-flex items-center">
                Acceder <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/alumnos/contacto" className="group h-full">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 h-full flex flex-col">
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
