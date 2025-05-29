import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PerfilEgreso() {
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
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Perfil de Egreso</h2>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-[#003366] mb-4">Tecnológico Nacional de México</h3>

            <div className="border-l-4 border-[#003366] pl-4">
              <ul className="list-disc pl-4 space-y-2 text-gray-700">
                <li>Diseñar, implementar y administrar redes de cómputo y comunicaciones, bajo modelos y estándares internacionales, para satisfacer las necesidades de información de los sistemas sociales, garantizando aspectos de seguridad y calidad.</li>
                <li>Diseñar, desarrollar y mantener sistemas de bases de datos asegurando la integridad, disponibilidad y confidencialidad de la información almacenada.</li>
                <li>Integrar las diferentes arquitecturas de hardware y administrar plataformas de software para incrementar la productividad en las organizaciones.</li>
                <li>Implementar sistemas de seguridad bajo políticas internas de las organizaciones y estándares aceptados.</li>
                <li>Observar los aspectos legales del uso y explotación de las Tecnologías de la Información y Comunicaciones.</li>
                <li>Desarrollar e implementar sistemas de información para el control y la toma de decisiones utilizando metodologías basadas en estándares internacionales.</li>
                <li>Analizar, diseñar y programar dispositivos con software empotrado.</li>
                <li>Utilizar tecnologías y herramientas actuales y emergentes acordes a las necesidades del entorno.</li>
                <li>Integrar soluciones basadas en sistemas de comunicaciones que involucren tecnologías actuales y emergentes.</li>
                <li>Desempeñar funciones de consultoría y auditoría en el campo de las Tecnologías de la Información y Comunicaciones.</li>
                <li>Crear empresas en el ámbito de las Tecnologías de la Información y Comunicaciones.</li>
                <li>Administrar proyectos que involucren Tecnologías de la Información y Comunicaciones en las organizaciones conforme a requerimientos establecidos.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold text-[#003366] mb-4">Objetivos Educativos</h3>
            <p className="text-gray-700 mb-4">
              El programa de Ingeniería en Tecnologías de la Información y Comunicaciones tiene como objetivo formar
              profesionales capaces de:
            </p>
            <ul className="list-none pl-6 space-y-2 text-gray-700">
              <li>
                <strong>OE1.</strong> Diseñar, implementar y administrar redes de cómputo y comunicaciones, bajo estándares de seguridad de la información.
              </li>
              <li>
                <strong>OE2.</strong> Desarrollar software basado en metodologías emergentes.
              </li>
              <li>
                <strong>OE3.</strong> Desempeñar funciones de auditoría en el campo de las Tecnologías de la Información y Comunicaciones.
              </li>
              <li>
                <strong>OE4.</strong> Participar en proyectos de TI o crear empresas, en el ámbito de las tecnologías de la información bajo un marco legal.
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
                <ul className="list-none pl-4 space-y-2 text-gray-700">
                  <li>
                    <strong>AE1.</strong> Identifica, formula y resuelve problemas complejos de desarrollo de software, utilizando técnicas, métodos, herramientas, estándares y normas para sistematizar procesos en las organizaciones, garantizando el almacenamiento de la información.
                  </li>
                  <li>
                    <strong>AE2.</strong> Analiza, implementa y administra redes de computadoras para la transferencia de datos y comunicación de información, mediante estándares internacionales de seguridad informática en las organizaciones, aplicando el juicio ingenieril.
                  </li>
                  <li>
                    <strong>AE3.</strong> Diseña e implementa soluciones utilizando las tecnologías de la información y comunicaciones, con una comunicación efectiva y trabajo en equipo que cumplan los requerimientos y necesidades del sector, tomando en cuenta viabilidad: económica, ambiental, social, política, tecnológica y de sostenibilidad.
                  </li>
                  <li>
                    <strong>AE4.</strong> Identifica, formula y resuelve problemas de ingeniería aplicando los principios y teorías de las ciencias básicas, así como técnicas, métodos y herramientas de Ingeniería en tecnologías de la información y comunicaciones, conduciendo experimentaciones adecuadas.
                  </li>
                  <li>
                    <strong>AE5.</strong> Implementa comunicación integral, clara y efectiva, con diferentes audiencias, expresando pensamientos, conocimientos y experiencias en el ámbito profesional, para el desempeño de sus funciones en el entorno laboral.
                  </li>
                  <li>
                    <strong>AE6.</strong> Aplicar el marco legal en el desempeño de funciones que involucren tecnologías de la información y comunicaciones en el entorno laboral, con responsabilidad y ética profesional.
                  </li>
                  <li>
                    <strong>AE7.</strong> Identifica la necesidad de mantenerse actualizado en las nuevas tendencias de la Ingeniería en Tecnologías de la información y comunicaciones, que permita integrar y aplicar este conocimiento en su ejercicio profesional.
                  </li>
                  <li>
                    <strong>AE8.</strong> Trabaja efectivamente en equipos de manera autónoma y autorregulada en los ámbitos de la Ingeniería en Tecnologías de la Información, estableciendo metas, tareas, fechas límites, analizando riesgos e incertidumbre.
                  </li>
                  <li>
                    <strong>AE9.</strong> Implementa soluciones de seguridad y auditoría en tecnologías de la información y comunicaciones a través de técnicas, métodos, herramientas, estándares y normas para sistematizar procesos en las organizaciones para promover, mantener en criterios de calidad, eficiencia y productividad.
                  </li>
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
