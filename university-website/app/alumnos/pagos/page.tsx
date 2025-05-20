import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AlertCircle, CreditCard, FileText, HelpCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function PagosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pagos de 2da. Oportunidad</h1>
        <p className="text-muted-foreground mt-2">
          Información sobre el proceso de pago para exámenes de segunda oportunidad.
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Importante</AlertTitle>
        <AlertDescription>
          Los pagos de segunda oportunidad deben realizarse antes de la fecha del examen. No se aceptarán pagos
          extemporáneos.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="informacion" className="space-y-4">
        <TabsList>
          <TabsTrigger value="informacion">Información General</TabsTrigger>
          <TabsTrigger value="costos">Costos</TabsTrigger>
          <TabsTrigger value="procedimiento">Procedimiento</TabsTrigger>
          <TabsTrigger value="preguntas">Preguntas Frecuentes</TabsTrigger>
        </TabsList>

        <TabsContent value="informacion" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>¿Qué son los exámenes de segunda oportunidad?</CardTitle>
              <CardDescription>
                Información sobre los exámenes de segunda oportunidad y su importancia académica.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Los exámenes de segunda oportunidad son evaluaciones adicionales que se ofrecen a los estudiantes que no
                aprobaron una asignatura en la evaluación ordinaria. Estos exámenes permiten a los alumnos demostrar que
                han adquirido los conocimientos necesarios para acreditar la materia sin tener que recursarla.
              </p>

              <h3 className="text-lg font-semibold mt-4">Características principales:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Se aplican después del periodo de evaluación ordinaria.</li>
                <li>Tienen un costo adicional que debe ser cubierto por el estudiante.</li>
                <li>
                  Cubren todo el contenido del curso, independientemente de las calificaciones parciales obtenidas.
                </li>
                <li>La calificación máxima que se puede obtener es de 80 puntos sobre 100.</li>
                <li>
                  Si no se aprueba el examen de segunda oportunidad, el estudiante deberá recursar la asignatura o
                  presentar un examen de tercera oportunidad (sujeto a autorización).
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Calendario de exámenes:</h3>
              <p>
                Los exámenes de segunda oportunidad se programan generalmente dos semanas después del término del
                periodo de evaluación ordinaria. Consulta el calendario específico en la sección de{" "}
                <Link href="/alumnos/calendario" className="text-blue-600 hover:underline">
                  Calendario Escolar
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Costos de exámenes de segunda oportunidad</CardTitle>
              <CardDescription>Tarifas vigentes para el ciclo escolar 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo de asignatura</TableHead>
                    <TableHead>Costo</TableHead>
                    <TableHead>Observaciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Asignaturas teóricas</TableCell>
                    <TableCell>$350.00 MXN</TableCell>
                    <TableCell>Por cada asignatura</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Asignaturas prácticas</TableCell>
                    <TableCell>$450.00 MXN</TableCell>
                    <TableCell>Por cada asignatura</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Asignaturas teórico-prácticas</TableCell>
                    <TableCell>$500.00 MXN</TableCell>
                    <TableCell>Por cada asignatura</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Laboratorios</TableCell>
                    <TableCell>$600.00 MXN</TableCell>
                    <TableCell>Por cada laboratorio</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Notas importantes:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Los precios están sujetos a cambios sin previo aviso.</li>
                  <li>
                    El pago debe realizarse antes de la fecha del examen. No se aceptarán pagos el mismo día del examen.
                  </li>
                  <li>
                    Una vez realizado el pago, no hay reembolsos, incluso si el estudiante no se presenta al examen.
                  </li>
                  <li>
                    Los estudiantes con beca deben consultar en el Departamento de Becas si tienen algún descuento
                    aplicable.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedimiento" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Procedimiento para pago de exámenes de segunda oportunidad</CardTitle>
              <CardDescription>Sigue estos pasos para realizar tu pago correctamente</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    1
                  </span>
                  Solicitud de examen
                </h3>
                <p className="ml-8">
                  Acude al Departamento de Control Escolar para solicitar tu examen de segunda oportunidad. Deberás
                  llenar el formato correspondiente indicando la(s) asignatura(s) que deseas presentar.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    2
                  </span>
                  Generación de referencia de pago
                </h3>
                <p className="ml-8">
                  El personal de Control Escolar te entregará una referencia de pago con el monto correspondiente según
                  la(s) asignatura(s) solicitada(s).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    3
                  </span>
                  Realización del pago
                </h3>
                <p className="ml-8">Tienes dos opciones para realizar tu pago:</p>
                <div className="ml-8 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-[#0a2463]" />
                      Pago en banco
                    </h4>
                    <p className="mt-1">
                      Acude a cualquier sucursal de BBVA con tu referencia de pago y realiza el depósito
                      correspondiente. Conserva el comprobante de pago original.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-[#0a2463]" />
                      Pago en línea
                    </h4>
                    <p className="mt-1">
                      Ingresa al portal de pagos del ITSOEH con tu número de control y contraseña. Selecciona la opción
                      "Pago de exámenes de segunda oportunidad" y sigue las instrucciones. Imprime tu comprobante de
                      pago.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline">Acceder al portal de pagos</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    4
                  </span>
                  Entrega de comprobante
                </h3>
                <p className="ml-8">
                  Entrega una copia del comprobante de pago en el Departamento de Control Escolar y conserva el
                  original. El personal te entregará un pase para presentar tu examen.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="bg-[#0a2463] text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                    5
                  </span>
                  Presentación del examen
                </h3>
                <p className="ml-8">
                  Acude el día y hora programados para tu examen. Presenta tu pase de examen y una identificación
                  oficial con fotografía.
                </p>
              </div>

              <Alert className="mt-6">
                <FileText className="h-4 w-4" />
                <AlertTitle>Documentos necesarios</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Formato de solicitud de examen de segunda oportunidad</li>
                    <li>Referencia de pago</li>
                    <li>Comprobante de pago original</li>
                    <li>Identificación oficial con fotografía</li>
                    <li>Pase de examen</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preguntas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preguntas frecuentes</CardTitle>
              <CardDescription>
                Respuestas a las dudas más comunes sobre los exámenes de segunda oportunidad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                    ¿Cuántas materias puedo presentar en segunda oportunidad?
                  </h3>
                  <p className="mt-1">
                    Puedes presentar hasta 3 asignaturas en segunda oportunidad por periodo. Si necesitas presentar más,
                    deberás solicitar autorización especial a la Dirección Académica.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                    ¿Qué sucede si no apruebo el examen de segunda oportunidad?
                  </h3>
                  <p className="mt-1">
                    Si no apruebas el examen de segunda oportunidad, tendrás que recursar la asignatura. En casos
                    excepcionales, podrías solicitar un examen de tercera oportunidad, pero esto requiere autorización
                    especial y tiene un costo adicional.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                    ¿Puedo cancelar un examen de segunda oportunidad?
                  </h3>
                  <p className="mt-1">
                    Puedes cancelar tu solicitud de examen hasta 3 días hábiles antes de la fecha programada. Sin
                    embargo, una vez realizado el pago, no hay reembolsos. El monto pagado quedará como saldo a favor
                    para futuros trámites.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                    ¿Qué pasa si no me presento al examen?
                  </h3>
                  <p className="mt-1">
                    Si no te presentas al examen sin justificación previa, se considerará como no aprobado y perderás el
                    derecho a solicitar un examen de tercera oportunidad. Además, no habrá reembolso del pago realizado.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-[#0a2463]" />
                    ¿Cuándo se publican los resultados?
                  </h3>
                  <p className="mt-1">
                    Los resultados de los exámenes de segunda oportunidad se publican en el Sistema Integral de
                    Información (SII) aproximadamente una semana después de la aplicación del examen.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p>
                  Si tienes más dudas, puedes contactar al Departamento de Control Escolar al correo{" "}
                  <a href="mailto:control.escolar@itsoeh.edu.mx" className="text-blue-600 hover:underline">
                    control.escolar@itsoeh.edu.mx
                  </a>{" "}
                  o al teléfono (738) 123-4567 ext. 140.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
