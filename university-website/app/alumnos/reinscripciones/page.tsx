import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, Calendar, CheckCircle2, FileText, Info } from "lucide-react"
import Link from "next/link"

export default function ReinscripcionesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reinscripciones</h1>
        <p className="text-muted-foreground mt-2">
          Información sobre el proceso de reinscripción para el siguiente semestre.
        </p>
      </div>

      <Alert className="bg-blue-50 border-blue-200">
        <Calendar className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800">Próximo periodo de reinscripciones</AlertTitle>
        <AlertDescription className="text-blue-700">
          Las reinscripciones para el semestre Agosto-Diciembre 2025 serán del 15 al 30 de julio de 2025.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="informacion" className="space-y-4">
        <TabsList>
          <TabsTrigger value="informacion">Información General</TabsTrigger>
          <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
          <TabsTrigger value="procedimiento">Procedimiento</TabsTrigger>
          <TabsTrigger value="calendario">Calendario</TabsTrigger>
        </TabsList>

        <TabsContent value="informacion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Proceso de Reinscripción</CardTitle>
              <CardDescription>Información general sobre el proceso de reinscripción</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                La reinscripción es el proceso mediante el cual los estudiantes formalizan su permanencia en la
                institución para continuar sus estudios en el siguiente periodo escolar. Este proceso debe realizarse al
                inicio de cada semestre según el calendario académico establecido.
              </p>

              <h3 className="text-lg font-semibold mt-4">Consideraciones importantes:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  La reinscripción se realiza de manera semestral y es obligatoria para todos los estudiantes que deseen
                  continuar sus estudios en el ITSOEH.
                </li>
                <li>
                  El proceso se realiza en línea a través del Sistema Integral de Información (SII) y posteriormente se
                  completa con la entrega de documentación física en el Departamento de Control Escolar.
                </li>
                <li>
                  Es responsabilidad del estudiante realizar su reinscripción en las fechas establecidas. No habrá
                  reinscripciones extemporáneas salvo casos excepcionales autorizados por la Dirección Académica.
                </li>
                <li>
                  Para poder reinscribirse, el estudiante debe estar al corriente en sus pagos y no tener adeudos de
                  documentos, libros u otros materiales con la institución.
                </li>
                <li>
                  La carga académica (materias a cursar) se asigna de acuerdo al plan de estudios y al avance del
                  estudiante, priorizando las materias de semestres anteriores que no hayan sido acreditadas.
                </li>
              </ul>

              <div className="rounded-lg bg-gray-50 p-4 mt-4">
                <h4 className="font-semibold">Tipos de reinscripción:</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-start">
                    <Badge className="mt-1 mr-2">Regular</Badge>
                    <p>
                      Para estudiantes que han aprobado todas sus materias y continúan con su plan de estudios normal.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Badge variant="outline" className="mt-1 mr-2">
                      Irregular
                    </Badge>
                    <p>
                      Para estudiantes que tienen materias reprobadas o que desean adelantar materias de semestres
                      superiores.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Badge variant="secondary" className="mt-1 mr-2">
                      Especial
                    </Badge>
                    <p>
                      Para casos particulares como reingreso después de baja temporal, cambio de carrera o plan de
                      estudios, etc.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requisitos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Requisitos para Reinscripción</CardTitle>
              <CardDescription>Documentos y condiciones necesarias para completar tu reinscripción</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Requisitos académicos:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      No adeudar más de 3 materias del semestre inmediato anterior o 5 materias en total de tu plan de
                      estudios.
                    </li>
                    <li>
                      Haber acreditado las materias que son prerrequisito para las asignaturas que deseas cursar en el
                      siguiente semestre.
                    </li>
                    <li>
                      Para estudiantes de 5° semestre en adelante: tener acreditado el 80% de los créditos de
                      Actividades Complementarias.
                    </li>
                    <li>
                      Para estudiantes de 7° semestre en adelante: contar con constancia de liberación del Servicio
                      Social o comprobante de estar realizándolo.
                    </li>
                    <li>
                      Para estudiantes de 9° semestre: tener acreditado el 100% de los créditos de Actividades
                      Complementarias y el Servicio Social.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Requisitos administrativos:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>No tener adeudos financieros con la institución.</li>
                    <li>No tener adeudos de material en laboratorios, talleres o biblioteca.</li>
                    <li>Tener expediente completo en el Departamento de Control Escolar.</li>
                    <li>Contar con credencial de estudiante vigente o en trámite de renovación.</li>
                    <li>Haber realizado la evaluación docente del semestre anterior.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Documentos requeridos:</h3>
                  <div className="rounded-lg border p-4 mt-2">
                    <h4 className="font-semibold flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-[#0a2463]" />
                      Para todos los estudiantes:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Formato de solicitud de reinscripción debidamente llenado y firmado.</li>
                      <li>Comprobante de pago de reinscripción.</li>
                      <li>Credencial de estudiante vigente (para cotejo).</li>
                      <li>Carga académica impresa y firmada.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4 mt-4">
                    <h4 className="font-semibold flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-[#0a2463]" />
                      Documentos adicionales según el caso:
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Estudiantes con beca: Constancia de beca vigente o comprobante de renovación.</li>
                      <li>Estudiantes de reingreso después de baja temporal: Oficio de autorización de reingreso.</li>
                      <li>Estudiantes de movilidad: Carta de aceptación y programa de estudios autorizado.</li>
                      <li>Estudiantes con materias en curso especial: Autorización del Comité Académico.</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Nota importante</AlertTitle>
                  <AlertDescription>
                    Todos los documentos deben presentarse en original y copia. Los formatos pueden descargarse desde el
                    Sistema Integral de Información (SII) o recogerse en el Departamento de Control Escolar.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedimiento" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Procedimiento de Reinscripción</CardTitle>
              <CardDescription>Pasos a seguir para completar tu proceso de reinscripción</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      1
                    </span>
                    Verificación de estatus académico
                  </h3>
                  <div className="ml-8">
                    <p>
                      Ingresa al Sistema Integral de Información (SII) con tu número de control y contraseña para
                      verificar:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Calificaciones del semestre anterior</li>
                      <li>Materias aprobadas y reprobadas</li>
                      <li>Estatus de regularidad</li>
                      <li>Adeudos académicos o administrativos</li>
                    </ul>
                    <div className="mt-2">
                      <Button variant="outline">Acceder al SII</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      2
                    </span>
                    Pago de reinscripción
                  </h3>
                  <div className="ml-8">
                    <p>
                      Genera tu referencia de pago en el SII y realiza el pago correspondiente en cualquiera de las
                      siguientes modalidades:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Depósito bancario en BBVA</li>
                      <li>Transferencia electrónica</li>
                      <li>Pago en línea con tarjeta de crédito o débito</li>
                      <li>Pago en caja del instituto (solo efectivo)</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Costo de reinscripción:</strong> $2,500.00 MXN (semestre Agosto-Diciembre 2025)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Nota: Los estudiantes con beca deben verificar el porcentaje de descuento aplicable.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      3
                    </span>
                    Selección de carga académica
                  </h3>
                  <div className="ml-8">
                    <p>
                      Una vez confirmado tu pago, ingresa nuevamente al SII para seleccionar tu carga académica según tu
                      avance en el plan de estudios:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        Estudiantes regulares: Selecciona grupo y horario para las materias correspondientes a tu
                        semestre.
                      </li>
                      <li>
                        Estudiantes irregulares: Primero selecciona las materias que adeudas de semestres anteriores y
                        luego completa tu carga con materias del semestre actual.
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Carga académica máxima:</strong> 36 créditos por semestre (consulta excepciones con tu
                      coordinador)
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      4
                    </span>
                    Validación con coordinador
                  </h3>
                  <div className="ml-8">
                    <p>
                      Agenda una cita con tu coordinador de carrera para validar tu carga académica. Este paso es
                      obligatorio para:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Estudiantes irregulares</li>
                      <li>Estudiantes que solicitan sobrecarga académica</li>
                      <li>Estudiantes en situación especial (reingreso, cambio de carrera, etc.)</li>
                      <li>Estudiantes que solicitan cursar materias en horarios que se traslapan</li>
                    </ul>
                    <p className="mt-2">
                      Tu coordinador revisará tu historial académico y aprobará o sugerirá modificaciones a tu carga
                      académica.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      5
                    </span>
                    Entrega de documentación
                  </h3>
                  <div className="ml-8">
                    <p>Acude al Departamento de Control Escolar con los siguientes documentos impresos y firmados:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Formato de solicitud de reinscripción</li>
                      <li>Comprobante de pago original</li>
                      <li>Carga académica validada por tu coordinador</li>
                      <li>Documentos adicionales según tu caso particular</li>
                    </ul>
                    <p className="mt-2">
                      El personal de Control Escolar verificará tu documentación y te entregará tu comprobante de
                      reinscripción sellado.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                      6
                    </span>
                    Confirmación de horario
                  </h3>
                  <div className="ml-8">
                    <p>
                      Verifica tu horario final en el SII. Este será tu horario oficial para el semestre. Imprime una
                      copia para tu control personal.
                    </p>
                    <div className="rounded-lg bg-green-50 border border-green-200 p-4 mt-2">
                      <h4 className="font-semibold flex items-center text-green-800">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                        ¡Proceso completado!
                      </h4>
                      <p className="mt-1 text-green-700">
                        Una vez completados todos los pasos anteriores, tu reinscripción estará finalizada y podrás
                        iniciar clases según el calendario académico.
                      </p>
                    </div>
                  </div>
                </div>

                <Alert className="bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">Importante</AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Si no completas todos los pasos del proceso de reinscripción en las fechas establecidas, podrías
                    perder tu lugar en los grupos seleccionados o incluso tu derecho a reinscribirte en el semestre.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendario" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Reinscripciones</CardTitle>
              <CardDescription>Fechas importantes para el proceso de reinscripción</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Semestre Agosto-Diciembre 2025</h3>
                  <div className="mt-2 space-y-4">
                    <div>
                      <h4 className="font-medium">Pago de reinscripción:</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>
                          <span className="font-medium">Estudiantes regulares:</span> 15 al 20 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">Estudiantes irregulares:</span> 21 al 25 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">Casos especiales:</span> 26 al 30 de julio de 2025
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">Selección de carga académica:</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>
                          <span className="font-medium">9° semestre:</span> 15 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">7° semestre:</span> 16 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">5° semestre:</span> 17 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">3° semestre:</span> 18 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">Estudiantes irregulares:</span> 21 al 23 de julio de 2025
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">Validación con coordinadores:</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>
                          <span className="font-medium">Todos los estudiantes:</span> 15 al 25 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">Horario de atención:</span> 9:00 a 14:00 y 16:00 a 18:00 horas
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">Entrega de documentación:</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>
                          <span className="font-medium">Todos los estudiantes:</span> 15 al 30 de julio de 2025
                        </li>
                        <li>
                          <span className="font-medium">Horario de atención:</span> 9:00 a 14:00 horas
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">Fechas importantes:</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>
                          <span className="font-medium">Inicio de clases:</span> 5 de agosto de 2025
                        </li>
                        <li>
                          <span className="font-medium">Ajustes de carga académica:</span> 5 al 9 de agosto de 2025
                        </li>
                        <li>
                          <span className="font-medium">Fecha límite para baja temporal:</span> 30 de agosto de 2025
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Semestre Enero-Junio 2026 (Próximo)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Periodo de reinscripción:</span> 15 al 30 de diciembre de 2025
                        </p>
                        <p>
                          <span className="font-medium">Inicio de clases:</span> 13 de enero de 2026
                        </p>
                        <p className="text-sm text-muted-foreground">
                          El calendario detallado se publicará en noviembre de 2025.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex justify-center">
                  <Link href="/alumnos/calendario">
                    <Button>Ver calendario escolar completo</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
