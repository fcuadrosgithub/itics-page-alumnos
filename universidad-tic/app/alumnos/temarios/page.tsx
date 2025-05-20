import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"

export default function Temarios() {
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
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Temarios de las Materias</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              En esta sección encontrarás los temarios detallados de todas las asignaturas del programa de Ingeniería en
              Tecnologías de la Información y Comunicaciones. Los temarios incluyen los objetivos, contenidos,
              metodología de enseñanza, criterios de evaluación y bibliografía recomendada para cada materia.
            </p>
          </div>

          {/* Temarios por semestre */}
          <div className="space-y-8">
            {/* Primer Semestre */}
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Primer Semestre</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Fundamentos de Programación</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Introducción a la programación, algoritmos, estructuras de control, funciones y arreglos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/AEF1032.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Matemáticas Discretas</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Lógica, teoría de conjuntos, relaciones, funciones, teoría de grafos y combinatoria.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIF1019.pdf" target="_blank"  className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Arquitectura de Computadoras</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Componentes de hardware, organización de computadoras, memoria, procesadores y periféricos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2023/10/ArquitecturadeComputadoras.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Inglés I</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Gramática básica, vocabulario técnico, comprensión lectora y expresión oral.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.libres.tecnm.mx/img/Formatos/idiomas/IT.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Segundo Semestre */}
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Segundo Semestre</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Programación Orientada a Objetos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Clases, objetos, herencia, polimorfismo, encapsulamiento y abstracción.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2023/10/ProgramacionOrientadaaObjetos-AE054.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Cálculo Diferencial e Integral</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Límites, derivadas, integrales, aplicaciones y métodos numéricos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/ACF0901.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Sistemas Operativos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Estructura, procesos, hilos, administración de memoria y sistemas de archivos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.tuxtepec.tecnm.mx/repositorios/condensados/sistemas/5sem/AE061%20Sistemas%20Operativos%20I.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Bases de Datos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Modelado de datos, normalización, SQL, diseño e implementación de bases de datos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/AEF1031.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tercer Semestre */}
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Tercer Semestre</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Estructuras de datos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Programación, algoritmos, estructuras de control, funciones y arreglos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/AEF1032.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Probalilidad</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Lógica, teoría de conjuntos, relaciones, funciones, teoría de grafos y combinatoria.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2023/10/ProbabilidadyEstadistica-AE052.pdf" target="_blank"  className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Redes</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Componentes de hardware, organización de computadoras, memoria, procesadores y periféricos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.itsoeh.edu.mx/front/documentos/PILA2021/TICS/Redes%20de%20Computadoras.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Taller de Bases de datos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Modelado de datos, normalización, SQL, diseño e implementación de bases de datos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/AEA1063.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
