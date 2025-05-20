import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">ITSOEH</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Inicio
        </Link>
        <Link href="/aspirantes" className="text-sm font-medium transition-colors hover:text-primary">
          Aspirantes
        </Link>
        <Link href="/alumnos" className="text-sm font-medium transition-colors hover:text-primary">
          Alumnos
        </Link>
        <Link href="/docentes" className="text-sm font-medium transition-colors hover:text-primary">
          Docentes
        </Link>
        <Link href="/egresados" className="text-sm font-medium transition-colors hover:text-primary">
          Egresados
        </Link>
        <Link href="/publico" className="text-sm font-medium transition-colors hover:text-primary">
          Público
        </Link>
      </nav>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menú</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Menú</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">Inicio</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/aspirantes">Aspirantes</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/alumnos">Alumnos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/docentes">Docentes</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/egresados">Egresados</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/publico">Público</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
