import { MARCA } from "@/constants";

export default function Cookies() {
  return (
    <main className="bg-mineral min-h-screen pt-32 lg:pt-40 pb-20">
      <div className="contenedor-muv max-w-3xl">
        <h1 className="font-display text-title text-grafito mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">1. ¿Qué son las cookies?</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su 
              dispositivo cuando visita un sitio web. Se utilizan para hacer que 
              el sitio funcione correctamente y para recopilar información sobre 
              la navegación.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">2. Cookies que utilizamos</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed mb-3">
              Actualmente, {MARCA.nombre} solo utiliza cookies técnicas necesarias 
              para el funcionamiento del sitio web:
            </p>
            <ul className="list-disc list-inside font-body text-sm text-grafito/70 leading-relaxed space-y-1">
              <li>Cookies de sesión: para mantener la navegación durante la visita.</li>
              <li>Cookies de preferencias: para recordar configuraciones del usuario.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">3. Cookies de terceros</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              No utilizamos cookies de analítica ni de publicidad de terceros 
              en este momento. Si en el futuro se añaden, se solicitará 
              consentimiento previo.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">4. Cómo gestionar las cookies</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              Puede configurar su navegador para aceptar o rechazar cookies. 
              Tenga en cuenta que algunas funciones del sitio pueden no estar 
              disponibles si desactiva las cookies técnicas.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
