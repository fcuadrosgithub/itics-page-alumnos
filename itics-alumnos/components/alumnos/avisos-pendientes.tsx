"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle, Calendar, CreditCard, GraduationCap, X } from "lucide-react"

interface AvisosPendientesProps {
  showAll?: boolean
}

export default function AvisosPendientes({ showAll = false }: AvisosPendientesProps) {
  const [avisos, setAvisos] = useState([
    {
      id: 1,
      tipo: "evaluacion",
      titulo: "Evaluación Docente",
      descripcion: "Recuerda realizar la evaluación docente antes del 20 de mayo.",
      icono: <AlertCircle className="h-4 w-4" />,
      fechaLimite: "20 de mayo, 2025",
      url: "http://evaluaciondocente.itsoeh.edu.mx",
      visible: true,
    },
    {
      id: 2,
      tipo: "pago",
      titulo: "Fecha límite de pago",
      descripcion: "El pago de la colegiatura debe realizarse antes del 15 de mayo.",
      icono: <CreditCard className="h-4 w-4" />,
      fechaLimite: "15 de mayo, 2025",
      url: "https://estudiantes.itsoeh.edu.mx/index.php",
      visible: true,
    },
    {
      id: 3,
      tipo: "inscripcion",
      titulo: "Reinscripciones",
      descripcion: "El periodo de reinscripciones comienza el 1 de junio.",
      icono: <Calendar className="h-4 w-4" />,
      fechaLimite: "1 de junio, 2025",
      url: "https://estudiantes.itsoeh.edu.mx/index.php",
      visible: true,
    },
    {
      id: 4,
      tipo: "titulacion",
      titulo: "Trámites de titulación",
      descripcion: "Si estás por egresar, inicia tus trámites de titulación.",
      icono: <GraduationCap className="h-4 w-4" />,
      fechaLimite: "30 de mayo, 2025",
      url: "http://conect.itsoeh.edu.mx/mix_21_alu/",
      visible: true,
    },
  ])

  // Función para cerrar un aviso
  const cerrarAviso = (id: number) => {
    setAvisos(avisos.map((aviso) => (aviso.id === id ? { ...aviso, visible: false } : aviso)))
  }

  // Filtrar avisos visibles
  const avisosVisibles = avisos.filter((aviso) => aviso.visible)

  // Si no hay avisos visibles y no se deben mostrar todos, no renderizar nada
  if (avisosVisibles.length === 0 && !showAll) {
    return null
  }

  return (
    <div className="space-y-4">
      {!showAll && <h2 className="text-xl font-bold mb-4">Avisos Pendientes</h2>}

      <div className="grid gap-4">
        {(showAll ? avisos : avisosVisibles).map((aviso) => (
          <Alert
            key={aviso.id}
            variant={
              aviso.tipo === "evaluacion"
                ? "default"
                : aviso.tipo === "pago"
                  ? "destructive"
                  : aviso.tipo === "inscripcion"
                    ? "default"
                    : "default"
            }
            className={!aviso.visible && showAll ? "opacity-50" : ""}
          >
            <div className="flex items-start">
              {aviso.icono}
              <div className="ml-2 flex-1">
                <AlertTitle className="flex items-center justify-between">
                  <span>{aviso.titulo}</span>
                  {!showAll && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 rounded-full"
                      onClick={() => cerrarAviso(aviso.id)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Cerrar</span>
                    </Button>
                  )}
                </AlertTitle>
                <AlertDescription>
                  <div className="mt-1">{aviso.descripcion}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-medium">Fecha límite: {aviso.fechaLimite}</span>
                    <a
                      href={aviso.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium underline hover:text-primary"
                    >
                      Más información
                    </a>
                  </div>
                </AlertDescription>
              </div>
            </div>
          </Alert>
        ))}
      </div>

      {showAll && avisosVisibles.length === 0 && (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No hay avisos pendientes en este momento.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
