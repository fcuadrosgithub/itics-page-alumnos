"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download, FileText, Search } from "lucide-react"

export default function Temario() {
  const [searchTerm, setSearchTerm] = useState("")

  const asignaturas = {
    basicas: [
      { id: "mat101", nombre: "Cálculo Diferencial", pdf: "/temarios/calculo-diferencial.pdf" },
      { id: "mat102", nombre: "Cálculo Integral", pdf: "/temarios/calculo-integral.pdf" },
      { id: "mat103", nombre: "Álgebra Lineal", pdf: "/temarios/algebra-lineal.pdf" },
      { id: "mat104", nombre: "Ecuaciones Diferenciales", pdf: "/temarios/ecuaciones-diferenciales.pdf" },
      { id: "quim101", nombre: "Química", pdf: "/temarios/quimica.pdf" },
      { id: "est101", nombre: "Probabilidad y Estadística", pdf: "/temarios/probabilidad-estadistica.pdf" },
    ],
    programacion: [
      { id: "prog101", nombre: "Fundamentos de Programación", pdf: "/temarios/fundamentos-programacion.pdf" },
      { id: "prog102", nombre: "Programación Orientada a Objetos", pdf: "/temarios/poo.pdf" },
      { id: "prog103", nombre: "Estructura de Datos", pdf: "/temarios/estructura-datos.pdf" },
      { id: "prog104", nombre: "Desarrollo de Aplicaciones Web", pdf: "/temarios/desarrollo-web.pdf" },
      { id: "prog105", nombre: "Programación Web", pdf: "/temarios/programacion-web.pdf" },
      {
        id: "prog106",
        nombre: "Desarrollo de Aplicaciones para Dispositivos Móviles",
        pdf: "/temarios/apps-moviles.pdf",
      },
    ],
    redes: [
      { id: "red101", nombre: "Fundamentos de Redes", pdf: "/temarios/fundamentos-redes.pdf" },
      { id: "red102", nombre: "Redes de Computadoras", pdf: "/temarios/redes-computadoras.pdf" },
      { id: "red103", nombre: "Administración de Redes", pdf: "/temarios/administracion-redes.pdf" },
      { id: "red104", nombre: "Seguridad Informática", pdf: "/temarios/seguridad-informatica.pdf" },
    ],
    sistemas: [
      { id: "sis101", nombre: "Sistemas Operativos", pdf: "/temarios/sistemas-operativos.pdf" },
      { id: "sis102", nombre: "Taller de Sistemas Operativos", pdf: "/temarios/taller-sistemas-operativos.pdf" },
      { id: "sis103", nombre: "Arquitectura de Computadoras", pdf: "/temarios/arquitectura-computadoras.pdf" },
      { id: "sis104", nombre: "Sistemas Programables", pdf: "/temarios/sistemas-programables.pdf" },
    ],
    datos: [
      { id: "dat101", nombre: "Fundamentos de Bases de Datos", pdf: "/temarios/fundamentos-bd.pdf" },
      { id: "dat102", nombre: "Administración de Bases de Datos", pdf: "/temarios/administracion-bd.pdf" },
      { id: "dat103", nombre: "Bases de Datos Distribuidas", pdf: "/temarios/bd-distribuidas.pdf" },
    ],
    ingenieria: [
      { id: "ing101", nombre: "Ingeniería de Software", pdf: "/temarios/ingenieria-software.pdf" },
      { id: "ing102", nombre: "Gestión de Proyectos de Software", pdf: "/temarios/gestion-proyectos.pdf" },
      { id: "ing103", nombre: "Taller de Investigación I", pdf: "/temarios/investigacion-1.pdf" },
      { id: "ing104", nombre: "Taller de Investigación II", pdf: "/temarios/investigacion-2.pdf" },
    ],
  }

  const allAsignaturas = [
    ...asignaturas.basicas,
    ...asignaturas.programacion,
    ...asignaturas.redes,
    ...asignaturas.sistemas,
    ...asignaturas.datos,
    ...asignaturas.ingenieria,
  ]

  const filteredAsignaturas = searchTerm
    ? allAsignaturas.filter((asignatura) => asignatura.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
    : []

  const handleDownload = (pdf: string, nombre: string) => {
    // En una implementación real, esto descargaría el PDF
    alert(`Descargando temario de ${nombre}`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Temarios</CardTitle>
          <CardDescription>Consulta y descarga los temarios de las asignaturas de la carrera</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar asignatura..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {searchTerm && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Resultados de búsqueda</h3>
              {filteredAsignaturas.length > 0 ? (
                <div className="grid gap-2">
                  {filteredAsignaturas.map((asignatura) => (
                    <div
                      key={asignatura.id}
                      className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{asignatura.nombre}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(asignatura.pdf, asignatura.nombre)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        <span>Descargar</span>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No se encontraron asignaturas con ese nombre.</p>
              )}
            </div>
          )}

          <Tabs defaultValue="basicas">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
              <TabsTrigger value="basicas">Básicas</TabsTrigger>
              <TabsTrigger value="programacion">Programación</TabsTrigger>
              <TabsTrigger value="redes">Redes</TabsTrigger>
              <TabsTrigger value="sistemas">Sistemas</TabsTrigger>
              <TabsTrigger value="datos">Datos</TabsTrigger>
              <TabsTrigger value="ingenieria">Ingeniería</TabsTrigger>
            </TabsList>

            {Object.entries(asignaturas).map(([categoria, lista]) => (
              <TabsContent key={categoria} value={categoria} className="mt-0">
                <div className="grid gap-2">
                  {lista.map((asignatura) => (
                    <div
                      key={asignatura.id}
                      className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                        <span>{asignatura.nombre}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(asignatura.pdf, asignatura.nombre)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        <span>Descargar</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
