import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Navegación</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos">
                  <Home className="mr-2 h-4 w-4" />
                  Inicio
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/perfil-egreso">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Perfil de Egreso
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/planes-temarios">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Planes y Temarios
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/contactos">
                  <Contact className="mr-2 h-4 w-4" />
                  Contactos
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/calendario">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendario Escolar
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/conect">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Conect
                </Link>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trámites</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/evaluacion-docente">
                  <Users className="mr-2 h-4 w-4" />
                  Evaluación Docente
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/pagos">
                  <Receipt className="mr-2 h-4 w-4" />
                  Pagos 2da. Oportunidad
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/reinscripciones">
                  <ScrollText className="mr-2 h-4 w-4" />
                  Reinscripciones
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/alumnos/titulacion">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Titulación
                </Link>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Ayuda</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Soporte Técnico
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
