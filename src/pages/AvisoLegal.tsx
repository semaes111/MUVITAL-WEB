import { MARCA } from "@/constants";

export default function AvisoLegal() {
  return (
    <main className="bg-mineral min-h-screen pt-32 lg:pt-40 pb-20">
      <div className="contenedor-muv max-w-3xl">
        <h1 className="font-display text-title text-grafito mb-8">Aviso Legal</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">1. Datos identificativos</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed mb-3">
              Titular: MUVSALUD, S.L.
            </p>
            <p className="font-body text-sm text-grafito/70 leading-relaxed mb-3">
              NIF: B26811471
            </p>
            <p className="font-body text-sm text-grafito/70 leading-relaxed mb-3">
              Dirección: {MARCA.direccion}, {MARCA.ciudad}, {MARCA.provincia}
            </p>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              Email: {MARCA.email}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">2. Objeto</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              El presente aviso legal regula el uso del sitio web {MARCA.dominio}, 
              propiedad de {MARCA.nombre}, con el objetivo de informar sobre los 
              servicios de salud y rendimiento ofrecidos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">3. Propiedad intelectual</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              Todos los contenidos de este sitio web, incluyendo textos, imágenes, 
              gráficos, logotipos y diseño, son propiedad de {MARCA.nombre} o de 
              terceros que han autorizado su uso. Queda prohibida su reproducción, 
              distribución o comunicación pública sin autorización expresa.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">4. Ley aplicable</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              Este aviso legal se rige por la legislación española. Para cualquier 
              controversia que pudiera surgir, las partes se someten a los juzgados 
              y tribunales de Almería.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
