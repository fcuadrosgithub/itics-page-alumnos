import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlanesTemarios() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Planes y Temarios</h1>
        <p className="text-muted-foreground mt-2">
          Consulta los planes de estudio y temarios de la carrera de Ingeniería en Tecnologías de la Información y
          Comunicaciones.
        </p>
      </div>

      <Tabs defaultValue="plan-estudios">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="plan-estudios">Plan de Estudios</TabsTrigger>
          <TabsTrigger value="temarios">Temarios</TabsTrigger>
        </TabsList>

        <TabsContent value="plan-estudios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plan de Estudios ITIC-2010-225</CardTitle>
              <CardDescription>
                Plan de estudios vigente para la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Primer Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Cálculo Diferencial</li>
                      <li>Fundamentos de Programación</li>
                      <li>Taller de Ética</li>
                      <li>Matemáticas Discretas</li>
                      <li>Fundamentos de Investigación</li>
                      <li>Taller de Administración</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Segundo Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Cálculo Integral</li>
                      <li>Programación Orientada a Objetos</li>
                      <li>Contabilidad y Costos</li>
                      <li>Química</li>
                      <li>Álgebra Lineal</li>
                      <li>Probabilidad y Estadística</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Tercer Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Cálculo Vectorial</li>
                      <li>Estructura de Datos</li>
                      <li>Cultura Empresarial</li>
                      <li>Investigación de Operaciones</li>
                      <li>Física General</li>
                      <li>Sistemas Operativos</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Cuarto Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Ecuaciones Diferenciales</li>
                      <li>Métodos Numéricos</li>
                      <li>Tópicos Avanzados de Programación</li>
                      <li>Fundamentos de Bases de Datos</li>
                      <li>Simulación</li>
                      <li>Principios Eléctricos y Aplicaciones Digitales</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Quinto Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Fundamentos de Telecomunicaciones</li>
                      <li>Sistemas de Información</li>
                      <li>Taller de Bases de Datos</li>
                      <li>Graficación</li>
                      <li>Arquitectura de Computadoras</li>
                      <li>Ingeniería de Software</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Sexto Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Redes de Computadoras</li>
                      <li>Administración de Bases de Datos</li>
                      <li>Programación Web</li>
                      <li>Sistemas Programables</li>
                      <li>Lenguajes y Autómatas I</li>
                      <li>Taller de Ingeniería de Software</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Séptimo Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Redes Emergentes</li>
                      <li>Taller de Investigación I</li>
                      <li>Desarrollo de Aplicaciones para Dispositivos Móviles</li>
                      <li>Lenguajes y Autómatas II</li>
                      <li>Gestión de Proyectos de Software</li>
                      <li>Especialidad</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Octavo Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Administración y Seguridad de Redes</li>
                      <li>Taller de Investigación II</li>
                      <li>Auditoría en Tecnologías de la Información</li>
                      <li>Inteligencia Artificial</li>
                      <li>Especialidad</li>
                      <li>Especialidad</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold mb-2">Noveno Semestre</h3>
                    <ul className="space-y-1 text-sm">
                      <li>Residencia Profesional</li>
                      <li>Servicio Social</li>
                      <li>Actividades Complementarias</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button>Descargar Plan de Estudios Completo</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="temarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Temarios por Semestre</CardTitle>
              <CardDescription>Selecciona el semestre para ver los temarios de las asignaturas</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Primer Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Cálculo Diferencial</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Fundamentos de Programación</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Taller de Ética</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Matemáticas Discretas</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Fundamentos de Investigación</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Taller de Administración</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Segundo Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Cálculo Integral</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Programación Orientada a Objetos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Contabilidad y Costos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Química</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Álgebra Lineal</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Probabilidad y Estadística</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Tercer Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Cálculo Vectorial</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Estructura de Datos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Cultura Empresarial</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Investigación de Operaciones</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Física General</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Sistemas Operativos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Cuarto Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Ecuaciones Diferenciales</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Métodos Numéricos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Tópicos Avanzados de Programación</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Fundamentos de Bases de Datos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Simulación</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Principios Eléctricos y Aplicaciones Digitales</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Quinto Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Fundamentos de Telecomunicaciones</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Sistemas de Información</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Taller de Bases de Datos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Graficación</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Arquitectura de Computadoras</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Ingeniería de Software</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Sexto Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Redes de Computadoras</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Administración de Bases de Datos</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Programación Web</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Sistemas Programables</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Lenguajes y Autómatas I</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Taller de Ingeniería de Software</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Séptimo Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Redes Emergentes</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Taller de Investigación I</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Desarrollo de Aplicaciones para Dispositivos Móviles</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Lenguajes y Autómatas II</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Gestión de Proyectos de Software</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Octavo Semestre</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Administración y Seguridad de Redes</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Taller de Investigación II</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Auditoría en Tecnologías de la Información</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-semibold">Inteligencia Artificial</h3>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Ver temario completo
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
