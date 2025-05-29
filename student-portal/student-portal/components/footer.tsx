import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-pink-300">ITSOEH</h3>
            <p className="text-gray-300">Instituto Tecnológico Superior del Occidente del Estado de Hidalgo</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/especialidad" className="text-gray-300 hover:text-pink-300">
                  Especialidad
                </Link>
              </li>
              <li>
                <Link href="/plan-estudios" className="text-gray-300 hover:text-pink-300">
                  Plan de Estudios
                </Link>
              </li>
              <li>
                <Link href="/calendario" className="text-gray-300 hover:text-pink-300">
                  Calendario Académico
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/recursos-estudiantes" className="text-gray-300 hover:text-pink-300">
                  Recursos para Estudiantes
                </Link>
              </li>
              <li>
                <Link href="/necesitas-ayuda" className="text-gray-300 hover:text-pink-300">
                  Necesitas Ayuda
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300">Contacto</h4>
            <address className="not-italic text-gray-300">
              <p>Paseo del Agrarismo 2000</p>
              <p>Mixquiahuala, Hidalgo, México</p>
              <p className="mt-2">
                <a href="mailto:contacto@itsoeh.edu.mx" className="hover:text-pink-300">
                  contacto@itsoeh.edu.mx
                </a>
              </p>
              <p>
                <a href="tel:+527389724080" className="hover:text-pink-300">
                  (738) 972-4080
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ITSOEH. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
