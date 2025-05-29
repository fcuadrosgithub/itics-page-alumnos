import { Card, CardContent } from "@/components/ui/card"

export default function PlanEstudios() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Plan de Estudios</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Consulta la retícula completa del plan de estudios de Ingeniería en Sistemas Computacionales.
        </p>

        <Card className="overflow-hidden shadow-lg border-2 border-pink-200">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 text-center">
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">Retícula del Plan de Estudios</h2>
              <p className="text-gray-600">Ingeniería en Sistemas Computacionales - 9 Semestres</p>
            </div>

            <div className="p-4 bg-white">
              <div className="relative w-full bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[600px]">
                {/* Aquí se embebe el PDF */}
                <embed
                  src="/Reticula_Seriacion_Tics.pdf"
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-purple-50 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="font-semibold text-pink-600">Duración</h3>
                  <p className="text-gray-700">9 Semestres</p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-600">Total de Créditos</h3>
                  <p className="text-gray-700">260 Créditos</p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-600">Modalidad</h3>
                  <p className="text-gray-700">Presencial</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Para más información sobre las competencias profesionales, consulta la sección de{" "}
            <a href="/especialidad" className="text-pink-500 hover:text-pink-600 underline">
              Especialidad
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
