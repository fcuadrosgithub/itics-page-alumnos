import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Code,
  Network,
  Users,
  Shield,
  Building,
  Lightbulb,
  Target,
  GraduationCap,
} from "lucide-react"

export default function PerfilEgreso() {
  const objetivosEducacionales = [
    {
      codigo: "OE1",
      descripcion:
        "Diseñan, implementan y administran redes de cómputo y comunicaciones, bajo estándares de seguridad de la información.",
      icono: <Network className="h-6 w-6 text-blue-600" />,
    },
    {
      codigo: "OE2",
      descripcion: "Desarrollan software basado en metodologías emergentes.",
      icono: <Code className="h-6 w-6 text-green-600" />,
    },
    {
      codigo: "OE3",
      descripcion:
        "Desempeñan funciones de auditoría en el campo de las Tecnologías de la Información y Comunicaciones.",
      icono: <Shield className="h-6 w-6 text-red-600" />,
    },
    {
      codigo: "OE4",
      descripcion:
        "Participan en proyectos de TI o crea empresas, en el ámbito de las tecnologías de la información bajo un marco legal.",
      icono: <Building className="h-6 w-6 text-purple-600" />,
    },
  ]

  const atributosEgresado = [
    {
      codigo: "AE1",
      descripcion:
        "Identifica, formula y resuelve problemas complejos de desarrollo de software...",
      categoria: "Desarrollo de Software",
    },
    {
      codigo: "AE2",
      descripcion:
        "Analiza, implementa y administra redes de computadoras para la transferencia de datos...",
      categoria: "Redes y Comunicaciones",
    },
    {
      codigo: "AE3",
      descripcion:
        "Diseña e Implementa soluciones utilizando las tecnologías de la información...",
      categoria: "Soluciones Integrales",
    },
    {
      codigo: "AE4",
      descripcion:
        "Identifica, formula y resuelve problemas de ingeniería aplicando los principios y teorías...",
      categoria: "Fundamentos de Ingeniería",
    },
    {
      codigo: "AE5",
      descripcion:
        "Implementa comunicación integral, clara y efectiva, con diferentes audiencias...",
      categoria: "Comunicación",
    },
    {
      codigo: "AE6",
      descripcion:
        "Aplicar el marco legal en el desempeño de funciones que involucren tecnologías...",
      categoria: "Marco Legal y Ética",
    },
    {
      codigo: "AE7",
      descripcion:
        "Identifica la necesidad de mantenerse actualizado en las nuevas tendencias...",
      categoria: "Aprendizaje Continuo",
    },
    {
      codigo: "AE8",
      descripcion:
        "Trabaja efectivamente en equipos de manera autónoma y autorregulada...",
      categoria: "Trabajo en Equipo",
    },
    {
      codigo: "AE9",
      descripcion:
        "Implementa soluciones de seguridad y auditoría en tecnologías de la información...",
      categoria: "Seguridad y Auditoría",
    },
  ]

  const perfilEgresado = [
    "Diseñar, implementar y administrar redes de cómputo y comunicaciones...",
    "Diseñar, desarrollar y mantener sistemas de bases de datos...",
    "Integrar las diferentes arquitecturas de hardware y administrar plataformas de software...",
    "Implementar sistemas de seguridad bajo políticas internas...",
    "Observar los aspectos legales del uso y explotación de las TIC...",
    "Desarrollar e implementar sistemas de información para el control...",
    "Analizar, diseñar y programar dispositivos con software empotrado.",
    "Utilizar tecnologías y herramientas actuales y emergentes...",
    "Integrar soluciones basadas en sistemas de comunicaciones...",
    "Desempeñar funciones de consultoría y auditoría en el campo de las TIC.",
    "Crear empresas en el ámbito de las Tecnologías de la Información...",
    "Administrar proyectos que involucren Tecnologías de la Información...",
  ]

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Perfil de Egreso
          </CardTitle>
          <CardDescription>
            Objetivos educacionales, atributos y competencias del egresado de la carrera de Ingeniería en Tecnologías de
            la Información y Comunicaciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            El egresado de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones es un profesional
            capaz de diseñar, implementar y administrar soluciones tecnológicas innovadoras que respondan a las
            necesidades actuales de las organizaciones, contribuyendo a su transformación digital y mejora continua.
          </p>

          <Accordion type="multiple" className="space-y-4">
            {/* Perfil del Egresado (ahora primero) */}
            <AccordionItem value="perfil" className="border rounded-lg px-4">
              <AccordionTrigger className="py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Perfil del Egresado</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="space-y-3">
                  {perfilEgresado.map((competencia, index) => (
                    <div key={index} className="p-3 border rounded-lg bg-muted/30">
                      <p className="text-sm">{competencia}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Atributos del Egresado */}
            <AccordionItem value="atributos" className="border rounded-lg px-4">
              <AccordionTrigger className="py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Atributos del Egresado</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="grid gap-4">
                  {atributosEgresado.map((atributo) => (
                    <div key={atributo.codigo} className="p-4 border rounded-lg bg-muted/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{atributo.codigo}</Badge>
                        <Badge variant="outline">{atributo.categoria}</Badge>
                      </div>
                      <p className="text-sm">{atributo.descripcion}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Objetivos Educacionales */}
            <AccordionItem value="objetivos" className="border rounded-lg px-4">
              <AccordionTrigger className="py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold">Objetivos Educacionales</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="grid gap-4">
                  {objetivosEducacionales.map((objetivo) => (
                    <div key={objetivo.codigo} className="flex gap-4 p-4 border rounded-lg bg-muted/30">
                      <div className="flex-shrink-0">{objetivo.icono}</div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {objetivo.codigo}
                        </Badge>
                        <p className="text-sm">{objetivo.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
