import { MARCA, FOOTER } from "@/constants";

export default function Footer() {
  const year = new Intl.DateTimeFormat("es-ES", { year: "numeric" }).format(new Date());

  return (
    <footer className="bg-grafito text-mineral/60 py-16 lg:py-20">
      <div className="contenedor-muv">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/logo-muv-blanco.png`}
              alt="MÜV Vital"
              className="h-12 w-auto mb-4"
            />
            <p className="font-body text-sm leading-relaxed max-w-xs">
              {FOOTER.claim}
            </p>
          </div>

          <div>
            <p className="font-general text-label tracking-[0.3em] text-metal mb-4">
              CONTACTO
            </p>
            <div className="font-body text-sm space-y-2">
              <p>{MARCA.direccion}</p>
              <p>
                {MARCA.ciudad}, {MARCA.provincia}
              </p>
              <p className="mt-3">{MARCA.telefono}</p>
              <p>{MARCA.email}</p>
              <p className="text-metal mt-2">{MARCA.horario}</p>
            </div>
          </div>

          <div>
            <p className="font-general text-label tracking-[0.3em] text-metal mb-4">
              LEGAL
            </p>
            <div className="space-y-2">
              {FOOTER.linksLegales.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className="block font-body text-sm text-mineral/60 hover:text-mineral transition-colors duration-200"
                >
                  {link.titulo}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="linea-metal mb-8" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <p className="font-body text-xs text-mineral/40">
            {FOOTER.avisoSanitario}
          </p>
          <p className="font-mono text-xs text-mineral/40">
            &copy; {year} {MARCA.nombre}
          </p>
        </div>

        <p className="font-body text-xs text-mineral/30 mt-6">
          {FOOTER.avisoIA}
        </p>
      </div>
    </footer>
  );
}
