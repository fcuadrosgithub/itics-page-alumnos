import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"

export default function Temarios() {
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
                      <h4 className="font-bold text-[#003366]">Cálculo Diferencial</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Límites, continuidad, derivadas, aplicación de derivadas y funciones.
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
                      <h4 className="font-bold text-[#003366]">Matemáticas Discretas I</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Lógica, teoría de conjuntos, relaciones, funciones, grafos y combinatoria.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIF1019.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Introducción a las TIC's</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Historia, evolución y aplicaciones actuales de las Tecnologías de la Información y Comunicación.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="http://altiplano.tecnm.mx/planestudios/pltics/Introduccion%20a%20las%20TICs.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Taller de Ética</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Principios éticos, valores universales, responsabilidad social y toma de decisiones.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://acapulco.tecnm.mx/wp-content/uploads/carreras/ingenieria_en_gestion_empresarial/2/TALLER_DE_eTICA.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Fundamentos de Investigación</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Ciencia, método científico, técnicas de investigación y elaboración de proyectos.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://acapulco.tecnm.mx/wp-content/uploads/carreras/ingenieria_en_gestion_empresarial/1/FUNDAMENTOS_DE_INVESTIGACIoN.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                
                {/* Cálculo Integral */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Cálculo Integral</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Integración definida e indefinida, métodos de integración, aplicaciones en áreas, volúmenes y física.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/ACF0902.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Programación Orientada a Objetos */}
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

                {/* Matemáticas Discretas II */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Matemáticas Discretas II</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Álgebra booleana, funciones recursivas, autómatas, gramáticas y lenguajes formales.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIF1020.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Probabilidad y Estadística */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Probabilidad y Estadística</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Variables aleatorias, distribuciones de probabilidad, estadística descriptiva e inferencial.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/ACF0905.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contabilidad y Costos */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Contabilidad y Costos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Fundamentos de contabilidad financiera, estados financieros, costos fijos y variables, y punto de equilibrio.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIF1009.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Electricidad y Magnetismo */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#003366]">Electricidad y Magnetismo</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Leyes de Coulomb y Ohm, circuitos eléctricos, campo magnético e inducción electromagnética.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIC1011.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Matemáticas Aplicadas a Comunicaciones</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Aplicación de transformadas, ecuaciones diferenciales y series para el análisis de señales.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIE1018.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Estructura y Organización de Datos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Listas, pilas, colas, árboles, grafos y su implementación en lenguajes de programación.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.ittizimin.edu.mx/wp-content/uploads/2019/04/Estructuras-y-Organizacion-de-Datos.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Administración Gerencial</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Planeación estratégica, toma de decisiones, liderazgo, control y cultura organizacional.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIC1002.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Álgebra Lineal</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Vectores, matrices, determinantes, sistemas de ecuaciones lineales, espacios vectoriales y transformaciones lineales.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://acapulco.tecnm.mx/wp-content/uploads/carreras/ingenieria_en_gestion_empresarial/3/ALGEBRA_LINEAL.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Fundamentos de Bases de Datos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Introducción a bases de datos, modelo relacional, diseño lógico y físico, y lenguaje SQL.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://st03.tepic.tecnm.mx/files/asignaturas/AEF-1031_Fundamentos_de_Base_de_Datos.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
                      <h4 className="font-bold text-[#003366]">Circuitos Eléctricos y Electrónicos</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Leyes de circuitos, análisis de mallas y nodos, componentes electrónicos y uso de herramientas de simulación.
                      </p>
                      <div className="mt-3 flex items-center">
                        <Link href="https://tlahuac.tecnm.mx/PDFs/ferroviariacompetencias/4_AED-23117.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cuarto Semestre */}
<div>
  <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Cuarto Semestre</h3>
  <div className="grid md:grid-cols-2 gap-4">

    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-[#003366]">Análisis de Señales y Sistemas de Comunicación</h4>
          <p className="text-sm text-gray-600 mt-1">
            Análisis de señales continuas y discretas, sistemas lineales e invariantes, y su aplicación en comunicaciones.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TID1004.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Programación II</h4>
          <p className="text-sm text-gray-600 mt-1">
            Programación orientada a objetos, estructuras complejas, archivos, e interfaces gráficas.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="http://apizaco.tecnm.mx/wp-content/uploads/2021/12/TIB1024.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Matemáticas para la Toma de Decisiones</h4>
          <p className="text-sm text-gray-600 mt-1">
            Teoría de decisiones, programación lineal, teoría de juegos y aplicaciones para optimizar procesos.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/6.-Matematicas-para-la-Toma-de-Decisiones.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Fundamentos de Redes</h4>
          <p className="text-sm text-gray-600 mt-1">
            Modelos de referencia OSI y TCP/IP, direccionamiento IP, topologías y protocolos de red.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIF1013.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Taller de Base de Datos</h4>
          <p className="text-sm text-gray-600 mt-1">
            Implementación de bases de datos, diseño de consultas SQL avanzadas y administración de usuarios.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2023/10/TallerdeBasedeDatos-AE063.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
            Estructura interna de la computadora, organización de la memoria, buses, y ciclo de instrucción.
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
          <h4 className="font-bold text-[#003366]">Ingeniería de Software</h4>
          <p className="text-sm text-gray-600 mt-1">
            Ciclo de vida del software, modelos de desarrollo, análisis de requerimientos y documentación técnica.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="http://smartin.tecnm.mx/documents/Ingenier%C2%B0a-de-Software_1.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
              <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
            </Link>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

{/* Quinto Semestre */}
<div>
  <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Quinto Semestre</h3>
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-[#003366]">Redes de Computadora</h4>
          <p className="text-sm text-gray-600 mt-1">
            Protocolos de red, modelos OSI/TCP-IP, direccionamiento y configuración de redes.
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
          <h4 className="font-bold text-[#003366]">Telecomunicaciones</h4>
          <p className="text-sm text-gray-600 mt-1">
            Principios de transmisión, medios, modulación, multiplexión y estándares de telecomunicación.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/1.-Telecomunicaciones.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Desarrollo Sustentable</h4>
          <p className="text-sm text-gray-600 mt-1">
            Principios de sustentabilidad, impacto ambiental, energías limpias y responsabilidad social.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2023/10/DesarrolloSustentable-AC008.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Base de Datos Distribuidas</h4>
          <p className="text-sm text-gray-600 mt-1">
            Fragmentación, replicación, diseño, sincronización y consulta de bases distribuidas.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/4.-Bases-de-Datos-Distribuidas.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Sistemas Operativos I</h4>
          <p className="text-sm text-gray-600 mt-1">
            Administración de procesos, memoria, archivos, dispositivos y sistemas de archivos.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/6.-Sistemas-Operativos-I.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Taller de Ingeniería de Software</h4>
          <p className="text-sm text-gray-600 mt-1">
            Aplicación de metodologías para el análisis, diseño y construcción de software.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/7.-Taller-de-Ingenieria-de-Software.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Administración de Proyectos</h4>
          <p className="text-sm text-gray-600 mt-1">
            Planificación, ejecución, monitoreo y cierre de proyectos. Herramientas y roles del PM.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/2.-Administracion-de-Proyectos.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
              <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Sexto Semestre */}
<div>
  <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Sexto Semestre</h3>
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-[#003366]">Redes Emergentes</h4>
          <p className="text-sm text-gray-600 mt-1">
            Tecnologías modernas como IoT, redes definidas por software (SDN), y virtualización de funciones de red (NFV).
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/3.-Redes-Emergentes.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Programación WEB</h4>
          <p className="text-sm text-gray-600 mt-1">
            Desarrollo de aplicaciones web del lado cliente y servidor, tecnologías como HTML, CSS, JavaScript y frameworks.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/7.-Programacion-Web.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Desarrollo de Emprendedores</h4>
          <p className="text-sm text-gray-600 mt-1">
            Formación de emprendedores, generación de ideas de negocio, planes de empresa y análisis de viabilidad.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/2.-Desarrollo-de-Emprendedores.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Taller de Investigación I</h4>
          <p className="text-sm text-gray-600 mt-1">
            Metodología científica, planteamiento del problema, marco teórico y formulación de hipótesis.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/4.-Taller-de-Investigacion-I.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Sistemas Operativos II</h4>
          <p className="text-sm text-gray-600 mt-1">
            Procesos concurrentes, planificación, seguridad, sistemas distribuidos y administración avanzada.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/6.-Sistemas-Operativos-II.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Tecnologías Inalámbricas</h4>
          <p className="text-sm text-gray-600 mt-1">
            Comunicaciones móviles, Wi-Fi, Bluetooth, ZigBee, protocolos y diseño de redes inalámbricas.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/5.-Tecnologias-Inalambricas.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Interacción Humano Computadora</h4>
          <p className="text-sm text-gray-600 mt-1">
            Principios de diseño de interfaces, usabilidad, experiencia de usuario (UX) y prototipado.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/5.-Interaccion-Humano-Computadora.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
              <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Séptimo Semestre */}
<div>
  <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Séptimo Semestre</h3>
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-[#003366]">Desarrollo de Aplicaciones para Dispositivos Móviles</h4>
          <p className="text-sm text-gray-600 mt-1">
            Desarrollo de apps móviles multiplataforma, arquitectura, interfaces gráficas, uso de sensores y pruebas.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/1.-Aplicaciones-para-moviles.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Normativa en Seguridad de la Información</h4>
          <p className="text-sm text-gray-600 mt-1">
            Legislación, estándares, políticas y auditoría en seguridad informática, incluyendo normativas como ISO/IEC 27001.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2023/10/SeguridadInformatica.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Administración y Seguridad de Redes</h4>
          <p className="text-sm text-gray-600 mt-1">
            Técnicas de configuración, monitoreo, protección de redes de datos y análisis de vulnerabilidades.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/3.-Administracion-y-Seguridad-de-Redes.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Taller de Investigación II</h4>
          <p className="text-sm text-gray-600 mt-1">
            Desarrollo de proyectos de investigación, análisis de resultados y redacción de artículos o informes técnicos.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/4.-Taller-de-Investigacion-II.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Negocios Electrónicos I</h4>
          <p className="text-sm text-gray-600 mt-1">
            Fundamentos del comercio electrónico, plataformas digitales, marketing digital y modelos de negocio en línea.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/7.-Negocios-Electronicos-I.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
              <Download className="h-4 w-4 mr-1" /> Ver temario completo (PDF)
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Octavo Semestre */}
<div>
  <h3 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">Octavo Semestre</h3>
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <FileText className="h-6 w-6 text-[#003366] mr-3 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-[#003366]">Auditoría en Tecnologías de Información</h4>
          <p className="text-sm text-gray-600 mt-1">
            Proceso de evaluación de sistemas de información, controles internos, cumplimiento normativo y estándares.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/2.-Auditoria-en-T.-I.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Ingeniería del Conocimiento</h4>
          <p className="text-sm text-gray-600 mt-1">
            Modelado del conocimiento, sistemas expertos, bases de conocimiento y mecanismos de inferencia.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2021/12/TIC1015.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Ciberseguridad y Protección de Datos</h4>
          <p className="text-sm text-gray-600 mt-1">
            Principios de ciberseguridad, análisis de riesgos, privacidad, cifrado y protección de datos personales.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.puertopenasco.tecnm.mx/wp-content/uploads/2019/09/SDD-1702_Seguridad_Informatica.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Seguridad en Bases de Datos</h4>
          <p className="text-sm text-gray-600 mt-1">
            Técnicas para proteger la integridad, confidencialidad y disponibilidad de la información almacenada en bases de datos.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2023/10/Topicosdebasededatos.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Negocios Electrónicos II</h4>
          <p className="text-sm text-gray-600 mt-1">
            Desarrollo y administración de plataformas digitales, pagos en línea, logística, aspectos legales y estrategia.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://tics.voaxaca.tecnm.mx/wp-content/uploads/2023/08/7.-Negocios-Electronicos-II.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Seguridad de Cómputo en la Nube</h4>
          <p className="text-sm text-gray-600 mt-1">
            Principios de seguridad en entornos cloud, amenazas comunes, normativas y buenas prácticas para servicios en la nube.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.apizaco.tecnm.mx/wp-content/uploads/2025/04/IIAD-2408-Computo-en-la-nube.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
          <h4 className="font-bold text-[#003366]">Seguridad en la Ingeniería de Datos</h4>
          <p className="text-sm text-gray-600 mt-1">
            Seguridad en el ciclo de vida de los datos, desde su captura y almacenamiento hasta su análisis y visualización.
          </p>
          <div className="mt-3 flex items-center">
            <Link href="https://www.tuxtepec.tecnm.mx/repositorios/condensados/informatica/8sem/Seguridad%20Informatica.pdf" target="_blank" className="text-sm text-blue-600 hover:underline inline-flex items-center">
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
