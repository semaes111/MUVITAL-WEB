import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const B = import.meta.env.BASE_URL;

const FOTOS = [
  "images/entrenamiento.webp",
  "images/recuperacion.webp",
  "images/evaluacion.webp",
  "images/fuerza.webp",
  "images/instalaciones.webp",
];

// Banda de fotos en movimiento continuo (marquee).
export default function GaleriaMarquee() {
  const imgs = [...FOTOS, ...FOTOS];

  return (
    <section className="bg-grafito py-24 lg:py-32 overflow-hidden">
      <div className="contenedor-muv mb-12">
        <SectionHeader eyebrow="EL CLUB" titulo="El club en movimiento." oscuro />
      </div>

      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {imgs.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] h-64 md:h-80 flex-shrink-0"
              style={{ rotate: `${i % 2 === 0 ? -2 : 3}deg` }}
            >
              <img
                src={`${B}${src}`}
                srcSet={`${B}${src.replace(/\.webp$/, "-mobile.webp")} 959w, ${B}${src} 1672w`}
                alt="MUV Vital"
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 284px, 213px"
                className="h-full w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
