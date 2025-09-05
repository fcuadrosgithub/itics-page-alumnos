import Link from "next/link"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarioEscolar() {
  return (
    <main className="min-h-screen bg-gray-50">
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

      <div className="bg-[#004d99] text-white py-3">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold">Ingeniería en Tecnologías de la Información y Comunicaciones</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#003366] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver a la sección de Alumnos
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Calendario Escolar</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              El calendario escolar oficial para el ciclo 2024-2025 contiene las fechas más importantes del año
              académico, incluyendo periodos de clases, evaluaciones, vacaciones y eventos institucionales.
            </p>
          </div>

          {/* Selector de periodo */}
          <div className="mb-8 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-[#003366]">Ciclo Escolar 2024-2025</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ChevronLeft className="h-5 w-5 text-[#003366]" />
              </button>
              <span className="text-gray-700">Periodo Actual</span>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ChevronRight className="h-5 w-5 text-[#003366]" />
              </button>
            </div>
          </div>

          {/* Calendario descargable */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Calendar className="h-12 w-12 text-[#003366] mr-4" />
              <div>
                <h4 className="font-bold text-lg text-[#003366]">Calendario Completo</h4>
                <p className="text-gray-600">Descarga el calendario escolar oficial en formato PDF</p>
              </div>
            </div>
            <a href="/docs/Calendario.pdf" download className="inline-flex">
              <button className="bg-[#003366] text-white py-2 px-6 rounded-md hover:bg-[#002244] transition-colors">
                Descargar PDF
              </button>
            </a>
          </div>

          {/* Fechas importantes */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#003366] mb-4">Fechas Importantes</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-[#004d99] mb-3 pb-1 border-b border-gray-200">
                  Semestre (Agosto - Diciembre 2024)
                </h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Agosto</span>
                      <span className="block font-bold">19</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Inicio de clases</span>
                      <p className="text-sm text-gray-600">Primer día del semestre para todos los estudiantes</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Septiembre</span>
                      <span className="block font-bold">16</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Suspensión de labores</span>
                      <p className="text-sm text-gray-600">Conmemoración de la Independencia de México</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Octubre</span>
                      <span className="block font-bold">23-25</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">CONAINTE</span>
                      <p className="text-sm text-gray-600">Conferencias, talleres y actividades especiales</p>
                    </div>
                  </li>              
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Diciembre</span>
                      <span className="block font-bold">6</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Fin del clases</span>
                      <p className="text-sm text-gray-600">Último día de clases a estudiantes</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Diciembre</span>
                      <span className="block font-bold">20</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Fin del semestre</span>
                      <p className="text-sm text-gray-600">Último día de actividades académicas</p>
                    </div>
                  </li>                  
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-[#004d99] mb-3 pb-1 border-b border-gray-200">
                  Semestre (Enero - Mayo 2025)
                </h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Enero</span>
                      <span className="block font-bold">20</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Inicio de clases</span>
                      <p className="text-sm text-gray-600">Primer día de clases</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Febrero</span>
                      <span className="block font-bold">3</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Suspensión de labores</span>
                      <p className="text-sm text-gray-600">Conmemoración de la Constitución Mexicana</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Abril</span>
                      <span className="block font-bold">14-25</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Vacaciones de semana santa</span>
                      <p className="text-sm text-gray-600">Periodo de descanso para estudiantes y docentes</p>
                    </div>
                  </li>                  
                  <li className="flex">
                    <div className="bg-[#003366] text-white text-center py-1 px-3 rounded-md w-32 mr-4">
                      <span className="block text-xs">Mayo</span>
                      <span className="block font-bold">30</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#003366]">Fin del semestre</span>
                      <p className="text-sm text-gray-600">Último día de actividades académicas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Periodos de inscripción */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-[#003366] mb-3">Periodos de Inscripción y Reinscripción</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#003366] font-bold mr-2">•</span>
                <span>
                  <strong>Inscripción para nuevo ingreso:</strong> Del 1 al 15 de julio de 2024
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#003366] font-bold mr-2">•</span>
                <span>
                  <strong>Reinscripción para semestre Enero-Mayo:</strong> Del 9 al 17 de enero de 2025
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#003366] font-bold mr-2">•</span>
                <span>
                  <strong>Periodo de altas y bajas de materias:</strong> Primeras dos semanas de cada semestre
                </span>
              </li>              
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-[#002244] text-white py-8">
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
