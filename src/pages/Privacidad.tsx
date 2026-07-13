import { MARCA } from "@/constants";

export default function Privacidad() {
  return (
    <main className="bg-mineral min-h-screen pt-32 lg:pt-40 pb-20">
      <div className="contenedor-muv max-w-3xl">
        <h1 className="font-display text-title text-grafito mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">1. Responsable del tratamiento</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed mb-3">
              Responsable: MUVSALUD, S.L.
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
            <h2 className="font-display text-xl text-grafito mb-4">2. Datos que recopilamos</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed mb-3">
              A través del formulario de evaluación privada recopilamos:
            </p>
            <ul className="list-disc list-inside font-body text-sm text-grafito/70 leading-relaxed space-y-1">
              <li>Nombre y apellidos</li>
              <li>Teléfono</li>
              <li>Correo electrónico</li>
              <li>Objetivo principal</li>
              <li>Franja horaria preferida</li>
              <li>Mensaje opcional</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">3. Finalidad</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              Los datos se tratan exclusivamente para gestionar las solicitudes de 
              evaluación privada, contactar con el solicitante y programar la cita. 
              No se cederán datos a terceros salvo obligación legal.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">4. Legitimación</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              La base legal para el tratamiento es el consentimiento del interesado, 
              manifestado al aceptar la presente política de privacidad mediante el 
              checkbox específico del formulario.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl text-grafito mb-4">5. Derechos</h2>
            <p className="font-body text-sm text-grafito/70 leading-relaxed">
              Puede ejercer sus derechos de acceso, rectificación, supresión, 
              oposición, limitación del tratamiento y portabilidad dirigiéndose a 
              {MARCA.email} o por correo postal a la dirección indicada.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
