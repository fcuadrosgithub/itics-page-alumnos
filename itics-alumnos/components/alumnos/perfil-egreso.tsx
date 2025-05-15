import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Globe, Network, PenTool, Users } from "lucide-react"

export default function PerfilEgreso() {
  const competencias = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Desarrollo de Software",
      description:
        "Capacidad para diseñar, implementar y mantener aplicaciones utilizando metodologías ágiles y buenas prácticas de programación.",
    },
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: "Redes y Telecomunicaciones",
      description:
        "Habilidad para diseñar, implementar y administrar infraestructuras de redes y sistemas de telecomunicaciones.",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Gestión de Datos",
      description:
        "Competencia para diseñar e implementar bases de datos, así como para analizar y procesar grandes volúmenes de información.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Tecnologías Web",
      description:
        "Capacidad para desarrollar aplicaciones y servicios web utilizando tecnologías modernas y frameworks actuales.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Trabajo en Equipo",
      description:
        "Habilidad para colaborar efectivamente en equipos multidisciplinarios y comunicar ideas técnicas de manera clara.",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Resolución de Problemas",
      description:
        "Capacidad analítica para identificar, formular y resolver problemas complejos aplicando principios de ingeniería.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Innovación",
      description: "Habilidad para proponer soluciones creativas e innovadoras a problemas tecnológicos actuales.",
    },
  ]

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Perfil de Egreso</CardTitle>
          <CardDescription>
            Objetivos educativos y competencias del egresado de la carrera de Ingeniería en Tecnologías de la
            Información y Comunicaciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            El egresado de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones es un profesional
            capaz de diseñar, implementar y administrar soluciones tecnológicas innovadoras que respondan a las
            necesidades actuales de las organizaciones, contribuyendo a su transformación digital y mejora continua.
          </p>

          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Objetivos Educativos Generales</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Formar profesionales con sólidos conocimientos técnicos en el área de las TICs.</li>
                  <li>
                    Desarrollar habilidades para el diseño e implementación de soluciones tecnológicas innovadoras.
                  </li>
                  <li>Fomentar la capacidad de adaptación a los cambios tecnológicos constantes.</li>
                  <li>Promover el pensamiento crítico y la resolución de problemas complejos.</li>
                  <li>Cultivar habilidades de comunicación efectiva y trabajo en equipo.</li>
                  <li>Impulsar una actitud ética y responsable en el ejercicio profesional.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mt-8 mb-4">Competencias del Egresado</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencias.map((competencia, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              {competencia.icon}
              <CardTitle className="text-lg">{competencia.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{competencia.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
