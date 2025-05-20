export default function PerfilEgresoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Perfil de Egreso</h1>
        <p className="text-muted-foreground mt-2">
          Competencias profesionales que desarrollarás durante tu formación en Ingeniería en Tecnologías de la
          Información y Comunicaciones.
        </p>
      </div>
      <div className="space-y-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold mb-4">Competencias Generales</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Capacidad para identificar, formular y resolver problemas de ingeniería aplicando los principios de las
              ciencias básicas e ingeniería.
            </li>
            <li>Habilidad para diseñar y conducir experimentos, así como para analizar e interpretar datos.</li>
            <li>
              Capacidad para diseñar sistemas, componentes o procesos que satisfagan necesidades específicas
              considerando restricciones realistas.
            </li>
            <li>Habilidad para trabajar en equipos multidisciplinarios.</li>
            <li>Comprensión de la responsabilidad ética y profesional.</li>
            <li>Capacidad para comunicarse efectivamente de forma oral y escrita.</li>
            <li>
              Comprensión del impacto de las soluciones de ingeniería en un contexto global, económico, ambiental y
              social.
            </li>
            <li>Reconocimiento de la necesidad y la capacidad de participar en el aprendizaje continuo.</li>
            <li>Conocimiento de temas contemporáneos relacionados con la ingeniería.</li>
            <li>
              Habilidad para utilizar técnicas, habilidades y herramientas modernas necesarias para la práctica de la
              ingeniería.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold mb-4">Competencias Específicas de TIC</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Diseñar, implementar y administrar redes de computadoras y dispositivos para satisfacer las necesidades de
              información de las organizaciones.
            </li>
            <li>
              Desarrollar e implementar sistemas de información utilizando metodologías basadas en estándares
              internacionales.
            </li>
            <li>Administrar proyectos de tecnologías de la información que aseguren la calidad de los procesos.</li>
            <li>
              Integrar soluciones de tecnologías de la información con los procesos organizacionales para fortalecer su
              infraestructura tecnológica.
            </li>
            <li>
              Aplicar normas, marcos de referencia, estándares de calidad y seguridad vigentes en el ámbito de las TIC.
            </li>
            <li>
              Desarrollar aplicaciones para dispositivos móviles utilizando metodologías y tecnologías emergentes.
            </li>
            <li>Implementar sistemas de bases de datos para gestionar información en las organizaciones.</li>
            <li>Aplicar tecnologías y herramientas actuales y emergentes acordes a las tendencias de la industria.</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold mb-4">Campo Laboral</h2>
          <p className="mb-4">
            Como egresado de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones, podrás
            desempeñarte en:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Empresas públicas y privadas en áreas de desarrollo de software, administración de redes y seguridad
              informática.
            </li>
            <li>Consultoría en tecnologías de la información.</li>
            <li>Desarrollo de aplicaciones web y móviles.</li>
            <li>Administración de bases de datos y centros de datos.</li>
            <li>Gestión de proyectos de TI.</li>
            <li>Implementación de soluciones de comercio electrónico.</li>
            <li>Emprendimiento de negocios propios en el área de TIC.</li>
            <li>Investigación y desarrollo en centros especializados.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
