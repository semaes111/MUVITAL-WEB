import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CIFRAS, PRUEBA_TITULO, PRUEBA_SUBTITULO } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target <= 0) return;
    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return count;
}

function CounterItem({
  cifra,
  started,
}: {
  cifra: (typeof CIFRAS)[number];
  started: boolean;
}) {
  const count = useCounter(cifra.valor, 2000, started);

  if (!cifra.confirmada) return null;

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-mono text-5xl lg:text-6xl text-vital tabular-nums mb-2">
        {count}
        <span className="text-3xl lg:text-4xl">{cifra.sufijo}</span>
      </p>
      <p className="font-general text-label tracking-[0.2em] text-mineral/50">
        {cifra.label}
      </p>
    </motion.div>
  );
}

export default function Prueba() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-grafito py-32 lg:py-40 relative overflow-hidden data-grid-bg">
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-clinico/60 z-10 pointer-events-none"
        initial={{ top: "-10%" }}
        whileInView={{ top: "110%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      <div className="contenedor-muv relative z-10">
        <SectionHeader eyebrow={PRUEBA_SUBTITULO} titulo={PRUEBA_TITULO} oscuro />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 mt-16">
          {CIFRAS.map((cifra, i) => (
            <CounterItem key={i} cifra={cifra} started={started} />
          ))}
        </div>

        {/* If no confirmed data, show placeholder message */}
        {CIFRAS.every((c) => !c.confirmada) && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-clinico/40 text-center mt-16"
          >
            &laquo;PENDIENTE:cifras-del-club&raquo;
          </motion.p>
        )}
      </div>
    </section>
  );
}
