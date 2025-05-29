import { Card, CardContent } from "@/components/ui/card";

export default function Calendario() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Calendario Académico</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Consulta las fechas importantes del calendario académico del periodo actual.
        </p>

        <Card className="overflow-hidden shadow-lg border-2 border-pink-200">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 text-center">
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">Calendario Académico 2025</h2>
              <p className="text-gray-600">Fechas importantes y eventos académicos</p>
            </div>

            <div className="p-8 bg-white">
              <div className="relative w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                {/* Visualizador del PDF del calendario */}
                <iframe
                  src="/Calendario.pdf"
                  width="100%"
                  height="600px"
                  className="rounded-lg shadow-lg"
                  title="Calendario Académico PDF"
                ></iframe>
              </div>
            </div>

            <div className="bg-purple-50 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-pink-600 mb-3">Fechas Importantes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Inicio de clases: Agosto 2025</li>
                    <li>• Período de exámenes parciales</li>
                    <li>• Vacaciones de invierno</li>
                    <li>• Exámenes finales</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-600 mb-3">Eventos Académicos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Semana de ingeniería</li>
                    <li>• Jornadas de investigación</li>
                    <li>• Feria de empleo</li>
                    <li>• Ceremonia de graduación</li>
                  </ul>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Para más información sobre eventos específicos, visita la sección de{" "}
            <a href="/recursos-estudiantes" className="text-pink-500 hover:text-pink-600 underline">
              Recursos para Estudiantes
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
