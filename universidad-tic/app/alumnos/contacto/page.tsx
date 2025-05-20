import Link from "next/link"
import { ArrowLeft, Mail, Phone, Clock, Building } from "lucide-react"

export default function Contacto() {
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
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Contacto</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              En esta sección encontrarás la información de contacto de los coordinadores, profesores y áreas
              administrativas de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones.
            </p>
          </div>

          {/* Información general de contacto */}
          <div className="mb-10 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Dirección de la Carrera</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Edificio D, Planta Alta</p>
                    <p className="text-gray-600">Campus Principal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">(123) 456-7890 ext. 1234</p>
                    <p className="text-gray-600">Dirección</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">direccion.tic@universidad.edu.mx</p>
                    <p className="text-gray-600">Correo electrónico</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Horario de atención</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Servicios Escolares</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Edificio A, Planta Baja</p>
                    <p className="text-gray-600">Campus Principal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">(123) 456-7890 ext. 2345</p>
                    <p className="text-gray-600">Servicios Escolares</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">escolares@universidad.edu.mx</p>
                    <p className="text-gray-600">Correo electrónico</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Lunes a Viernes: 8:00 - 16:00</p>
                    <p className="text-gray-600">Horario de atención</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Directorio académico */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#003366] mb-6">Directorio Académico</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Nombre</th>
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Cargo</th>
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Correo electrónico</th>
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Extensión</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Dr. Roberto Méndez García</td>
                    <td className="py-3 px-4 border-b">Director de Carrera</td>
                    <td className="py-3 px-4 border-b">roberto.mendez@universidad.edu.mx</td>
                    <td className="py-3 px-4 border-b">1234</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtra. Laura Sánchez Ortiz</td>
                    <td className="py-3 px-4 border-b">Coordinadora Académica</td>
                    <td className="py-3 px-4 border-b">laura.sanchez@universidad.edu.mx</td>
                    <td className="py-3 px-4 border-b">1235</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Dr. Carlos Ramírez López</td>
                    <td className="py-3 px-4 border-b">Coordinador de Investigación</td>
                    <td className="py-3 px-4 border-b">carlos.ramirez@universidad.edu.mx</td>
                    <td className="py-3 px-4 border-b">1236</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtro. Javier Torres Vega</td>
                    <td className="py-3 px-4 border-b">Coordinador de Vinculación</td>
                    <td className="py-3 px-4 border-b">javier.torres@universidad.edu.mx</td>
                    <td className="py-3 px-4 border-b">1237</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Dra. Ana María López Fuentes</td>
                    <td className="py-3 px-4 border-b">Coordinadora de Tutorías</td>
                    <td className="py-3 px-4 border-b">ana.lopez@universidad.edu.mx</td>
                    <td className="py-3 px-4 border-b">1238</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Profesores por área */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#003366] mb-6">Profesores por Área</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Nombre</th>
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Asignatura</th>
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Correo electrónico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtro. Juan Méndez Gonzalez</td>
                    <td className="py-3 px-4 border-b">Programación</td>
                    <td className="py-3 px-4 border-b">juan.mendez@universidad.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtra. Sonia Hernandez Ortiz</td>
                    <td className="py-3 px-4 border-b">Base de datos</td>
                    <td className="py-3 px-4 border-b">sonia.hernandez@universidad.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtro. Carlos Torres López</td>
                    <td className="py-3 px-4 border-b">Investigación</td>
                    <td className="py-3 px-4 border-b">carlos.torres@universidad.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtro. Antoni Cruz Vega</td>
                    <td className="py-3 px-4 border-b">Matemáticas</td>
                    <td className="py-3 px-4 border-b">antonio.cruz@universidad.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtra. Ana Sofia Juarez Barrera</td>
                    <td className="py-3 px-4 border-b">Redes</td>
                    <td className="py-3 px-4 border-b">ana.juarez@universidad.edu.mx</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
