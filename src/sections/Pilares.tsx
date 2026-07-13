import { useRef } from "react";
import { motion } from "framer-motion";
import { PILARES } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Pilares() {
  const cardsRef = useRef<HTMLDivElement>(null);

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
    <section id="pilares" className="bg-grafito py-32 lg:py-40">
      <div className="contenedor-muv">
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
