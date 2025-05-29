"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Download, FileText, Search } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Temario() {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")

  const materiasPorSemestre = {
    primero: [
      { nombre: "Cálculo Diferencial", creditos: 5 },
      { nombre: "Fundamentos de Programación", creditos: 5 },
      { nombre: "Matemáticas Discretas I", creditos: 5 },
      { nombre: "Introducción a las TIC's", creditos: 3 },
      { nombre: "Taller de Ética", creditos: 4 },
      { nombre: "Fundamentos de Investigación", creditos: 4 },
    ],
    segundo: [
      { nombre: "Cálculo Integral", creditos: 5 },
      { nombre: "Programación Orientada a Objetos", creditos: 5 },
      { nombre: "Matemáticas Discretas II", creditos: 5 },
      { nombre: "Probabilidad y Estadística", creditos: 5 },
      { nombre: "Contabilidad y Costos", creditos: 5 },
      { nombre: "Electricidad y Magnetismo", creditos: 5 },
    ],
    tercero: [
      { nombre: "Matemáticas Aplicadas a Comunicaciones", creditos: 4 },
      { nombre: "Estructura y Organización de Datos", creditos: 5 },
      { nombre: "Administración Gerencial", creditos: 4 },
      { nombre: "Fundamentos de Bases Datos", creditos: 5 },
      { nombre: "Álgebra Lineal", creditos: 5 },
      { nombre: "Circuitos Eléctricos y Electrónicos", creditos: 5 },
    ],
    cuarto: [
      { nombre: "Análisis de Señales y Sistemas de Comunicación", creditos: 5 },
      { nombre: "Programación II", creditos: 5 },
      { nombre: "Matemáticas Para la Toma de Decisiones", creditos: 5 },
      { nombre: "Fundamentos de Redes", creditos: 5 },
      { nombre: "Taller de Base de Datos", creditos: 4 },
      { nombre: "Arquitectura de Computadoras", creditos: 4 },
      { nombre: "Ingeniería de Software", creditos: 4 },
    ],
    quinto: [
      { nombre: "Redes de Computadora", creditos: 5 },
      { nombre: "Telecomunicaciones", creditos: 5 },
      { nombre: "Desarrollo Sustentable", creditos: 5 },
      { nombre: "Base de Datos Distribuidas", creditos: 5 },
      { nombre: "Sistemas Operativos I", creditos: 4 },
      { nombre: "Taller de Ingeniería de Software", creditos: 4 },
      { nombre: "Administración de Proyectos", creditos: 4 },
    ],
    sexto: [
      { nombre: "Redes Emergentes", creditos: 5 },
      { nombre: "Programación WEB", creditos: 5 },
      { nombre: "Desarrollo de Emprendedores", creditos: 5 },
      { nombre: "Taller de Investigación I", creditos: 4 },
      { nombre: "Sistemas Operativos II", creditos: 5 },
      { nombre: "Tecnologías Inalámbricas", creditos: 4 },
      { nombre: "Interacción Humano Computadora", creditos: 4 },
    ],
    septimo: [
      { nombre: "Desarrollo de Aplicaciones para Dispositivos Móviles", creditos: 5 },
      { nombre: "Analítica de Datos I", creditos: 5 },
      { nombre: "Administración y Seguridad de Redes", creditos: 5 },
      { nombre: "Taller de Investigación II", creditos: 4 },
      { nombre: "Negocios Electrónicos I", creditos: 4 },
    ],
    octavo: [
      { nombre: "Auditoría en Tecnologías de Información", creditos: 4 },
      { nombre: "Ingeniería del Conocimiento", creditos: 4 },
      { nombre: "Analítica de Datos II", creditos: 5 },
      { nombre: "Internet de las Cosas", creditos: 5 },
      { nombre: "Negocios Electrónicos II", creditos: 4 },
      { nombre: "Ciberseguridad y Protección de Datos", creditos: 5 },
      { nombre: "Ingeniería de Seguridad en la Nube", creditos: 5 },
    ],
  }

  const semestreLabels = {
    primero: "1er Semestre",
    segundo: "2do Semestre",
    tercero: "3er Semestre",
    cuarto: "4to Semestre",
    quinto: "5to Semestre",
    sexto: "6to Semestre",
    septimo: "7mo Semestre",
    octavo: "8vo Semestre",
  }

  const todasLasMaterias = Object.entries(materiasPorSemestre).flatMap(([semestre, materias]) =>
    materias.map((materia) => ({ ...materia, semestre }))
  )

  // Función para quitar acentos y normalizar texto
  const normalizeText = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  const materiasFiltradas = searchTerm
    ? todasLasMaterias.filter((materia) =>
        normalizeText(materia.nombre).includes(normalizeText(searchTerm))
      )
    : []

  const generarRutaPDF = (nombre: string) => {
    const nombreNormalizado = nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // quitar acentos
      .replace(/\s+/g, "_") // espacios por guiones bajos
      .replace(/[^\w]/g, "") // quitar símbolos no válidos
    return `/temarios/${nombreNormalizado}.pdf`
  }

  const handleDownload = (nombreMateria: string, creditos: number) => {
  const ruta = generarRutaPDF(nombreMateria)
  const link = document.createElement("a")
  link.href = ruta
  link.download = `${nombreMateria}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  toast({
    title: "Descarga iniciada",
    description: `Descargando temario de "${nombreMateria}" (${creditos} créditos)`,
  })
}


  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Temarios por Semestre</CardTitle>
          <CardDescription>
            Consulta y descarga los temarios de las asignaturas organizados por semestre
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar materia..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {searchTerm && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Resultados de búsqueda</h3>
              {materiasFiltradas.length > 0 ? (
                <div className="grid gap-2">
                  {materiasFiltradas.map((materia, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                        <div>
                          <span className="font-medium">{materia.nombre}</span>
                          <div className="text-sm text-muted-foreground">
                            {semestreLabels[materia.semestre as keyof typeof semestreLabels]} • {materia.creditos} créditos
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(materia.nombre, materia.creditos)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        <span>Descargar</span>
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No se encontraron materias con ese nombre.</p>
              )}
            </div>
          )}

          <Tabs defaultValue="primero">
            <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-6">
              {Object.entries(semestreLabels).map(([key, label]) => (
                <TabsTrigger key={key} value={key} className="text-xs">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(materiasPorSemestre).map(([semestre, materias]) => (
              <TabsContent key={semestre} value={semestre} className="mt-0">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold mb-4">
                    {semestreLabels[semestre as keyof typeof semestreLabels]}
                  </h3>
                  {materias.map((materia, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center flex-1">
                        <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                        <div className="flex-1">
                          <span className="font-medium">{materia.nombre}</span>
                          <div className="text-sm text-muted-foreground">{materia.creditos} créditos</div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDownload(materia.nombre, materia.creditos)}
                        className="ml-4"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        <span>Descargar</span>
                      </Button>
                    </div>
                  ))}
                  <div className="mt-4 p-3 bg-muted/30 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Total de créditos del semestre:</strong>{" "}
                      {materias.reduce((total, materia) => total + materia.creditos, 0)} créditos
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
