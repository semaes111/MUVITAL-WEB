import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { PILARES } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import { useMobile } from "@/hooks/useMobile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ShaderAnimation = lazy(() => import("@/components/canvas/ShaderAnimation"));

export default function Pilares() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [shaderVisible, setShaderVisible] = useState(false);
  const isMobile = useMobile(768);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isMobile || reducedMotion) {
      setShaderVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShaderVisible(entry.isIntersecting),
      { rootMargin: "400px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isMobile, reducedMotion]);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <section ref={sectionRef} className="bg-grafito py-32 lg:py-40 relative overflow-hidden">
      {/* Shader animado de fondo (blend screen, sutil) */}
      {shaderVisible && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-0 mix-blend-screen opacity-40 pointer-events-none">
            <ShaderAnimation />
          </div>
        </Suspense>
      )}

      <div className="contenedor-muv relative z-10">
        <SectionHeader eyebrow="LOS PILARES" titulo="Cuatro formas de cuidarte." oscuro />

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5">
          {PILARES.map((pilar, i) => (
            <motion.div
              key={pilar.id}
              className={`card-grafito rounded-lg p-6 lg:p-8 transition-transform duration-300 ease-out cursor-default ${
                pilar.span === "ancho" ? "lg:col-span-3" : "lg:col-span-2"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleTilt}
              onMouseLeave={handleLeave}
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="font-mono text-vital text-sm mb-3">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-2xl lg:text-3xl text-mineral mb-3">
                {pilar.nombre}
              </h3>
              <p className="font-body text-sm text-mineral/60 leading-relaxed mb-4">
                {pilar.claim}
              </p>
              <div className="flex flex-wrap gap-2">
                {pilar.unidades.map((u) => (
                  <span
                    key={u}
                    className="font-general text-label tracking-[0.2em] text-metal/80 px-2 py-1 bg-mineral/5 rounded"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
