import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Especialidad() {
  const modulosEspecialidad = [
    {
      claveInterna: 39,
      nombre: "Administración en Tecnologías Web",
      reticula: "No disponible",
    },
    {
      claveInterna: 42,
      nombre: "Hacking Ético y Seguridad Cibernética",
      reticula: "No disponible",
    },
    {
      claveInterna: 51,
      nombre: "Ciberseguridad y Protección de Datos",
      reticula: "No disponible",
    },
    {
      claveInterna: 73,
      nombre: "Seguridad de la Información en Tecnologías Emergentes",
      reticula: "No disponible",
    },
    {
      claveInterna: 88,
      nombre: "Analítica de Datos y Seguridad en Tecnologías Emergentes",
      reticula: "No disponible",
    },
  ]

  const competenciasHabilidades = [
    "Diseñar, implementar y administrar redes de cómputo y comunicaciones, bajo modelos y estándares internacionales, para satisfacer las necesidades de información de los sistemas sociales, garantizando aspectos de seguridad y calidad.",
    "Diseñar, desarrollar y mantener sistemas de bases de datos asegurando la integridad, disponibilidad y confidencialidad de la información almacenada.",
    "Integrar las diferentes arquitecturas de hardware y administrar plataformas de software para incrementar la productividad en las organizaciones.",
    "Implementar sistemas de seguridad bajo políticas internas de las organizaciones y estándares aceptados.",
    "Observar los aspectos legales del uso y explotación de las Tecnologías de la Información y Comunicaciones.",
    "Desarrollar e implementar sistemas de información para el control y la toma de decisiones utilizando metodologías basadas en estándares internacionales.",
    "Analizar, diseñar y programar dispositivos con software empotrado.",
    "Utilizar tecnologías y herramientas actuales y emergentes acordes a las necesidades del entorno.",
    "Integrar soluciones basadas en sistemas de comunicaciones que involucren tecnologías actuales y emergentes.",
    "Desempeñar funciones de consultoría y auditoría en el campo de las Tecnologías de la Información y Comunicaciones.",
    "Crear empresas en el ámbito de las Tecnologías de la Información y Comunicaciones.",
    "Administrar proyectos que involucren Tecnologías de la Información y Comunicaciones en las organizaciones conforme a requerimientos establecidos.",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Especialidad</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Conoce los módulos de especialidad y las competencias profesionales que desarrollarás en nuestra carrera de
          Ingeniería en Sistemas Computacionales.
        </p>
      </div>

      {/* Módulos de Especialidad */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Módulos de Especialidad</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-pink-50">
                <TableHead className="text-pink-700 font-semibold">Clave Interna</TableHead>
                <TableHead className="text-pink-700 font-semibold">Nombre del Módulo</TableHead>
                <TableHead className="text-pink-700 font-semibold">Retícula</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modulosEspecialidad.map((modulo, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-pink-600">{modulo.claveInterna}</TableCell>
                  <TableCell className="font-medium">{modulo.nombre}</TableCell>
                  <TableCell className="text-gray-500">{modulo.reticula}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Competencias y Habilidades */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Competencias y Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competenciasHabilidades.map((competencia, index) => (
            <Card
              key={index}
              className="h-full border-l-4 border-pink-300 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="bg-pink-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{competencia}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
