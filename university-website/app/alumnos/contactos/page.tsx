import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "lucide-react"

export default function ContactosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Directorio de Contactos</h1>
        <p className="text-muted-foreground mt-2">
          Información de contacto de coordinadores, jefes de departamento y personal administrativo.
        </p>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
        <Input type="text" placeholder="Buscar contacto..." />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="academico">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="academico">Académico</TabsTrigger>
          <TabsTrigger value="administrativo">Administrativo</TabsTrigger>
          <TabsTrigger value="departamentos">Departamentos</TabsTrigger>
        </TabsList>

        <TabsContent value="academico" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Coordinadores de Carrera</CardTitle>
              <CardDescription>Contactos de los coordinadores de cada programa educativo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Coordinador" />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Dr. Juan Martínez Pérez</h4>
                    <p className="text-sm text-muted-foreground">
                      Coordinador de Ing. en Tecnologías de la Información y Comunicaciones
                    </p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:coord.tic@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          coord.tic@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 123</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio D, Planta Alta</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 9:00 - 17:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Coordinador" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Dra. María Rodríguez López</h4>
                    <p className="text-sm text-muted-foreground">Coordinadora de Ing. Industrial</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:coord.industrial@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          coord.industrial@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 124</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio C, Planta Baja</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 9:00 - 17:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Coordinador" />
                    <AvatarFallback>RG</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Dr. Roberto González Sánchez</h4>
                    <p className="text-sm text-muted-foreground">Coordinador de Ing. Mecatrónica</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:coord.mecatronica@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          coord.mecatronica@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 125</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio E, Planta Alta</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 9:00 - 17:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Coordinador" />
                    <AvatarFallback>LH</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Dra. Laura Hernández Vázquez</h4>
                    <p className="text-sm text-muted-foreground">Coordinadora de Ing. Civil</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:coord.civil@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          coord.civil@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 126</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio B, Planta Baja</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 9:00 - 17:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jefes de División</CardTitle>
              <CardDescription>Contactos de los jefes de división académica</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Jefe de División" />
                    <AvatarFallback>CA</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Dr. Carlos Álvarez Mendoza</h4>
                    <p className="text-sm text-muted-foreground">Jefe de División de Ingenierías</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:div.ingenierias@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          div.ingenierias@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 130</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Alta</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Jefe de División" />
                    <AvatarFallback>PL</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Dra. Patricia López Torres</h4>
                    <p className="text-sm text-muted-foreground">
                      Jefa de División de Ciencias Económico-Administrativas
                    </p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:div.economicas@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          div.economicas@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 131</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Alta</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="administrativo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Servicios Escolares</CardTitle>
              <CardDescription>Contactos del departamento de servicios escolares</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Jefe de Departamento" />
                    <AvatarFallback>FG</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Lic. Fernando García Ramírez</h4>
                    <p className="text-sm text-muted-foreground">Jefe del Departamento de Servicios Escolares</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a
                          href="mailto:servicios.escolares@itsoeh.edu.mx"
                          className="ml-1 text-blue-600 hover:underline"
                        >
                          servicios.escolares@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 140</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Baja</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 8:00 - 16:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Encargado" />
                    <AvatarFallback>SV</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Lic. Sandra Vega Morales</h4>
                    <p className="text-sm text-muted-foreground">Encargada de Certificación y Titulación</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:titulacion@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          titulacion@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 141</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Baja</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Finanzas y Administración</CardTitle>
              <CardDescription>Contactos del departamento de finanzas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Jefe de Departamento" />
                    <AvatarFallback>RM</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">C.P. Raúl Méndez Ortiz</h4>
                    <p className="text-sm text-muted-foreground">Jefe del Departamento de Recursos Financieros</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a
                          href="mailto:recursos.financieros@itsoeh.edu.mx"
                          className="ml-1 text-blue-600 hover:underline"
                        >
                          recursos.financieros@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 150</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Baja</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 8:00 - 16:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Encargado" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Lic. Lucía Ramírez Flores</h4>
                    <p className="text-sm text-muted-foreground">Encargada de Caja</p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:caja@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          caja@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 (748) 912-3456 Ext. 151</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Baja</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 8:00 - 15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departamentos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Departamentos Académicos</CardTitle>
              <CardDescription>Contactos de los departamentos académicos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Ciencias Básicas</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">Dr. Alejandro Morales Juárez</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:ciencias.basicas@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        ciencias.basicas@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 160</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio D, Planta Baja</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Sistemas y Computación</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">M.C. Eduardo Torres Vargas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:sistemas@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        sistemas@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 161</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio D, Planta Alta</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Ingeniería Industrial</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">M.I. Gabriela Soto Reyes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:industrial@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        industrial@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 162</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio C, Planta Baja</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Ingeniería Civil</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">M.I. Ricardo Pérez Guzmán</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:civil@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        civil@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 163</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio B, Planta Baja</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Ingeniería Mecatrónica</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">Dr. Héctor Jiménez Martínez</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:mecatronica@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        mecatronica@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 164</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio E, Planta Alta</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Ciencias Económico-Administrativas</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">M.A. Claudia Velázquez Durán</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:economico.admin@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        economico.admin@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 165</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio F, Planta Baja</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Departamentos de Apoyo</CardTitle>
              <CardDescription>Contactos de los departamentos de apoyo académico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Centro de Información (Biblioteca)</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Responsable:</span>
                      <span className="ml-1">Lic. Mariana Castillo Rojas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:biblioteca@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        biblioteca@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 170</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio G, Planta Baja</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Horario:</span>
                      <span className="ml-1">Lunes a Viernes 8:00 - 20:00, Sábados 9:00 - 14:00</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Centro de Cómputo</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Responsable:</span>
                      <span className="ml-1">Ing. Daniel Navarro Soto</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:centro.computo@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        centro.computo@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 171</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio D, Planta Baja</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Horario:</span>
                      <span className="ml-1">Lunes a Viernes 8:00 - 20:00</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Actividades Extraescolares</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">Lic. Jorge Medina Vargas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:extraescolares@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        extraescolares@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 172</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio H, Planta Baja</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold">Departamento de Servicio Social y Residencias</h3>
                  <div className="mt-2 text-sm space-y-1">
                    <div className="flex items-center">
                      <span className="font-medium">Jefe:</span>
                      <span className="ml-1">Lic. Ana Luisa Gómez Hernández</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Correo:</span>
                      <a href="mailto:servicio.social@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                        servicio.social@itsoeh.edu.mx
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Teléfono:</span>
                      <span className="ml-1">+52 (748) 912-3456 Ext. 173</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">Ubicación:</span>
                      <span className="ml-1">Edificio A, Planta Alta</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
