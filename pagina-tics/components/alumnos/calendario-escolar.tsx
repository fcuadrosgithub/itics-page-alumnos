"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Download, CalendarDays, CalendarClock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalendarioEscolar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Eventos del calendario escolar
  const eventos = [
    { fecha: new Date(2025, 4, 15), tipo: "examen", titulo: "Inicio de exámenes parciales" },
    { fecha: new Date(2025, 4, 20), tipo: "administrativo", titulo: "Fecha límite de pago" },
    { fecha: new Date(2025, 4, 25), tipo: "academico", titulo: "Entrega de proyectos finales" },
    { fecha: new Date(2025, 4, 30), tipo: "vacaciones", titulo: "Inicio de vacaciones" },
    { fecha: new Date(2025, 5, 5), tipo: "inscripcion", titulo: "Inicio de reinscripciones" },
    { fecha: new Date(2025, 5, 10), tipo: "administrativo", titulo: "Entrega de documentos" },
    { fecha: new Date(2025, 5, 15), tipo: "academico", titulo: "Inicio de clases" },
  ]

  // Función para obtener eventos de un día específico
  const getEventosDelDia = (dia: Date | undefined) => {
    if (!dia) return []

    return eventos.filter(
      (evento) =>
        evento.fecha.getDate() === dia.getDate() &&
        evento.fecha.getMonth() === dia.getMonth() &&
        evento.fecha.getFullYear() === dia.getFullYear(),
    )
  }

  // Eventos del día seleccionado
  const eventosDelDia = getEventosDelDia(date)

  // Función para resaltar días con eventos
  const isDayWithEvent = (day: Date) => {
    return eventos.some(
      (evento) =>
        evento.fecha.getDate() === day.getDate() &&
        evento.fecha.getMonth() === day.getMonth() &&
        evento.fecha.getFullYear() === day.getFullYear(),
    )
  }

  // Función para descargar el calendario
  const handleDownloadCalendar = () => {
    // En una implementación real, esto descargaría el calendario en formato PDF o ICS
    alert("Descargando calendario escolar")
  }

  // Función para sincronizar con Google Calendar
  const handleSyncWithGoogle = () => {
    // En una implementación real, esto sincronizaría con Google Calendar
    alert("Sincronizando con Google Calendar")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Calendario Escolar</CardTitle>
          <CardDescription>Consulta las fechas importantes del ciclo escolar actual</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="calendario">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="calendario">
                <CalendarDays className="h-4 w-4 mr-2" />
                Calendario
              </TabsTrigger>
              <TabsTrigger value="lista">
                <CalendarClock className="h-4 w-4 mr-2" />
                Lista de Eventos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendario" className="mt-0">
              <div className="grid gap-6 md:grid-cols-[1fr_300px]">
                <div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    modifiers={{
                      withEvent: (date) => isDayWithEvent(date),
                    }}
                    modifiersClassNames={{
                      withEvent: "bg-primary/10 font-bold text-primary",
                    }}
                  />
                </div>

                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Eventos del día</h3>
                    {eventosDelDia.length > 0 ? (
                      <ul className="space-y-2">
                        {eventosDelDia.map((evento, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Badge
                              variant={
                                evento.tipo === "examen"
                                  ? "destructive"
                                  : evento.tipo === "administrativo"
                                    ? "outline"
                                    : evento.tipo === "academico"
                                      ? "secondary"
                                      : evento.tipo === "vacaciones"
                                        ? "default"
                                        : "default"
                              }
                              className="mt-0.5"
                            >
                              {evento.tipo}
                            </Badge>
                            <span>{evento.titulo}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm">No hay eventos programados para este día.</p>
                    )}
                  </div>

                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">Leyenda</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive">examen</Badge>
                        <span>Exámenes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">administrativo</Badge>
                        <span>Trámites</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">academico</Badge>
                        <span>Académico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge>vacaciones</Badge>
                        <span>Vacaciones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lista" className="mt-0">
              <div className="border rounded-md divide-y">
                {eventos
                  .sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
                  .map((evento, index) => (
                    <div key={index} className="p-4 flex items-start gap-3">
                      <div className="min-w-[60px] text-center">
                        <div className="font-bold">{evento.fecha.getDate()}</div>
                        <div className="text-xs text-muted-foreground">
                          {evento.fecha.toLocaleString("es", { month: "short" })}
                        </div>
                      </div>
                      <div>
                        <Badge
                          variant={
                            evento.tipo === "examen"
                              ? "destructive"
                              : evento.tipo === "administrativo"
                                ? "outline"
                                : evento.tipo === "academico"
                                  ? "secondary"
                                  : evento.tipo === "vacaciones"
                                    ? "default"
                                    : "default"
                          }
                          className="mb-1"
                        >
                          {evento.tipo}
                        </Badge>
                        <div>{evento.titulo}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleDownloadCalendar}>
            <Download className="mr-2 h-4 w-4" />
            Descargar PDF
          </Button>
          <Button onClick={handleSyncWithGoogle}>Sincronizar con Google Calendar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
