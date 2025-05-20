import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Calendar, CheckCircle2, ClipboardList, HelpCircle, Star, ThumbsUp } from "lucide-react"

export default function EvaluacionDocentePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Evaluación Docente</h1>
        <p className="text-muted-foreground mt-2">
          Sistema de evaluación del desempeño docente para mejorar la calidad educativa.
        </p>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <Calendar className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800">Periodo de evaluación activo</AlertTitle>
        <AlertDescription className="text-blue-700">
          El periodo de evaluación docente para el semestre Enero-Junio 2025 está abierto del 20 de mayo al 5 de junio
          de 2025.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="informacion" className="space-y-4">
        <TabsList>
          <TabsTrigger value="informacion">Información General</TabsTrigger>
          <TabsTrigger value="proceso">Proceso de Evaluación</TabsTrigger>
          <TabsTrigger value="sistema">Sistema de Evaluación</TabsTrigger>
          <TabsTrigger value="preguntas">Preguntas Frecuentes</TabsTrigger>
        </TabsList>

        <TabsContent value="informacion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>¿Qué es la Evaluación Docente?</CardTitle>
              <CardDescription>
                Conoce la importancia de la evaluación docente y su impacto en la calidad educativa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                La Evaluación Docente es un proceso sistemático que permite a los estudiantes valorar el desempeño de
                sus profesores en diferentes aspectos del proceso de enseñanza-aprendizaje. Esta evaluación es una
                herramienta fundamental para la mejora continua de la calidad educativa en el ITSOEH.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-[#0a2463] p-2 mr-3">
                      <ThumbsUp className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold">Objetivos de la Evaluación</h3>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Identificar fortalezas y áreas de oportunidad en la práctica docente.</li>
                    <li>Proporcionar retroalimentación a los profesores para mejorar su desempeño.</li>
                    <li>Contribuir a la toma de decisiones académicas y administrativas.</li>
                    <li>Promover la cultura de evaluación y mejora continua.</li>
                    <li>Asegurar la calidad de los programas educativos.</li>
                  </ul>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-[#0a2463] p-2 mr-3">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold">Beneficios para los Estudiantes</h3>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Mejora en la calidad de la enseñanza que recibes.</li>
                    <li>Participación activa en la mejora de tu formación profesional.</li>
                    <li>Expresión de tus opiniones y sugerencias de manera estructurada.</li>
                    <li>Contribución al desarrollo institucional.</li>
                    <li>Requisito para reinscripción al siguiente semestre.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Aspectos evaluados</h3>
                <p className="mt-1">
                  La evaluación docente considera diversos aspectos del desempeño del profesor, agrupados en las
                  siguientes dimensiones:
                </p>

                <div className="grid gap-4 md:grid-cols-3 mt-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Dominio de la asignatura</h4>
                    <div className="mt-2 space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Conocimiento del tema</span>
                          <span className="text-sm">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Actualización</span>
                          <span className="text-sm">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Aplicación práctica</span>
                          <span className="text-sm">10%</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Metodología de enseñanza</h4>
                    <div className="mt-2 space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Claridad explicativa</span>
                          <span className="text-sm">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Recursos didácticos</span>
                          <span className="text-sm">10%</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Fomento participación</span>
                          <span className="text-sm">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Evaluación y actitud</h4>
                    <div className="mt-2 space-y-2">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Métodos de evaluación</span>
                          <span className="text-sm">10%</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Puntualidad y asistencia</span>
                          <span className="text-sm">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Actitud y respeto</span>
                          <span className="text-sm">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 mt-6">
                <h3 className="font-semibold">Confidencialidad de la evaluación</h3>
                <p className="mt-2">
                  Las evaluaciones que realizas son completamente anónimas. Los profesores reciben únicamente
                  información estadística y comentarios sin identificación del estudiante. Esto garantiza que puedas
                  expresar tus opiniones con total libertad y honestidad.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proceso" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Proceso de Evaluación Docente</CardTitle>
              <CardDescription>Conoce cómo se lleva a cabo la evaluación de tus profesores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      1
                    </span>
                    Apertura del periodo de evaluación
                  </h3>
                  <div className="ml-8">
                    <p>
                      La Subdirección Académica establece las fechas para el periodo de evaluación docente, generalmente
                      dos semanas antes de finalizar el semestre. Se notifica a los estudiantes a través de:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Correo institucional</li>
                      <li>Avisos en el Sistema Integral de Información (SII)</li>
                      <li>Publicaciones en redes sociales oficiales</li>
                      <li>Anuncios en los tableros informativos</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      2
                    </span>
                    Acceso al sistema de evaluación
                  </h3>
                  <div className="ml-8">
                    <p>
                      Durante el periodo establecido, debes ingresar al Sistema de Evaluación Docente a través del SII
                      con tu número de control y contraseña. El sistema mostrará la lista de profesores y asignaturas
                      que debes evaluar.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline">Acceder al Sistema de Evaluación</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      3
                    </span>
                    Realización de la evaluación
                  </h3>
                  <div className="ml-8">
                    <p>
                      Para cada profesor, deberás responder un cuestionario que evalúa diferentes aspectos de su
                      desempeño. El cuestionario consta de aproximadamente 20 preguntas agrupadas en las dimensiones
                      mencionadas anteriormente.
                    </p>
                    <p className="mt-2">
                      Las preguntas se responden utilizando una escala de valoración del 1 al 5, donde:
                    </p>
                    <div className="grid grid-cols-5 gap-2 mt-2">
                      <div className="text-center p-2 rounded bg-red-100">
                        <span className="font-semibold">1</span>
                        <p className="text-xs">Totalmente en desacuerdo</p>
                      </div>
                      <div className="text-center p-2 rounded bg-orange-100">
                        <span className="font-semibold">2</span>
                        <p className="text-xs">En desacuerdo</p>
                      </div>
                      <div className="text-center p-2 rounded bg-yellow-100">
                        <span className="font-semibold">3</span>
                        <p className="text-xs">Neutral</p>
                      </div>
                      <div className="text-center p-2 rounded bg-green-100">
                        <span className="font-semibold">4</span>
                        <p className="text-xs">De acuerdo</p>
                      </div>
                      <div className="text-center p-2 rounded bg-emerald-100">
                        <span className="font-semibold">5</span>
                        <p className="text-xs">Totalmente de acuerdo</p>
                      </div>
                    </div>
                    <p className="mt-2">
                      Adicionalmente, podrás incluir comentarios y sugerencias específicas para cada profesor.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      4
                    </span>
                    Envío y confirmación
                  </h3>
                  <div className="ml-8">
                    <p>
                      Una vez completada la evaluación de todos tus profesores, debes enviar las respuestas. El sistema
                      generará un comprobante de evaluación que puedes descargar o imprimir como evidencia de haber
                      cumplido con este requisito.
                    </p>
                    <div className="rounded-lg bg-green-50 border border-green-200 p-4 mt-2">
                      <h4 className="font-semibold flex items-center text-green-800">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                        Importante
                      </h4>
                      <p className="mt-1 text-green-700">
                        Debes evaluar a TODOS los profesores de las asignaturas que cursas en el semestre actual. La
                        evaluación docente es un requisito obligatorio para tu reinscripción al siguiente semestre.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      5
                    </span>
                    Procesamiento de resultados
                  </h3>
                  <div className="ml-8">
                    <p>
                      Una vez finalizado el periodo de evaluación, la Subdirección Académica procesa los resultados y
                      genera reportes estadísticos para:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Cada profesor (informe individual)</li>
                      <li>Jefes de departamento (informes por academia)</li>
                      <li>Directivos (informes institucionales)</li>
                    </ul>
                    <p className="mt-2">
                      Estos resultados son utilizados para implementar acciones de mejora en la práctica docente y en
                      los programas educativos.
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold">Calendario de Evaluación Docente</h3>
                  <div className="grid gap-4 md:grid-cols-2 mt-4">
                    <div className="rounded-lg border p-4">
                      <h4 className="font-semibold">Semestre Enero-Junio 2025</h4>
                      <ul className="space-y-2 mt-2">
                        <li className="flex justify-between">
                          <span>Apertura del sistema:</span>
                          <Badge>20 de mayo de 2025</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Cierre del sistema:</span>
                          <Badge>5 de junio de 2025</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Publicación de resultados:</span>
                          <Badge>30 de junio de 2025</Badge>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h4 className="font-semibold">Semestre Agosto-Diciembre 2025</h4>
                      <ul className="space-y-2 mt-2">
                        <li className="flex justify-between">
                          <span>Apertura del sistema:</span>
                          <Badge variant="outline">20 de noviembre de 2025</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Cierre del sistema:</span>
                          <Badge variant="outline">5 de diciembre de 2025</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Publicación de resultados:</span>
                          <Badge variant="outline">20 de diciembre de 2025</Badge>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert className="bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">Recuerda</AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Si no realizas la evaluación docente en el periodo establecido, no podrás reinscribirte al siguiente
                    semestre hasta regularizar tu situación. Evita contratiempos completando tu evaluación a tiempo.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sistema" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Evaluación Docente</CardTitle>
              <CardDescription>Guía para utilizar el sistema de evaluación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Acceso al sistema</h3>
                  <div className="mt-2 space-y-4">
                    <p>
                      El Sistema de Evaluación Docente está integrado en el Sistema Integral de Información (SII) del
                      ITSOEH. Para acceder:
                    </p>

                    <div className="space-y-2">
                      <div className="rounded-lg border p-4">
                        <h4 className="font-semibold flex items-center">
                          <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                            1
                          </span>
                          Ingresa al SII
                        </h4>
                        <p className="ml-8 mt-1">
                          Accede a <span className="font-medium">https://sii.itsoeh.edu.mx</span> e introduce tu número
                          de control y contraseña.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h4 className="font-semibold flex items-center">
                          <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                            2
                          </span>
                          Selecciona el módulo
                        </h4>
                        <p className="ml-8 mt-1">
                          En el menú principal, haz clic en la opción "Evaluación Docente" que aparecerá durante el
                          periodo de evaluación.
                        </p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h4 className="font-semibold flex items-center">
                          <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                            3
                          </span>
                          Visualiza tus profesores
                        </h4>
                        <p className="ml-8 mt-1">
                          El sistema mostrará la lista de profesores y asignaturas que debes evaluar, con un indicador
                          de estado (pendiente/completado) para cada uno.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <Button>Acceder al Sistema de Evaluación</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Interfaz del sistema</h3>
                  <div className="mt-2">
                    <div className="rounded-lg border overflow-hidden">
                      <div className="bg-gray-100 p-3 border-b">
                        <h4 className="font-medium">Sistema de Evaluación Docente - ITSOEH</h4>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="rounded-lg border p-3 bg-gray-50">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">Alumno: Juan Pérez González</p>
                                <p className="text-sm text-muted-foreground">Número de control: 19040123</p>
                              </div>
                              <div>
                                <p className="text-sm">
                                  Semestre: <span className="font-medium">Enero-Junio 2025</span>
                                </p>
                                <p className="text-sm">
                                  Carrera: <span className="font-medium">Ing. en TIC</span>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium mb-2">Profesores a evaluar:</h5>
                            <div className="space-y-2">
                              <div className="rounded-lg border p-3 flex justify-between items-center">
                                <div>
                                  <p className="font-medium">Dr. Roberto Sánchez Morales</p>
                                  <p className="text-sm">Asignatura: Programación Web</p>
                                </div>
                                <Badge variant="outline" className="bg-green-100">
                                  Completado
                                </Badge>
                              </div>

                              <div className="rounded-lg border p-3 flex justify-between items-center">
                                <div>
                                  <p className="font-medium">Mtra. Laura Hernández Vega</p>
                                  <p className="text-sm">Asignatura: Bases de Datos</p>
                                </div>
                                <Badge variant="outline" className="bg-amber-100">
                                  Pendiente
                                </Badge>
                              </div>

                              <div className="rounded-lg border p-3 flex justify-between items-center">
                                <div>
                                  <p className="font-medium">Ing. Carlos Martínez Juárez</p>
                                  <p className="text-sm">Asignatura: Redes de Computadoras</p>
                                </div>
                                <Badge variant="outline" className="bg-amber-100">
                                  Pendiente
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <p className="text-sm text-muted-foreground">
                              Progreso: <span className="font-medium">1/3 profesores evaluados</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Tiempo restante: <span className="font-medium">10 días</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Ejemplo de cuestionario</h3>
                  <p className="mt-1">
                    A continuación se muestra un ejemplo del tipo de preguntas que encontrarás en el cuestionario de
                    evaluación:
                  </p>

                  <div className="mt-4 rounded-lg border overflow-hidden">
                    <div className="bg-gray-100 p-3 border-b">
                      <h4 className="font-medium">Evaluación: Mtra. Laura Hernández Vega - Bases de Datos</h4>
                    </div>
                    <div className="p-4">
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-medium mb-3">Dominio de la asignatura</h5>
                          <div className="space-y-4">
                            <div className="rounded-lg border p-3">
                              <p className="mb-2">
                                1. El profesor demuestra dominio y conocimiento actualizado de la asignatura.
                              </p>
                              <div className="flex space-x-4">
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q1-1"
                                    name="q1"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q1-1" className="ml-2 text-sm">
                                    1
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q1-2"
                                    name="q1"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q1-2" className="ml-2 text-sm">
                                    2
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q1-3"
                                    name="q1"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q1-3" className="ml-2 text-sm">
                                    3
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q1-4"
                                    name="q1"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q1-4" className="ml-2 text-sm">
                                    4
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q1-5"
                                    name="q1"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q1-5" className="ml-2 text-sm">
                                    5
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="rounded-lg border p-3">
                              <p className="mb-2">
                                2. El profesor relaciona los contenidos teóricos con aplicaciones prácticas y ejemplos
                                claros.
                              </p>
                              <div className="flex space-x-4">
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q2-1"
                                    name="q2"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q2-1" className="ml-2 text-sm">
                                    1
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q2-2"
                                    name="q2"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q2-2" className="ml-2 text-sm">
                                    2
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q2-3"
                                    name="q2"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q2-3" className="ml-2 text-sm">
                                    3
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q2-4"
                                    name="q2"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q2-4" className="ml-2 text-sm">
                                    4
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q2-5"
                                    name="q2"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q2-5" className="ml-2 text-sm">
                                    5
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-3">Metodología de enseñanza</h5>
                          <div className="space-y-4">
                            <div className="rounded-lg border p-3">
                              <p className="mb-2">
                                3. El profesor explica los temas con claridad y de manera ordenada.
                              </p>
                              <div className="flex space-x-4">
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q3-1"
                                    name="q3"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q3-1" className="ml-2 text-sm">
                                    1
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q3-2"
                                    name="q3"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q3-2" className="ml-2 text-sm">
                                    2
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q3-3"
                                    name="q3"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q3-3" className="ml-2 text-sm">
                                    3
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q3-4"
                                    name="q3"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q3-4" className="ml-2 text-sm">
                                    4
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    id="q3-5"
                                    name="q3"
                                    className="h-4 w-4 border-gray-300 text-[#0a2463] focus:ring-[#0a2463]"
                                  />
                                  <label htmlFor="q3-5" className="ml-2 text-sm">
                                    5
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border p-3">
                          <p className="font-medium mb-2">Comentarios adicionales (opcional):</p>
                          <textarea
                            className="w-full min-h-[100px] p-2 border rounded-md"
                            placeholder="Escribe aquí tus comentarios, sugerencias o aspectos destacables sobre el desempeño del profesor..."
                          ></textarea>
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Guardar borrador</Button>
                          <Button>Enviar evaluación</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <ClipboardList className="h-4 w-4" />
                  <AlertTitle>Recomendaciones</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Responde con honestidad y objetividad.</li>
                      <li>Evalúa el desempeño del profesor, no la dificultad de la asignatura.</li>
                      <li>
                        Proporciona comentarios constructivos que puedan ayudar a mejorar la calidad de la enseñanza.
                      </li>
                      <li>
                        Completa la evaluación en una sola sesión para evitar pérdida de información (el sistema tiene
                        un tiempo límite de inactividad).
                      </li>
                      <li>Verifica que todas las preguntas estén respondidas antes de enviar la evaluación.</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preguntas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
              <CardDescription>Respuestas a las dudas más comunes sobre la evaluación docente</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Es obligatorio realizar la evaluación docente?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      Sí, la evaluación docente es un requisito obligatorio para todos los estudiantes. Si no realizas
                      la evaluación en el periodo establecido, no podrás reinscribirte al siguiente semestre hasta
                      regularizar tu situación.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Los profesores pueden saber quién los evaluó y qué calificación les di?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      No, las evaluaciones son completamente anónimas. Los profesores reciben únicamente información
                      estadística y comentarios sin identificación del estudiante. El sistema está diseñado para
                      garantizar el anonimato de las respuestas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Qué sucede si no evalúo a todos mis profesores?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      Debes evaluar a todos los profesores de las asignaturas que cursas en el semestre actual. El
                      sistema no te permitirá generar el comprobante de evaluación hasta que hayas completado todas las
                      evaluaciones pendientes.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Puedo modificar mis respuestas después de enviarlas?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      Sí, puedes modificar tus respuestas durante el periodo de evaluación, incluso después de haberlas
                      enviado. Una vez finalizado el periodo de evaluación, no será posible realizar cambios.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Qué pasa si tengo problemas técnicos durante la evaluación?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      Si experimentas problemas técnicos durante la evaluación, puedes contactar al Departamento de
                      Sistemas al correo{" "}
                      <a href="mailto:soporte.sistemas@itsoeh.edu.mx" className="text-blue-600 hover:underline">
                        soporte.sistemas@itsoeh.edu.mx
                      </a>{" "}
                      o acudir personalmente al Centro de Cómputo. Es recomendable tomar capturas de pantalla del error
                      para facilitar la asistencia.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Realmente se toman en cuenta nuestras evaluaciones?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      Sí, las evaluaciones docentes son un insumo importante para la toma de decisiones académicas y
                      administrativas. Los resultados se utilizan para:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Retroalimentar a los profesores sobre su desempeño</li>
                      <li>Diseñar programas de capacitación docente</li>
                      <li>Mejorar los métodos de enseñanza y evaluación</li>
                      <li>Tomar decisiones sobre la asignación de materias y grupos</li>
                      <li>Reconocer a los profesores con desempeño sobresaliente</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Puedo realizar la evaluación desde mi dispositivo móvil?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      Sí, el Sistema de Evaluación Docente es responsivo y puede utilizarse desde cualquier dispositivo
                      con conexión a internet (computadora, tablet o smartphone). Sin embargo, para una mejor
                      experiencia, se recomienda utilizar una computadora o tablet.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                      ¿Qué debo hacer si un profesor no aparece en mi lista de evaluación?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7">
                    <p>
                      Si un profesor no aparece en tu lista de evaluación, debes reportarlo inmediatamente a tu
                      Coordinador de Carrera o al Departamento de Control Escolar. Esto podría deberse a un error en el
                      sistema o en tu carga académica registrada.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6 rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold">¿Tienes más preguntas?</h3>
                <p className="mt-2">
                  Si tienes dudas adicionales sobre el proceso de evaluación docente, puedes contactar a:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    Subdirección Académica:{" "}
                    <a href="mailto:subdireccion.academica@itsoeh.edu.mx" className="text-blue-600 hover:underline">
                      subdireccion.academica@itsoeh.edu.mx
                    </a>
                  </li>
                  <li>
                    Departamento de Desarrollo Académico:{" "}
                    <a href="mailto:desarrollo.academico@itsoeh.edu.mx" className="text-blue-600 hover:underline">
                      desarrollo.academico@itsoeh.edu.mx
                    </a>
                  </li>
                  <li>Teléfono: (738) 123-4567 ext. 180</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
