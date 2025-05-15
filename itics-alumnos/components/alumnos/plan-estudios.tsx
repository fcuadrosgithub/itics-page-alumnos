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
        { nombre: "Cálculo Diferencial", creditos: 5, horas: 4 },
        { nombre: "Fundamentos de Programación", creditos: 5, horas: 5 },
        { nombre: "Taller de Ética", creditos: 4, horas: 4 },
        { nombre: "Matemáticas Discretas", creditos: 5, horas: 5 },
        { nombre: "Introducción a las TICs", creditos: 4, horas: 4 },
        { nombre: "Taller de Administración", creditos: 4, horas: 4 },
      ],
    },
    {
      semestre: "Segundo Semestre",
      materias: [
        { nombre: "Cálculo Integral", creditos: 5, horas: 4 },
        { nombre: "Programación Orientada a Objetos", creditos: 5, horas: 5 },
        { nombre: "Contabilidad y Costos", creditos: 4, horas: 4 },
        { nombre: "Química", creditos: 4, horas: 4 },
        { nombre: "Álgebra Lineal", creditos: 5, horas: 5 },
        { nombre: "Probabilidad y Estadística", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Tercer Semestre",
      materias: [
        { nombre: "Cálculo Vectorial", creditos: 5, horas: 4 },
        { nombre: "Estructura de Datos", creditos: 5, horas: 5 },
        { nombre: "Cultura Empresarial", creditos: 4, horas: 4 },
        { nombre: "Investigación de Operaciones", creditos: 4, horas: 4 },
        { nombre: "Sistemas Operativos", creditos: 5, horas: 5 },
        { nombre: "Fundamentos de Bases de Datos", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Cuarto Semestre",
      materias: [
        { nombre: "Ecuaciones Diferenciales", creditos: 5, horas: 4 },
        { nombre: "Métodos Numéricos", creditos: 4, horas: 4 },
        { nombre: "Taller de Sistemas Operativos", creditos: 4, horas: 4 },
        { nombre: "Fundamentos de Redes", creditos: 5, horas: 5 },
        { nombre: "Administración de Bases de Datos", creditos: 5, horas: 5 },
        { nombre: "Simulación", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Quinto Semestre",
      materias: [
        { nombre: "Desarrollo de Aplicaciones Web", creditos: 5, horas: 5 },
        { nombre: "Redes de Computadoras", creditos: 5, horas: 5 },
        { nombre: "Bases de Datos Distribuidas", creditos: 5, horas: 5 },
        { nombre: "Taller de Investigación I", creditos: 4, horas: 4 },
        { nombre: "Arquitectura de Computadoras", creditos: 5, horas: 5 },
        { nombre: "Ingeniería de Software", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Sexto Semestre",
      materias: [
        { nombre: "Programación Web", creditos: 5, horas: 5 },
        { nombre: "Administración de Redes", creditos: 5, horas: 5 },
        { nombre: "Taller de Investigación II", creditos: 4, horas: 4 },
        { nombre: "Sistemas Programables", creditos: 5, horas: 5 },
        { nombre: "Gestión de Proyectos de Software", creditos: 6, horas: 6 },
        { nombre: "Lenguajes y Autómatas", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Séptimo Semestre",
      materias: [
        { nombre: "Desarrollo de Aplicaciones para Dispositivos Móviles", creditos: 5, horas: 5 },
        { nombre: "Seguridad Informática", creditos: 5, horas: 5 },
        { nombre: "Inteligencia Artificial", creditos: 4, horas: 4 },
        { nombre: "Desarrollo de Emprendedores", creditos: 5, horas: 5 },
        { nombre: "Negocios Electrónicos", creditos: 5, horas: 5 },
        { nombre: "Optativa I", creditos: 5, horas: 5 },
      ],
    },
    {
      semestre: "Octavo Semestre",
      materias: [
        { nombre: "Auditoría en Tecnologías de la Información", creditos: 5, horas: 5 },
        { nombre: "Optativa II", creditos: 5, horas: 5 },
        { nombre: "Optativa III", creditos: 5, horas: 5 },
        { nombre: "Residencia Profesional", creditos: 10, horas: 10 },
        { nombre: "Servicio Social", creditos: 10, horas: 10 },
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
