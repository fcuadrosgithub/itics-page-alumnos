import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PerfilEgreso from "@/components/alumnos/perfil-egreso"
import PlanEstudios from "@/components/alumnos/plan-estudios"
import Temario from "@/components/alumnos/temario"
import ContactoForm from "@/components/alumnos/contacto-form"
import CalendarioEscolar from "@/components/alumnos/calendario-escolar"
import ConectEstudiantil from "@/components/alumnos/conect-estudiantil"
import AvisosPendientes from "@/components/alumnos/avisos-pendientes"
import { ModeToggle } from "@/components/mode-toggle"

export default function AlumnosPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Sección de Alumnos</h1>
        <ModeToggle />
      </div>

      <AvisosPendientes />

      <Tabs defaultValue="perfil" className="mt-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full mb-8">
          <TabsTrigger value="perfil">Perfil de Egreso</TabsTrigger>
          <TabsTrigger value="plan">Plan de Estudios</TabsTrigger>
          <TabsTrigger value="temario">Temario</TabsTrigger>
          <TabsTrigger value="contacto">Contacto</TabsTrigger>
          <TabsTrigger value="calendario">Calendario</TabsTrigger>
          <TabsTrigger value="conect">Conect</TabsTrigger>
          <TabsTrigger value="avisos">Avisos</TabsTrigger>
        </TabsList>

        <TabsContent value="perfil" className="mt-4">
          <PerfilEgreso />
        </TabsContent>

        <TabsContent value="plan" className="mt-4">
          <PlanEstudios />
        </TabsContent>

        <TabsContent value="temario" className="mt-4">
          <Temario />
        </TabsContent>

        <TabsContent value="contacto" className="mt-4">
          <ContactoForm />
        </TabsContent>

        <TabsContent value="calendario" className="mt-4">
          <CalendarioEscolar />
        </TabsContent>

        <TabsContent value="conect" className="mt-4">
          <ConectEstudiantil />
        </TabsContent>

        <TabsContent value="avisos" className="mt-4">
          <AvisosPendientes showAll={true} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
