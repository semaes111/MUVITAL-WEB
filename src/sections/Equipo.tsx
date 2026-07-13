import { motion } from "framer-motion";
import { EQUIPO, EQUIPO_FRASE } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Equipo() {
  return (
    <section id="equipo" className="bg-mineral py-32 lg:py-40">
      <div className="contenedor-muv">
        <SectionHeader eyebrow="EL EQUIPO" titulo={EQUIPO_FRASE} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {EQUIPO.map((prof, i) => (
            <motion.div
              key={prof.orden}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[3/4] bg-mineral-dark rounded-lg overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-mono text-xs text-grafito/30 uppercase tracking-[0.2em] text-center px-4">
                    &laquo;PENDIENTE:foto-{prof.rol.toLowerCase().replace(/\s+/g, "-")}&raquo;
                  </p>
                </div>
              </div>
              <p className="font-general text-label tracking-[0.2em] text-metal mb-1">
                {prof.rol}
              </p>
              <h3 className="font-display text-lg text-grafito mb-1">
                {prof.nombre}
              </h3>
              <p className="font-body text-xs text-grafito/50">
                {prof.titulacion}
              </p>
              {prof.colegiado && (
                <p className="font-mono text-[10px] text-clinico-dark mt-1">
                  {prof.colegiado}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
