import Link from "next/link"
import { ArrowLeft, BookA } from "lucide-react"

export default function PlanEstudios() {
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
                  <li className="bg-gray-50 p-3 rounded">Cálculo Diferencial</li>
                  <li className="bg-gray-50 p-3 rounded">Fundamentos de Programación</li>
                  <li className="bg-gray-50 p-3 rounded">Matemáticas Discretas I</li>
                  <li className="bg-gray-50 p-3 rounded">Introducción a las TIC's</li>                  
                  <li className="bg-gray-50 p-3 rounded">Taller de Ética</li>
                  <li className="bg-gray-50 p-3 rounded">Fundamentos de Investigación</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Segundo semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Cálculo Integral</li>
                  <li className="bg-gray-50 p-3 rounded">Programación Orientada a Objetos</li>
                  <li className="bg-gray-50 p-3 rounded">Matemáticas Discretas II</li>
                  <li className="bg-gray-50 p-3 rounded">Probabilidad y Estadística</li>
                  <li className="bg-gray-50 p-3 rounded">Contabilidad y Costos</li>
                  <li className="bg-gray-50 p-3 rounded">Electricidad y Magnetismo</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Segundo Año</h3>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Tercer semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Matemáticas Aplicadas a Comunicaciones</li>
                  <li className="bg-gray-50 p-3 rounded">Estructura y Organización de Datos</li>
                  <li className="bg-gray-50 p-3 rounded">Administración Gerencial</li>
                  <li className="bg-gray-50 p-3 rounded">Álgebra Lineal</li>
                  <li className="bg-gray-50 p-3 rounded">Fundamentos de Bases de Datos</li>
                  <li className="bg-gray-50 p-3 rounded">Circuitos Eléctricos y Electrónicos</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Cuarto semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Análisis de Señales y Sistemas de Comunicación</li>
                  <li className="bg-gray-50 p-3 rounded">Programación II</li>
                  <li className="bg-gray-50 p-3 rounded">Matemáticas para la Toma de Decisiones</li>
                  <li className="bg-gray-50 p-3 rounded">Fundamentos de Redes</li>
                  <li className="bg-gray-50 p-3 rounded">Taller de Base de Datos</li>
                  <li className="bg-gray-50 p-3 rounded">Arquitectura de Computadoras</li>
                  <li className="bg-gray-50 p-3 rounded">Ingeniería de Software</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Tercer Año</h3>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Quinto semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Redes de Computadora</li>
                  <li className="bg-gray-50 p-3 rounded">Telecomunicaciones</li>
                  <li className="bg-gray-50 p-3 rounded">Desarrollo Sustentable</li>
                  <li className="bg-gray-50 p-3 rounded">Base de Datos Distribuidas</li>
                  <li className="bg-gray-50 p-3 rounded">Sistemas Operativos I</li>
                  <li className="bg-gray-50 p-3 rounded">Taller de Ingeniería de Software</li>
                  <li className="bg-gray-50 p-3 rounded">Administración de Proyectos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Sexto semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Redes Emergentes</li>
                  <li className="bg-gray-50 p-3 rounded">Programación WEB</li>
                  <li className="bg-gray-50 p-3 rounded">Desarrollo de Emprendedores</li>
                  <li className="bg-gray-50 p-3 rounded">Taller de Investigación I</li>
                  <li className="bg-gray-50 p-3 rounded">Sistemas Operativos II</li>
                  <li className="bg-gray-50 p-3 rounded">Tecnologías Inalámbricas</li>
                  <li className="bg-gray-50 p-3 rounded">Interacción Humano Computadora</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Cuarto Año</h3>
              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Séptimo semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Desarrollo de Aplicaciones para Dispositivos Móviles</li>
                  <li className="bg-gray-50 p-3 rounded">Normativa en Seguridad de  la Información</li>
                  <li className="bg-gray-50 p-3 rounded">Administración y Seguridad de Redes</li>
                  <li className="bg-gray-50 p-3 rounded">Taller de Investigación II</li>
                  <li className="bg-gray-50 p-3 rounded">Negocios Electrónicos I</li>
                  <li className="bg-gray-50 p-3 rounded">Servicio Social</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Octavo semestre</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Auditoría en Tecnologías de Información</li>
                  <li className="bg-gray-50 p-3 rounded">Ingeniería del Conocimiento</li>
                  <li className="bg-gray-50 p-3 rounded">Ciberseguridad y Protección de Datos</li>
                  <li className="bg-gray-50 p-3 rounded">Seguridad en Bases de Datos</li>
                  <li className="bg-gray-50 p-3 rounded">Negocios Electrónicos II</li>
                  <li className="bg-gray-50 p-3 rounded">Seguridad de Cómputo en la Nube</li>
                  <li className="bg-gray-50 p-3 rounded">Seguridad en la Ingeniería de Datos</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Quinto Año</h3>

              <div>
                <h4 className="font-bold text-lg text-[#004d99] mb-3">Noveno semestre</h4>
                <ul className="grid md:grid-cols-1 gap-2">
                  <li className="bg-gray-50 p-3 rounded">Residencia Profesional</li>
                </ul>
              </div>
            </div>
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
