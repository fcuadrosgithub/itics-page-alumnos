import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export default function ContactosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Directorio de Contactos</h1>
        <p className="text-muted-foreground mt-2">
          Información de contactos de jefe de departamento y personal Docente.</p>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
        <Input type="text" placeholder="Buscar contacto..." />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="academico">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="academico">Cordinación de Carrera</TabsTrigger>
          <TabsTrigger value="administrativo">División ITIC'S</TabsTrigger>
        </TabsList>

        <TabsContent value="academico" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Jefe de Carrera</CardTitle>
              <CardDescription>Contacto de Jede de División</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Lic. Juan Cornejo Hernández</h4>
                    <p className="text-sm text-muted-foreground">
                      Jefe de la División de Ingeniería en Tecnologías de la Información y Comunicaciones
                    </p>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:coord.tic@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          jcornejo@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Teléfono:</span>
                        <span className="ml-1">+52 738 73 54 000 Ext. 270</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Cel/WhatsApp:</span>
                        <span className="ml-1">+52 773 109 97 48</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Alta</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Horario:</span>
                        <span className="ml-1">Lunes a Viernes 9:00 - 17:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repite este bloque para otros contactos */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academico" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Asistente</CardTitle>
              <CardDescription>Contacto de Asistente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Ejemplo de un contacto */}
                <div className="flex items-start space-x-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Lic. Aracely Hernández Rojo</h4>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">Correo:</span>
                        <a href="mailto:coord.tic@itsoeh.edu.mx" className="ml-1 text-blue-600 hover:underline">
                          a.herandez@itsoeh.edu.mx
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Cel/WhatsApp:</span>
                        <span className="ml-1">+52 772 123 11 18</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Oficina:</span>
                        <span className="ml-1">Edificio A, Planta Alta</span>
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
        </TabsContent>
       <TabsContent value="administrativo" className="space-y-4">
  <Card>
    <CardHeader>
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Doc. Javier Cuadros Romero</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  fcuadros@itsoeh.edu.mx
                </a>
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
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>YM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Mtra. Yadira Eufemia Gaspar Morales</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  ygaspar@itsoeh.edu.mx
                </a>
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
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Mtro. José Martin Oropeza Méndez</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  jmoropeza@itsoeh.edu.mx
                </a>
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
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>TH</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Mtra. Talhia Heidi Hernández Omaña</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  thernandez@itsoeh.edu.mx
                </a>
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
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Mtro. Saúl Isaí Soto Ortiz</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  ssoto@itsoeh.edu.mx
                </a>
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
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Mtro. Pedro Jhoan Salazar Pérez</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  psalazar@itsoeh.edu.mx
                </a>
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
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Mtro. Eunice Santiago Manzano</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  psalazar@itsoeh.edu.mx
                </a>
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
      <CardTitle>Docente</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/alumnos/imagenes/doc_javier.jpg" alt="Doc. Javier Cuadros Romero" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold">Mtro. María Guadalupe Tolentino Cruz</h4>
            <p className="text-sm text-muted-foreground"></p>
            <div className="text-sm">
              <div className="flex items-center">
                <span className="font-medium">Correo:</span>
                <a
                  href="mailto:servicios.escolares@itsoeh.edu.mx"
                  className="ml-1 text-blue-600 hover:underline"
                >
                  psalazar@itsoeh.edu.mx
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>
      </Tabs>
    </div>
  );
}