import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MobileNav } from "@/components/mobile-nav"

export default function AlumnosPage() {
  return (
    <div className="space-y-6">
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Portal de Alumnos</h1>
        <p className="text-muted-foreground">
          Bienvenido al portal de alumnos del Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Aquí
          encontrarás toda la información relevante para tu vida académica.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/alumnos/perfil-egreso" className="block">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#0a2463] text-white text-xs rounded-bl-md">
              Académico
            </div>
            <CardHeader>
              <CardTitle>Perfil de Egreso</CardTitle>
              <CardDescription>Conoce las competencias que desarrollarás durante tu formación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Información sobre las habilidades y conocimientos que adquirirás al finalizar tus estudios.
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/alumnos/planes-temarios" className="block">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#0a2463] text-white text-xs rounded-bl-md">
              Académico
            </div>
            <CardHeader>
              <CardTitle>Planes y Temarios</CardTitle>
              <CardDescription>Consulta los planes de estudio y temarios de tu carrera</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Accede a los planes de estudio y temarios detallados de cada asignatura.
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/alumnos/contactos" className="block">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#0a2463] text-white text-xs rounded-bl-md">
              Académico
            </div>
            <CardHeader>
              <CardTitle>Contactos</CardTitle>
              <CardDescription>Directorio de contactos académicos y administrativos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Información de contacto de coordinadores, jefes de departamento y personal administrativo.
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/alumnos/calendario" className="block">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#0a2463] text-white text-xs rounded-bl-md">
              Académico
            </div>
            <CardHeader>
              <CardTitle>Calendario Escolar</CardTitle>
              <CardDescription>Consulta las fechas importantes del ciclo escolar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Calendario con fechas de exámenes, periodos vacacionales y eventos académicos.
              </div>
            </CardContent>
          </Card>
        </Link>
          <Link href="http://conect.itsoeh.edu.mx/mix_21_alu/" className="block" target="_blank" rel="noopener noreferrer">
            <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#0a2463] text-white text-xs rounded-bl-md">
                Académico
              </div>
              <CardHeader>
                <CardTitle>Conect</CardTitle>
                <CardDescription>Plataforma de comunicación y recursos educativos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Accede a la plataforma educativa para consultar materiales y comunicarte con tus profesores.</div>
              </CardContent>
            </Card>
          </Link>
        <Link href="/alumnos/evaluacion-docente" className="block">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#e63946] text-white text-xs rounded-bl-md">
              Trámite
            </div>
            <CardHeader>
              <CardTitle>Evaluación Docente</CardTitle>
              <CardDescription>Evalúa el desempeño de tus profesores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Sistema para la evaluación del desempeño docente al final de cada periodo.
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="https://estudiantes.itsoeh.edu.mx/" className="block" target="_blank" rel="noopener noreferrer">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#e63946] text-white text-xs rounded-bl-md">
              Trámite
            </div>
            <CardHeader>
              <CardTitle>Pagos de 2da. Oportunidad</CardTitle>
              <CardDescription>Información sobre pagos de exámenes de segunda oportunidad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Procedimiento y costos para realizar pagos de exámenes de segunda oportunidad.
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/alumnos/reinscripciones" className="block">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#e63946] text-white text-xs rounded-bl-md">
              Trámite
            </div>
            <CardHeader>
              <CardTitle>Reinscripciones</CardTitle>
              <CardDescription>Proceso de reinscripción para el siguiente semestre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Información sobre fechas, requisitos y procedimiento para reinscripciones.
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/alumnos/titulacion" className="block">
          <Card className="h-full transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#e63946] text-white text-xs rounded-bl-md">
              Trámite
            </div>
            <CardHeader>
              <CardTitle>Titulación</CardTitle>
              <CardDescription>Información sobre el proceso de titulación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Modalidades, requisitos y procedimiento para realizar el trámite de titulación.
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
