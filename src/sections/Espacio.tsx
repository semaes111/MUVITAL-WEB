import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ESPACIO_IMAGENES, MARCA } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function Espacio() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;
    if (scrollWidth <= 0) return;

    const tl = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="espacio" className="bg-mineral relative overflow-hidden">
      <div className="pt-32 lg:pt-40 pb-12 contenedor-muv">
        <SectionHeader eyebrow="EL ESPACIO" titulo="Arquitectura para el rendimiento." />
      </div>

      <div ref={trackRef} className="flex gap-6 pl-8 lg:pl-16 pb-32 lg:pb-40">
        {ESPACIO_IMAGENES.map((img, i) => (
          <motion.div
            key={img.id}
            className="flex-shrink-0 w-[80vw] lg:w-[50vw] group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="aspect-[16/10] bg-mineral-dark rounded-lg overflow-hidden mb-4 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-mono text-xs text-grafito/30 uppercase tracking-[0.2em]">
                  &laquo;PENDIENTE:{img.id}&raquo;
                </p>
              </div>
              <div className="absolute inset-0 bg-grafito/5 group-hover:bg-transparent transition-colors duration-400" />
            </div>
            <p className="font-mono text-xs text-metal uppercase tracking-[0.15em]">
              {img.titulo}
            </p>
          </motion.div>
        ))}

        {/* Info card at end */}
        <div className="flex-shrink-0 w-[80vw] lg:w-[35vw] flex flex-col justify-center pr-16">
          <p className="font-general text-label tracking-[0.3em] text-metal mb-4">
            CENTRO
          </p>
          <h3 className="font-display text-2xl text-grafito mb-4">
            {MARCA.nombre}
          </h3>
          <div className="font-body text-sm text-grafito/60 space-y-2 mb-6">
            <p>{MARCA.direccion}</p>
            <p>
              {MARCA.ciudad}, {MARCA.provincia}
            </p>
            <p className="text-metal mt-3">{MARCA.horario}</p>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              `${MARCA.ciudad} ${MARCA.provincia}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-general text-sm text-grafito hover:text-vital-dark transition-colors"
          >
            Cómo llegar <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
