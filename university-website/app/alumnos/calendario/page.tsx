import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CalendarioPage() {
  // Fechas importantes para el calendario
  const fechasImportantes = [
    { fecha: new Date(2025, 4, 5), evento: "Inicio de clases", tipo: "academico" },
    { fecha: new Date(2025, 4, 15), evento: "Límite de inscripción", tipo: "administrativo" },
    { fecha: new Date(2025, 5, 10), evento: "Primer examen parcial", tipo: "evaluacion" },
    { fecha: new Date(2025, 6, 15), evento: "Segundo examen parcial", tipo: "evaluacion" },
    { fecha: new Date(2025, 7, 20), evento: "Examen final", tipo: "evaluacion" },
    { fecha: new Date(2025, 7, 30), evento: "Fin de semestre", tipo: "academico" },
    { fecha: new Date(2025, 8, 5), evento: "Publicación de calificaciones", tipo: "administrativo" },
    { fecha: new Date(2025, 8, 15), evento: "Inicio de vacaciones", tipo: "descanso" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendario Escolar</h1>
        <p className="text-muted-foreground mt-2">Consulta las fechas importantes del ciclo escolar 2025.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendario</CardTitle>
            <CardDescription>Visualiza las fechas importantes del semestre</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="multiple"
              selected={fechasImportantes.map((item) => item.fecha)}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Eventos Importantes</CardTitle>
            <CardDescription>Listado de fechas relevantes para el semestre</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-blue-100">
                  Académico
                </Badge>
                <Badge variant="outline" className="bg-amber-100">
                  Administrativo
                </Badge>
                <Badge variant="outline" className="bg-red-100">
                  Evaluación
                </Badge>
                <Badge variant="outline" className="bg-green-100">
                  Descanso
                </Badge>
              </div>

              <div className="space-y-2">
                {fechasImportantes.map((evento, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border rounded-md">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={
                          evento.tipo === "academico"
                            ? "bg-blue-100"
                            : evento.tipo === "administrativo"
                              ? "bg-amber-100"
                              : evento.tipo === "evaluacion"
                                ? "bg-red-100"
                                : "bg-green-100"
                        }
                      >
                        {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                      </Badge>
                      <span>{evento.evento}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {evento.fecha.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Periodos Importantes</CardTitle>
          <CardDescription>Fechas clave para el semestre Enero-Junio 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Inscripciones y Reinscripciones</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Alumnos regulares:</span>
                    <span className="text-muted-foreground">1-10 Enero 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Alumnos irregulares:</span>
                    <span className="text-muted-foreground">11-15 Enero 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Alumnos de nuevo ingreso:</span>
                    <span className="text-muted-foreground">20-25 Enero 2025</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Periodos de Evaluación</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Primera evaluación parcial:</span>
                    <span className="text-muted-foreground">5-10 Marzo 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Segunda evaluación parcial:</span>
                    <span className="text-muted-foreground">10-15 Abril 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tercera evaluación parcial:</span>
                    <span className="text-muted-foreground">15-20 Mayo 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Evaluación final:</span>
                    <span className="text-muted-foreground">10-20 Junio 2025</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Periodos Vacacionales</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Semana Santa:</span>
                    <span className="text-muted-foreground">14-20 Abril 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Día del Trabajo:</span>
                    <span className="text-muted-foreground">1 Mayo 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Batalla de Puebla:</span>
                    <span className="text-muted-foreground">5 Mayo 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vacaciones de verano:</span>
                    <span className="text-muted-foreground">A partir del 30 Junio 2025</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Trámites Académicos</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Solicitud de baja temporal:</span>
                    <span className="text-muted-foreground">Hasta 28 Febrero 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Solicitud de baja de materias:</span>
                    <span className="text-muted-foreground">Hasta 15 Febrero 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Registro de servicio social:</span>
                    <span className="text-muted-foreground">1-15 Febrero 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Registro de residencias:</span>
                    <span className="text-muted-foreground">1-15 Febrero 2025</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Eventos Académicos</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Semana de Ingeniería:</span>
                    <span className="text-muted-foreground">15-19 Marzo 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Concurso de Programación:</span>
                    <span className="text-muted-foreground">25 Marzo 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Feria de Proyectos:</span>
                    <span className="text-muted-foreground">10-12 Mayo 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Congreso de TIC:</span>
                    <span className="text-muted-foreground">5-7 Junio 2025</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Titulación</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Recepción de documentos:</span>
                    <span className="text-muted-foreground">Todo el semestre</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ceremonia de titulación:</span>
                    <span className="text-muted-foreground">25 Junio 2025</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Entrega de títulos:</span>
                    <span className="text-muted-foreground">A partir de Agosto 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
