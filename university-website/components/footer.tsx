import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a2463] text-white">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">ITSOEH</h3>
            <p className="text-sm text-gray-300">Instituto Tecnológico Superior del Occidente del Estado de Hidalgo</p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/aspirantes" className="hover:text-white">
                  Aspirantes
                </Link>
              </li>
              <li>
                <Link href="/alumnos" className="hover:text-white">
                  Alumnos
                </Link>
              </li>
              <li>
                <Link href="/docentes" className="hover:text-white">
                  Docentes
                </Link>
              </li>
              <li>
                <Link href="/egresados" className="hover:text-white">
                  Egresados
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Información</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Transparencia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Normatividad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Directorio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mapa del Sitio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>Paseo del Agrarismo 2000,</p>
              <p>Carr. Mixquiahuala-Tula km 2.5,</p>
              <p>Mixquiahuala de Juárez, Hidalgo, 42700</p>
              <p className="mt-2">Tel: (738) 123-4567</p>
              <p>Email: contacto@itsoeh.edu.mx</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
