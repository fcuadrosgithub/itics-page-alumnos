import Link from "next/link"
import { ArrowLeft, BookA } from "lucide-react"

export default function PlanEstudios() {
  return (
    <main className="min-h-screen bg-gray-50">
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

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-[#003366] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" /> Volver a la sección de Alumnos
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Plan de Estudios</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              El plan de estudios de la Ingeniería en Tecnologías de la Información y Comunicaciones está diseñado para
              proporcionar una formación integral, combinando conocimientos teóricos con experiencia práctica en las
              tecnologías más demandadas por el mercado laboral actual.
            </p>
            <p className="text-gray-700 mb-4">
              El programa tiene una duración de 9 semestres (4 años y medio) y está estructurado en áreas de conocimiento
              que permiten una especialización progresiva.
            </p>
          </div>

          {/* Retícula descargable */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <BookA className="h-12 w-12 text-[#003366] mr-4" />
              <div>
                <h4 className="font-bold text-lg text-[#003366]">Retícula Académica</h4>
                <p className="text-gray-600">Descarga la retícula académica oficial en formato PDF</p>
              </div>
            </div>
            <a href="/docs/Reticula.pdf" download className="inline-flex">
              <button className="bg-[#003366] text-white py-2 px-6 rounded-md hover:bg-[#002244] transition-colors">
                Descargar PDF
              </button>
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Primer Año</h3>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Primer semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Fundamentos de Programación</li>
                  <li className="bg-gray-50 p-3 rounded">Matemáticas Discretas</li>
                  <li className="bg-gray-50 p-3 rounded">Arquitectura de Computadoras</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés I</li>
                  <li className="bg-gray-50 p-3 rounded">Expresión Oral y Escrita</li>
                  <li className="bg-gray-50 p-3 rounded">Formación Sociocultural I</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Segundo semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Programación Orientada a Objetos</li>
                  <li className="bg-gray-50 p-3 rounded">Cálculo Diferencial e Integral</li>
                  <li className="bg-gray-50 p-3 rounded">Sistemas Operativos</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés II</li>
                  <li className="bg-gray-50 p-3 rounded">Bases de Datos</li>
                  <li className="bg-gray-50 p-3 rounded">Formación Sociocultural II</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Segundo Año</h3>
              <div>
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Tercer semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Estructura de Datos</li>
                  <li className="bg-gray-50 p-3 rounded">Probabilidad y Estadística</li>
                  <li className="bg-gray-50 p-3 rounded">Redes de Computadoras</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés III</li>
                  <li className="bg-gray-50 p-3 rounded">Bases de Datos Avanzadas</li>
                  <li className="bg-gray-50 p-3 rounded">Integradora I</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Cuarto semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Desarrollo Web</li>
                  <li className="bg-gray-50 p-3 rounded">Investigación de Operaciones</li>
                  <li className="bg-gray-50 p-3 rounded">Administración de Redes</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés IV</li>
                  <li className="bg-gray-50 p-3 rounded">Ingeniería de Software</li>
                  <li className="bg-gray-50 p-3 rounded">Formación Sociocultural III</li>
                </ul>
              </div>

            </div>

            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Tercer Año</h3>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Quinto semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Desarrollo de Aplicaciones Móviles</li>
                  <li className="bg-gray-50 p-3 rounded">Seguridad Informática</li>
                  <li className="bg-gray-50 p-3 rounded">Servicios de Red</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés V</li>
                  <li className="bg-gray-50 p-3 rounded">Gestión de Proyectos de Software</li>
                  <li className="bg-gray-50 p-3 rounded">Formación Sociocultural IV</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Sexto semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Desarrollo de Aplicaciones Empresariales</li>
                  <li className="bg-gray-50 p-3 rounded">Auditoría Informática</li>
                  <li className="bg-gray-50 p-3 rounded">Administración de Servidores</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés VI</li>
                  <li className="bg-gray-50 p-3 rounded">Calidad de Software</li>
                  <li className="bg-gray-50 p-3 rounded">Integradora II</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Cuarto Año</h3>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Séptimo semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Computación en la Nube</li>
                  <li className="bg-gray-50 p-3 rounded">Inteligencia Artificial</li>
                  <li className="bg-gray-50 p-3 rounded">Virtualización</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés VII</li>
                  <li className="bg-gray-50 p-3 rounded">Emprendimiento Tecnológico</li>
                  <li className="bg-gray-50 p-3 rounded">Formación Sociocultural V</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Octavo semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Big Data y Analítica</li>
                  <li className="bg-gray-50 p-3 rounded">Internet de las Cosas</li>
                  <li className="bg-gray-50 p-3 rounded">DevOps</li>
                  <li className="bg-gray-50 p-3 rounded">Inglés VIII</li>
                  <li className="bg-gray-50 p-3 rounded">Ética Profesional</li>
                  <li className="bg-gray-50 p-3 rounded">Integradora III</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Quinto Año</h3>

              <div>
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Noveno semestre</h4>
                <ul className="grid md:grid-cols-1 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Estadía Profesional (525 horas)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-[#003366] mb-2">Información Adicional</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Total de créditos: 260</li>
              <li>Horas teóricas: 1,500</li>
              <li>Horas prácticas: 1,800</li>
              <li>Estadía profesional: 525 horas</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-[#002244] text-white py-8">
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
