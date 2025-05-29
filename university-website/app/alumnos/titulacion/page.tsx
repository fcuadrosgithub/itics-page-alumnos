import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, GraduationCap } from "lucide-react";

export default function TitulacionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Titulación</h1>
        <p className="text-muted-foreground mt-2">
          Información sobre el proceso de titulación para egresados del ITSOEH.
        </p>
      </div>

      <Alert>
        <GraduationCap className="h-4 w-4" />
        <AlertTitle>Atención egresados</AlertTitle>
        <AlertDescription>
          El trámite de titulación puede iniciarse una vez que hayas acreditado el 100% de los créditos de tu plan de estudios, incluyendo servicio social, residencia profesional y actividades complementarias.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="opciones" className="space-y-4">
        <TabsList>
          <TabsTrigger value="opciones">Opciones de Titulación</TabsTrigger>
          <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
          <TabsTrigger value="procedimiento">Procedimiento</TabsTrigger>
          <TabsTrigger value="costos">Costos</TabsTrigger>
          <TabsTrigger value="preguntas">Preguntas Frecuentes</TabsTrigger>
        </TabsList>

        <TabsContent value="opciones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Opciones de Titulación</CardTitle>
              <CardDescription>
                El ITSOEH ofrece diversas opciones para que puedas obtener tu título profesional.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                De acuerdo con el Reglamento de Titulación vigente, los egresados del Instituto Tecnológico Superior del Occidente del Estado de Hidalgo pueden optar por alguna de las siguientes modalidades de titulación:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Opciones de Titulación */}
                {[
                  {
                    title: 'Titulación Integral',
                    description: 'Consiste en la elaboración de un proyecto acorde a tu perfil profesional mediante el informe de residencia profesional.',
                    badge: 'Recomendada',
                    note: 'Esta es la opción más común y recomendada para la mayoría de los egresados.',
                  },
                  {
                    title: 'Tesis Profesional',
                    description: 'Consiste en un trabajo de investigación que aborda un tema específico relacionado con tu carrera, con defensa ante un jurado.',
                    badge: 'Tradicional',
                    note: 'Ideal para estudiantes interesados en la investigación o que planean continuar con estudios de posgrado.',
                  },
                  {
                    title: 'Examen CENEVAL (EGEL)',
                    description: 'Aprobación del Examen General de Egreso de Licenciatura del CENEVAL con resultado satisfactorio o sobresaliente.',
                    badge: 'Externa',
                    note: 'Esta opción demuestra tus conocimientos a nivel nacional y puede darte ventajas en el mercado laboral.',
                  },
                  {
                    title: 'Promedio General Sobresaliente',
                    description: 'Haber obtenido un promedio general igual o mayor a 95 durante toda la carrera, sin haber reprobado ninguna asignatura.',
                    badge: 'Por desempeño',
                    note: 'Reconoce la excelencia académica durante toda tu trayectoria universitaria.',
                  },
                  {
                    title: 'Estudios de Posgrado',
                    description: 'Acreditar al menos el 50% de los créditos de un programa de maestría afín a tu carrera en una institución reconocida.',
                    badge: 'Continuidad académica',
                    note: 'Ideal para quienes desean continuar inmediatamente con estudios de posgrado.',
                  },
                  {
                    title: 'Proyecto de Investigación',
                    description: 'Elaboración de un proyecto de investigación científica o aplicada, con defensa ante un jurado.',
                    badge: 'Especializada',
                    note: 'Opción para estudiantes que han participado en proyectos de investigación durante su carrera.',
                  },
                ].map((option, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex items-center">
                      <div className="rounded-full bg-[#0a2463] p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold">{option.title}</h3>
                    </div>
                    <div className="mt-2 space-y-2">
                      <p>{option.description}</p>
                      <Badge>{option.badge}</Badge>
                      <p className="text-sm text-muted-foreground">{option.note}</p>
                    </div>
                  </div>
                ))}

              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Comparativa de opciones de titulación</AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Opción</TableHead>
                            <TableHead>Tiempo estimado</TableHead>
                            <TableHead>Complejidad</TableHead>
                            <TableHead>Requisitos especiales</TableHead>
                            <TableHead>Recomendada para</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Titulación Integral</TableCell>
                            <TableCell>2-3 meses</TableCell>
                            <TableCell>Media</TableCell>
                            <TableCell>Informe de residencia aprobado</TableCell>
                            <TableCell>La mayoría de los estudiantes</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Tesis Profesional</TableCell>
                            <TableCell>6-12 meses</TableCell>
                            <TableCell>Alta</TableCell>
                            <TableCell>Asesor y revisores</TableCell>
                            <TableCell>Interesados en investigación</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Examen CENEVAL</TableCell>
                            <TableCell>1-2 meses</TableCell>
                            <TableCell>Alta</TableCell>
                            <TableCell>Resultado satisfactorio o sobresaliente</TableCell>
                            <TableCell>Estudiantes con buena preparación académica</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Promedio Sobresaliente</TableCell>
                            <TableCell>Inmediato</TableCell>
                            <TableCell>Baja</TableCell>
                            <TableCell>Promedio ≥ 95, sin reprobadas</TableCell>
                            <TableCell>Estudiantes de excelencia académica</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Estudios de Posgrado</TableCell>
                            <TableCell>6-12 meses</TableCell>
                            <TableCell>Media</TableCell>
                            <TableCell>Aceptación en programa de posgrado</TableCell>
                            <TableCell>Interesados en continuar estudios</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Proyecto de Investigación</TableCell>
                            <TableCell>4-8 meses</TableCell>
                            <TableCell>Alta</TableCell>
                            <TableCell>Proyecto registrado y aprobado</TableCell>
                            <TableCell>Estudiantes con experiencia en investigación</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                <h3 className="font-semibold text-blue-800">Asesoría para elegir tu opción de titulación</h3>
                <p className="mt-1 text-blue-700">
                  Si tienes dudas sobre cuál es la mejor opción de titulación para tu caso particular, puedes solicitar
                  una asesoría personalizada con el Departamento de Titulación o con tu Coordinador de Carrera.
                </p>
                <div className="mt-3">
                  <Button variant="outline" className="bg-white">
                    Solicitar asesoría
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requisitos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Requisitos para Titulación</CardTitle>
              <CardDescription>Documentos y condiciones necesarias para iniciar tu proceso de titulación</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Requisitos generales:</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Certificado completo de estudios profesionales que acredite haber aprobado el 100% de los créditos del plan de estudios.</li>
                  <li>Constancia de liberación del Servicio Social.</li>
                  <li>Constancia de acreditación de Actividades Complementarias.</li>
                  <li>Constancia de liberación de Residencia Profesional.</li>
                  <li>Constancia de acreditación del idioma inglés (nivel B1 o equivalente).</li>
                  <li>No tener adeudos financieros, de material o equipo con la institución.</li>
                  <li>Cubrir las cuotas correspondientes al proceso de titulación.</li>
                  <li>6 fotografías tamaño título en blanco y negro, papel mate, con ropa formal.</li>
                  <li>Solicitud de titulación debidamente llenada y firmada.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Requisitos específicos según la opción de titulación:</h3>

                <div className="space-y-4 mt-2">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Titulación Integral</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Informe de Residencia Profesional aprobado por el asesor y revisor.</li>
                      <li>Constancia de evaluación del proyecto emitida por el asesor.</li>
                      <li>Formato de liberación del proyecto firmado por el asesor.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Tesis Profesional</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Tesis aprobada por el asesor y revisores.</li>
                      <li>Carta de autorización para impresión de tesis.</li>
                      <li>4 ejemplares impresos de la tesis y 1 en formato digital (PDF).</li>
                      <li>Oficio de asignación de jurado para examen profesional.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Examen CENEVAL (EGEL)</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>
                        Testimonio de Desempeño Satisfactorio (TDS) o Testimonio de Desempeño Sobresaliente (TDSS) original y copia.
                      </li>
                      <li>Constancia de resultado individual del CENEVAL.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Promedio General Sobresaliente</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Certificado de estudios con promedio general igual o mayor a 95 (sin redondeo) y sin asignaturas reprobadas.</li>
                      <li>Constancia de no haber presentado exámenes de segunda oportunidad.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Estudios de Posgrado</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Certificado parcial de estudios de posgrado que acredite haber aprobado al menos el 50% de los créditos.</li>
                      <li>Carta de aceptación al programa de posgrado.</li>
                      <li>Plan de estudios del programa de posgrado.</li>
                      <li>Dictamen de equivalencia o afinidad del programa de posgrado con respecto a la carrera cursada.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-semibold">Proyecto de Investigación</h4>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Proyecto de investigación aprobado por el asesor y revisores.</li>
                      <li>Carta de registro del proyecto ante la División de Estudios Profesionales.</li>
                      <li>Carta de liberación del proyecto firmada por el asesor.</li>
                      <li>4 ejemplares impresos del proyecto y 1 en formato digital (PDF).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Documentación adicional:</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Acta de nacimiento original y copia (no mayor a 6 meses de expedición).</li>
                  <li>CURP actualizada (formato reciente).</li>
                  <li>Certificado de bachillerato original y copia.</li>
                  <li>Comprobante de pago de derechos de titulación.</li>
                  <li>Formato de registro de título ante la Dirección General de Profesiones.</li>
                  <li>Formato de no adeudo de biblioteca, laboratorios y áreas administrativas.</li>
                  <li>Copia de identificación oficial vigente (INE, pasaporte).</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}