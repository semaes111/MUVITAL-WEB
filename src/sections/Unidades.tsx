import { motion } from "framer-motion";
import { UNIDADES } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { GlareCard } from "@/components/ui/GlareCard";

const B = import.meta.env.BASE_URL;

// Foto representativa por unidad
const unidadFoto: Record<string, string> = {
  entrenamiento: `${B}images/entrenamiento.webp`,
  traumatologia: `${B}images/evaluacion.webp`,
  fisioterapia: `${B}images/recuperacion.webp`,
  nutricion: `${B}images/instalaciones.webp`,
  podologia: `${B}images/fuerza.webp`,
};

const pilarColors: Record<string, string> = {
  rinde: "text-grafito bg-vital",
  repara: "text-clinico-dark bg-clinico/20",
  nutre: "text-metal bg-metal/20",
};

const mobileImage = (src: string) => src.replace(/\.webp$/, "-mobile.webp");

export default function Unidades() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-mineral py-32 lg:py-40">
      <div className="contenedor-muv">
        <SectionHeader eyebrow="LAS UNIDADES" titulo="Cinco especialidades. Un solo método." />

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {UNIDADES.map((unidad, i) => (
            <motion.div
              key={unidad.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlareCard className="flex flex-col">
                <div className="relative h-[55%] w-full overflow-hidden">
                  <img
                    src={unidadFoto[unidad.id]}
                    srcSet={`${mobileImage(unidadFoto[unidad.id])} 959w, ${unidadFoto[unidad.id]} 1672w`}
                    alt={unidad.nombre}
                    width={1672}
                    height={941}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 360px, 90vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span
                    className={`absolute top-4 right-4 font-general text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded ${
                      pilarColors[unidad.pilar] || ""
                    }`}
                  >
                    {unidad.pilar.toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-metal text-xs mb-2">{unidad.numero}</p>
                  <h3 className="font-display text-xl text-mineral mb-2 leading-tight">
                    {unidad.nombre}
                  </h3>
                  <p className="font-body text-sm text-mineral/60 leading-snug line-clamp-4">
                    {unidad.claim}
                  </p>
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center">
          <p className="font-body text-grafito/60 mb-3">¿No sabes por dónde empezar?</p>
          <h3 className="font-display text-2xl text-grafito mb-6">Empieza por la evaluación.</h3>
          <Button variant="primary-light" onClick={() => scrollTo("acceso")}>
            Solicitar evaluación <span className="ml-2">&rarr;</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
