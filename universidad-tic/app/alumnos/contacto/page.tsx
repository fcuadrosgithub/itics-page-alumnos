import Link from "next/link"
import { ArrowLeft, Mail, Phone, Clock, Building } from "lucide-react"

export default function Contacto() {
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
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Contacto</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              En esta sección encontrarás la información de contacto de los coordinadores, profesores y áreas
              administrativas de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones.
            </p>
          </div>

          {/* Información general de contacto */}
          <div className="flex flex-col mb-10 grid md:grid-cols-2 gap-6">
            <div className="w-full bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Dirección de la Carrera</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Building className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Edificio 1, Planta Alta</p>
                    <p className="text-gray-600">Ubicación de la carrera</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">01(738) 735-4000 ext. 270</p>
                    <p className="text-gray-600">Teléfono</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">tics@itsoeh.edu.mx</p>
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lic. Juan Cornejo Hernández</td>
                    <td className="py-3 px-4 border-b">Jefe de Carrera</td>
                    <td className="py-3 px-4 border-b">tics@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lic. Aracely Hernández Rojo</td>
                    <td className="py-3 px-4 border-b">Asistente de Carrera</td>
                    <td className="py-3 px-4 border-b">a.hernandez@itsoeh.edu.mx</td>
                  </tr>                  
                </tbody>
              </table>
            </div>
          </div>

          {/* Profesores por área */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-[#003366] mb-6">Profesores</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Nombre</th>
                    <th className="py-3 px-4 text-left font-semibold text-[#003366] border-b">Correo electrónico</th>
                  </tr>
                </thead>
                <tbody>         
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtra. Yadira Eufemia Gaspar Morales</td>
                    <td className="py-3 px-4 border-b">ygaspar@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtro. José Martin Oropeza Méndez</td>
                    <td className="py-3 px-4 border-b">jmoropeza@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Dra. Talhia Heidi Hernández Omaña</td>
                    <td className="py-3 px-4 border-b">thernandez@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtro. Saúl Isaí Soto Ortiz</td>
                    <td className="py-3 px-4 border-b">ssoto@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtro. Pedro Jhoan Salazar Pérez</td>
                    <td className="py-3 px-4 border-b">psalazar@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lic. Agustín Soto Arista</td>
                    <td className="py-3 px-4 border-b">asoto@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Mtra. María Guadalupe Tolentino Cruz</td>
                    <td className="py-3 px-4 border-b">mtolentino@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Ing. Giovany Humberto Neri Pérez</td>
                    <td className="py-3 px-4 border-b">gneri@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Dr. Francisco Javier Cuadros Romero</td>
                    <td className="py-3 px-4 border-b">fcuadros@itsoeh.edu.mx</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">Lic. Eunice Santiago Manzano</td>
                    <td className="py-3 px-4 border-b">esantiago@itsoeh.edu.mx</td>
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
