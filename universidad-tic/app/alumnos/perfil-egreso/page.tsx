import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PerfilEgreso() {
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
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Perfil de Egreso</h2>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-[#003366] mb-4">Objetivos Educativos</h3>
            <p className="text-gray-700 mb-4">
              El programa de Ingeniería en Tecnologías de la Información y Comunicaciones tiene como objetivo formar
              profesionales capaces de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Diseñar, implementar y administrar infraestructuras tecnológicas que soporten las operaciones de
                organizaciones modernas.
              </li>
              <li>
                Desarrollar soluciones de software innovadoras que respondan a las necesidades del mercado actual.
              </li>
              <li>
                Gestionar proyectos tecnológicos aplicando metodologías ágiles y buenas prácticas de la industria.
              </li>
              <li>
                Implementar estrategias de seguridad informática para proteger los activos de información de las
                organizaciones.
              </li>
              <li>
                Analizar grandes volúmenes de datos para la toma de decisiones estratégicas en las organizaciones.
              </li>
              <li>
                Integrar tecnologías emergentes como inteligencia artificial, Internet de las Cosas y computación en la
                nube en soluciones empresariales.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-[#003366] mb-4">Atributos de Egreso</h3>
            <p className="text-gray-700 mb-4">
              Al finalizar el programa, los egresados habrán desarrollado los siguientes atributos:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[#003366] pl-4">
                <h4 className="font-bold text-lg text-[#003366] mb-2">Competencias Técnicas</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Dominio de lenguajes de programación modernos (Java, Python, JavaScript, etc.)</li>
                  <li>Diseño y administración de bases de datos relacionales y NoSQL</li>
                  <li>Configuración y mantenimiento de redes de computadoras</li>
                  <li>Implementación de soluciones en la nube (AWS, Azure, Google Cloud)</li>
                  <li>Desarrollo de aplicaciones web y móviles</li>
                  <li>Aplicación de principios de ciberseguridad</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#003366] pl-4">
                <h4 className="font-bold text-lg text-[#003366] mb-2">Habilidades Profesionales</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Gestión efectiva de proyectos tecnológicos</li>
                  <li>Comunicación técnica clara y efectiva</li>
                  <li>Trabajo colaborativo en equipos multidisciplinarios</li>
                  <li>Resolución creativa de problemas complejos</li>
                  <li>Adaptación rápida a nuevas tecnologías y metodologías</li>
                  <li>Aprendizaje continuo y autogestión del conocimiento</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#003366] pl-4">
                <h4 className="font-bold text-lg text-[#003366] mb-2">Actitudes y Valores</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Ética profesional y responsabilidad social</li>
                  <li>Compromiso con la calidad y la mejora continua</li>
                  <li>Innovación y pensamiento crítico</li>
                  <li>Liderazgo y emprendimiento</li>
                  <li>Respeto por la propiedad intelectual</li>
                  <li>Conciencia sobre el impacto ambiental de las soluciones tecnológicas</li>
                </ul>
              </div>
            </div>
          </section>
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
