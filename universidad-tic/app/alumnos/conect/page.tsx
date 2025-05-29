import Link from "next/link"
import { ArrowLeft, LogIn, BookOpen, Calendar, Users, FileText, HelpCircle, Book } from "lucide-react"

export default function Conect() {
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
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Conect - Portal Escolar</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Conect es el portal escolar oficial de la Instituto Tecnológico Superior del Occidente del Estado de Hidalgo, diseñada para facilitar la
              comunicación entre estudiantes y profesores, así como para gestionar los contenidos de los cursos,
              ver calificaciones, evaluaciones e información educativa.
            </p>
          </div>

          {/* Acceso a la plataforma */}
          <div className="mb-10 bg-gradient-to-r from-[#003366] to-[#004d99] rounded-lg p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Accede a tu cuenta</h3>
                <p className="opacity-90 mb-4">
                  Ingresa a la plataforma con tu matrícula y contraseña para acceder a tu información educativa.
                </p>
                <a href="http://conect.itsoeh.edu.mx/mix_21_alu/" target="_blank" className="inline-flex">
                  <button className="bg-white text-[#003366] py-2 px-6 rounded-md hover:bg-gray-100 transition-colors  flex items-center">
                    <LogIn className="h-5 w-5 mr-2" /> Iniciar sesión
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Características de la plataforma */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#003366] mb-6">Características de la plataforma</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <BookOpen className="h-10 w-10 text-[#003366] mb-3" />
                <h4 className="font-bold text-lg text-[#003366] mb-2">Contenido de cursos</h4>
                <p className="text-gray-600">
                  Accede al detalle de tus asignaturas.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <Calendar className="h-10 w-10 text-[#003366] mb-3" />
                <h4 className="font-bold text-lg text-[#003366] mb-2">Calendario</h4>
                <p className="text-gray-600">
                  Consulta fechas importantes sobre fechas de evaluación relacionados con tus cursos.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <Users className="h-10 w-10 text-[#003366] mb-3" />
                <h4 className="font-bold text-lg text-[#003366] mb-2">Reinscripción</h4>
                <p className="text-gray-600">
                  Realiza tu reinscripción consultando la fecha y el proceso.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <FileText className="h-10 w-10 text-[#003366] mb-3" />
                <h4 className="font-bold text-lg text-[#003366] mb-2">Evaluaciones</h4>
                <p className="text-gray-600">
                  Consulta las calificaciones de cada materia a la que estas inscrito.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <Book className="h-10 w-10 text-[#003366] mb-3" />
                <h4 className="font-bold text-lg text-[#003366] mb-2">Curso de verano</h4>
                <p className="text-gray-600">
                  Accede a información sobre tu curso de verano como horarios, detalle de materias y calificaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Requisitos técnicos */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-[#003366] mb-3">Requisitos técnicos</h3>
            <p className="text-gray-700 mb-3">Para un funcionamiento óptimo de la plataforma Conect, se recomienda:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#003366] font-bold mr-2">•</span>
                <span>
                  <strong>Navegadores:</strong> Chrome, Firefox, Edge o Safari en sus versiones más recientes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#003366] font-bold mr-2">•</span>
                <span>
                  <strong>Dispositivos:</strong> Compatible con computadoras, tablets y smartphones
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
