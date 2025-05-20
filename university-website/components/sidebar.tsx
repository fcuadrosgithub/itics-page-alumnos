import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Calendar,
  Contact,
  GraduationCap,
  Home,
  LayoutDashboard,
  MessageSquare,
  Receipt,
  ScrollText,
  Users,
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Portal de Alumnos</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start" asChild>
              <Link href="/alumnos">
                <Home className="mr-2 h-4 w-4" />
                Inicio
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/perfil-egreso">
                <GraduationCap className="mr-2 h-4 w-4" />
                Perfil de Egreso
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/planes-temarios">
                <BookOpen className="mr-2 h-4 w-4" />
                Planes y Temarios
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/contactos">
                <Contact className="mr-2 h-4 w-4" />
                Contactos
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/calendario">
                <Calendar className="mr-2 h-4 w-4" />
                Calendario Escolar
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/conect">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Conect
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Trámites</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/evaluacion-docente">
                <Users className="mr-2 h-4 w-4" />
                Evaluación Docente
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/pagos">
                <Receipt className="mr-2 h-4 w-4" />
                Pagos 2da. Oportunidad
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/reinscripciones">
                <ScrollText className="mr-2 h-4 w-4" />
                Reinscripciones
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/alumnos/titulacion">
                <GraduationCap className="mr-2 h-4 w-4" />
                Titulación
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Ayuda</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="mr-2 h-4 w-4" />
              Soporte Técnico
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
