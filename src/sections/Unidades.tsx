import { motion } from "framer-motion";
import { UNIDADES } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const pilarColors: Record<string, string> = {
  rinde: "text-grafito bg-mineral/60",
  repara: "text-clinico-dark bg-clinico/10",
  nutre: "text-metal bg-metal/10",
};

const pilarBorder: Record<string, string> = {
  rinde: "",
  repara: "border-t border-clinico/40",
  nutre: "",
};

export default function Unidades() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="unidades" className="bg-mineral py-32 lg:py-40">
      <div className="contenedor-muv">
        <SectionHeader eyebrow="LAS UNIDADES" titulo="Cinco especialidades. Un solo método." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {UNIDADES.map((unidad, i) => (
            <motion.div
              key={unidad.id}
              className={`card-mineral rounded-lg p-6 lg:p-8 ${pilarBorder[unidad.pilar] || ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between mb-4">
                <p className="font-mono text-metal text-sm">{unidad.numero}</p>
                <span
                  className={`font-general text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded ${
                    pilarColors[unidad.pilar] || ""
                  }`}
                >
                  {unidad.pilar.toUpperCase()}
                </span>
              </div>

              <h3 className="font-display text-xl text-grafito mb-2">{unidad.nombre}</h3>
              <p className="font-body text-sm text-grafito/60 leading-relaxed mb-4">
                {unidad.claim}
              </p>

              <div className="space-y-1">
                {unidad.incluye.map((item, j) => (
                  <p key={j} className="font-body text-xs text-grafito/50 flex items-start gap-2">
                    <span className="text-vital mt-0.5">&bull;</span>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            className="card-mineral rounded-lg p-6 lg:p-8 flex flex-col justify-center items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-grafito/60 mb-4">
              ¿No sabes por dónde empezar?
            </p>
            <h3 className="font-display text-xl text-grafito mb-6">
              Empieza por la evaluación.
            </h3>
            <Button variant="primary-light" onClick={() => scrollTo("acceso")}>
              Solicitar evaluación <span className="ml-2">&rarr;</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
