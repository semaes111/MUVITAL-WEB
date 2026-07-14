import { useNavigate } from "react-router-dom";
import { AnimatedMarqueeHero } from "@/components/marquee/AnimatedMarqueeHero";
import { GlareCard } from "@/components/ui/GlareCard";

const B = import.meta.env.BASE_URL;

const FOTOS = [
  { img: `${B}images/entrenamiento.webp`, titulo: "Entrenamiento", claim: "Fuerza y acondicionamiento con criterio." },
  { img: `${B}images/recuperacion.webp`, titulo: "Recuperación", claim: "Fisioterapia, crioterapia y descanso activo." },
  { img: `${B}images/evaluacion.webp`, titulo: "Evaluación", claim: "Valoración del rendimiento y seguimiento." },
  { img: `${B}images/fuerza.webp`, titulo: "Sala de fuerza", claim: "Equipamiento premium, técnica supervisada." },
  { img: `${B}images/instalaciones.webp`, titulo: "Instalaciones", claim: "Arquitectura pensada para rendir." },
];

// Página de vista previa de efectos (marquee + tarjetas holográficas).
// Accesible en #/efectos. No forma parte del inicio.
export default function Efectos() {
  const navigate = useNavigate();

  return (
    <>
      <AnimatedMarqueeHero
        tagline="MUV VITAL · ROQUETAS DE MAR"
        title="Movimiento con criterio médico."
        description="Traumatología, fisioterapia, nutrición, podología y entrenamiento personal bajo un mismo método."
        ctaText="Solicitar evaluación"
        onCta={() => navigate("/")}
        images={FOTOS.map((f) => f.img)}
      />

      <section className="bg-grafito py-32 lg:py-40">
        <div className="contenedor-muv">
          <p className="font-general text-label tracking-[0.3em] text-metal mb-4 text-center">
            TARJETAS HOLOGRÁFICAS
          </p>
          <h2 className="font-display text-title text-mineral mb-16 text-center">
            Pasa el ratón por cada tarjeta.
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {FOTOS.map((f) => (
              <GlareCard key={f.titulo} className="flex flex-col">
                <img
                  src={f.img}
                  srcSet={`${f.img.replace(/\.webp$/, "-mobile.webp")} 959w, ${f.img} 1672w`}
                  alt={f.titulo}
                  width={1672}
                  height={941}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 360px, 90vw"
                  className="h-2/3 w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-center p-6">
                  <h3 className="font-display text-xl text-mineral mb-1">{f.titulo}</h3>
                  <p className="font-body text-sm text-mineral/60 leading-snug">{f.claim}</p>
                </div>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
