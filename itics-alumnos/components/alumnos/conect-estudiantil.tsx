import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, BookOpen, FileText, Users, ExternalLink, Bookmark } from "lucide-react"

export default function ConectEstudiantil() {
  const accesosRapidos = [
    {
      titulo: "Plataforma Institucional",
      descripcion: "Accede a tu plataforma",
      icono: <BookOpen className="h-8 w-8" />,
      url: "https://www.itsoeh.edu.mx/front/",
      color: "bg-blue-100 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      titulo: "Correo Escolar",
      descripcion: "Revisa tu correo institucional",
      icono: <Mail className="h-8 w-8" />,
      url: "https://correo.institucion.edu",
      color: "bg-red-100 dark:bg-red-900/20",
      textColor: "text-red-600 dark:text-red-400",
    },
    {
      titulo: "Servicios Escolares",
      descripcion: "Realiza pagos de materias",
      icono: <FileText className="h-8 w-8" />,
      url: "https://estudiantes.itsoeh.edu.mx/index.php",
      color: "bg-green-100 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      titulo: "Grupos Estudiantiles",
      descripcion: "Conecta con grupos y foros de estudiantes",
      icono: <Users className="h-8 w-8" />,
      url: "https://grupos.institucion.edu",
      color: "bg-purple-100 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      titulo: "Biblioteca Digital",
      descripcion: "Accede a libros, revistas y recursos académicos",
      icono: <Bookmark className="h-8 w-8" />,
      url: "https://biblioteca.institucion.edu",
      color: "bg-amber-100 dark:bg-amber-900/20",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      titulo: "CONECT",
      descripcion: "Consulta calificaciones, horarios y más",
      icono: <ExternalLink className="h-8 w-8" />,
      url: "http://conect.itsoeh.edu.mx/mix_21_alu/",
      color: "bg-cyan-100 dark:bg-cyan-900/20",
      textColor: "text-cyan-600 dark:text-cyan-400",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Conect - Conexión Estudiantil</CardTitle>
          <CardDescription>
            Accesos rápidos a los servicios y plataformas más utilizados por los estudiantes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {accesosRapidos.map((acceso, index) => (
              <a key={index} href={acceso.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="h-full border rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/50">
                  <div className="flex flex-col h-full">
                    <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 ${acceso.color}`}>
                      <div className={acceso.textColor}>{acceso.icono}</div>
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {acceso.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{acceso.descripcion}</p>
                    <div className="mt-auto flex items-center text-sm font-medium text-primary">
                      <span>Acceder</span>
                      <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
