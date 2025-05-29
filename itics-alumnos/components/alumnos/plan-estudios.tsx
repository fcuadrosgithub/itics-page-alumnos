"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function PlanEstudios() {
  const [expandedSemester, setExpandedSemester] = useState<string | null>(null)

  const planEstudios = [
    {
      semestre: "Primer Semestre",
      materias: [
        { nombre: "Cálculo Diferencial", creditos: 5, horas: 5 },
        { nombre: "Fundamentos de Programación", creditos: 5, horas: 5 },
        { nombre: "Matemáticas Discretas I", creditos: 5, horas: 5 },
        { nombre: "Introducción a las TIC's", creditos: 3, horas: 3 },
        { nombre: "Taller de Ética", creditos: 4, horas: 4 },
        { nombre: "Fundamentos de Investigación", creditos: 4, horas: 4 },
      ],
    },
    {
      semestre: "Segundo Semestre",
      materias: [
        { nombre: "Cálculo Integral", creditos: 5, horas: 5 },
        { nombre: "Programación Orientada a Objetos", creditos: 5, horas: 5 },
        { nombre: "Matemáticas Discretas II", creditos: 5, horas: 5 },
        { nombre: "Probabilidad y Estadística", creditos: 5, horas: 5 },
        { nombre: "Contabilidad y Costos", creditos: 5, horas: 5 },
        { nombre: "Electricidad y Magnetismo", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Tercer Semestre",
      materias: [
        { nombre: "Matemáticas Aplicadas a Comunicaciones", creditos: 4, horas: 4 },
        { nombre: "Estructura y Organización de Datos", creditos: 5, horas: 5 },
        { nombre: "Administración Gerencial", creditos: 4, horas: 4 },
        { nombre: "Fundamentos de Bases Datos", creditos: 5, horas: 5 },
        { nombre: "Álgebra Lineal", creditos: 5, horas: 5 },
        { nombre: "Circuitos Eléctricos y Electrónicos", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Cuarto Semestre",
      materias: [
        { nombre: "Análisis de Señales y Sistemas de Comunicación", creditos: 5, horas: 5 },
        { nombre: "Programación II", creditos: 5, horas: 5 },
        { nombre: "Matemáticas Para la Toma de Decisiones", creditos: 5, horas: 5 },
        { nombre: "Fundamentos de Redes", creditos: 5, horas: 5 },
        { nombre: "Taller de Base de Datos", creditos: 4, horas: 4 },
        { nombre: "Arquitectura de Computadoras", creditos: 4, horas: 4 },
        { nombre: "Ingeniería de Software", creditos: 4, horas: 4 },
      ],
    },
    {
      semestre: "Quinto Semestre",
      materias: [
        { nombre: "Redes de Computadora", creditos: 5, horas: 5 },
        { nombre: "Telecomunicaciones", creditos: 5, horas: 5 },
        { nombre: "Desarrollo Sustentable", creditos: 5, horas: 5 },
        { nombre: "Base de Datos Distribuidas", creditos: 5, horas: 5 },
        { nombre: "Sistemas Operativos I", creditos: 4, horas: 4 },
        { nombre: "Taller de Ingeniería de Software", creditos: 4, horas: 4 },
        { nombre: "Administración de Proyectos", creditos: 4, horas: 4 },
      ],
    },
    {
      semestre: "Sexto Semestre",
      materias: [
        { nombre: "Redes Emergentes", creditos: 5, horas: 5 },
        { nombre: "Programación WEB", creditos: 5, horas: 5 },
        { nombre: "Desarrollo de Emprendedores", creditos: 5, horas: 5 },
        { nombre: "Taller de Investigación I", creditos: 4, horas: 4 },
        { nombre: "Sistemas Operativos II", creditos: 5, horas: 5 },
        { nombre: "Tecnologías Inalámbricas", creditos: 4, horas: 4 },
        { nombre: "Interacción Humano Computadora", creditos: 4, horas: 4 },
      ],
    },
    {
      semestre: "Séptimo Semestre",
      materias: [
        { nombre: "Desarrollo de Aplicaciones para Dispositivos Móviles", creditos: 5, horas: 5 },
        { nombre: "Analítica de Datos I", creditos: 5, horas: 5 },
        { nombre: "Administración y Seguridad de Redes", creditos: 5, horas: 5 },
        { nombre: "Taller de Investigación II", creditos: 4, horas: 4 },
        { nombre: "Negocios Electrónicos I", creditos: 4, horas: 4 },
      ],
    },
    {
      semestre: "Octavo Semestre",
      materias: [
        { nombre: "Auditoría en Tecnologías de Información", creditos: 4, horas: 4 },
        { nombre: "Ingeniería del Conocimiento", creditos: 4, horas: 4 },
        { nombre: "Analítica de Datos II", creditos: 5, horas: 5 },
        { nombre: "Internet de las Cosas", creditos: 5, horas: 5 },
        { nombre: "Negocios Electrónicos II", creditos: 4, horas: 4 },
        { nombre: "Ciberseguridad y Protección de Datos", creditos: 5, horas: 5 },
        { nombre: "Ingeniería de Seguridad en la Nube", creditos: 5, horas: 5 },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Plan de Estudios</CardTitle>
          <CardDescription>
            Plan curricular de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            El plan de estudios está diseñado para proporcionar una formación integral en el área de las Tecnologías de
            la Información y Comunicaciones, con un enfoque práctico y orientado a las necesidades actuales del mercado
            laboral.
          </p>

          <div className="grid gap-4">
            {planEstudios.map((semestre, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                value={expandedSemester === semestre.semestre ? semestre.semestre : undefined}
                onValueChange={(value) => setExpandedSemester(value)}
              >
                <AccordionItem value={semestre.semestre} className="border rounded-lg px-4">
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-3">
                        {index + 1}
                      </Badge>
                      <span className="font-medium">{semestre.semestre}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2 px-4 text-left">Asignatura</th>
                            <th className="py-2 px-4 text-center">Créditos</th>
                            <th className="py-2 px-4 text-center">Horas/Semana</th>
                          </tr>
                        </thead>
                        <tbody>
                          {semestre.materias.map((materia, mIndex) => (
                            <tr key={mIndex} className="border-b last:border-0 hover:bg-muted/50">
                              <td className="py-3 px-4">{materia.nombre}</td>
                              <td className="py-3 px-4 text-center">{materia.creditos}</td>
                              <td className="py-3 px-4 text-center">{materia.horas}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
