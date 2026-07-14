import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { METODO, METODO_CIERRE } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import { useMobile } from "@/hooks/useMobile";

gsap.registerPlugin(ScrollTrigger);

const AnilloMetodo = lazy(() => import("@/components/canvas/AnilloMetodo"));

export default function Metodo() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile(640);
  const [ringVisible, setRingVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isMobile) {
      setRingVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setRingVisible(entry.isIntersecting),
      { rootMargin: "400px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    if (!section || !timeline) return;

    const cards = timeline.querySelectorAll(".fase-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
        end: "bottom 80%",
        scrub: 0.8,
        snap: {
          snapTo: [0, 0.25, 0.5, 0.75, 1],
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut",
        },
      },
    });

    cards.forEach((card, i) => {
      tl.fromTo(
        card,
        { opacity: 0.3, y: 20 },
        { opacity: 1, y: 0, duration: 0.25 },
        i * 0.25
      );
      if (i < cards.length - 1) {
        tl.to(card, { opacity: 0.3, duration: 0.05 }, (i + 1) * 0.25);
      }
    });

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="metodo"
      className="bg-grafito py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="contenedor-muv relative z-10">
        <SectionHeader eyebrow="EL MÉTODO" titulo="Un bucle, no una rutina." oscuro />

        <p className="font-body text-lead text-mineral/70 max-w-[60ch] mb-16">
          Nadie entrena aquí sin evaluación previa. Y ninguna evaluación se queda en un cajón:
          el plan se recalibra con tus datos, no con sensaciones.
        </p>

        {/* Anillo 3D */}
        {!isMobile && (
          <div className="w-full h-[300px] lg:h-[400px] mb-12">
            {ringVisible && (
              <Suspense fallback={null}>
                <AnilloMetodo />
              </Suspense>
            )}
          </div>
        )}

        {/* Mobile fallback: SVG */}
        {isMobile && (
          <div className="flex justify-center mb-12">
            <svg width="200" height="200" viewBox="0 0 200 200" className="text-mineral/20">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
              {[0, 1, 2, 3].map((i) => {
                const angle = (i * Math.PI) / 2 - Math.PI / 2;
                const x = 100 + 80 * Math.cos(angle);
                const y = 100 + 80 * Math.sin(angle);
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="4" fill="#4FA3A5" />
                    <text
                      x={x}
                      y={y - 12}
                      textAnchor="middle"
                      className="font-mono text-xs fill-vital"
                    >
                      {METODO[i].numero}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        )}

        {/* Timeline de fases */}
        <div ref={timelineRef} className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          {METODO.map((fase) => (
            <motion.div
              key={fase.numero}
              className="fase-card border border-mineral/10 rounded-lg p-6 lg:p-8 bg-grafito-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-vital text-lg mb-3">{fase.numero}</p>
              <h3 className="font-display text-xl text-mineral mb-3">{fase.nombre}</h3>
              <p className="font-body text-sm text-mineral/60 leading-relaxed">
                {fase.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-lg text-vital mt-12 text-center lg:text-left"
        >
          {METODO_CIERRE}
        </motion.p>
      </div>
    </section>
  );
}
