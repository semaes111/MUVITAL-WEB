import { useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { HERO } from "@/constants";
import Button from "@/components/ui/Button";

const ShaderAnimation = lazy(() => import("@/components/canvas/ShaderAnimation"));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" }, delay: 0.3 });
    const el = contentRef.current;

    tl.fromTo(
      el.querySelector(".hero-eyebrow"),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.15
    );

    const h1Lines = el.querySelectorAll(".hero-h1-line");
    h1Lines.forEach((line, i) => {
      tl.fromTo(
        line,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "expo.out" },
        0.3 + i * 0.12
      );
    });

    tl.fromTo(
      el.querySelector(".hero-sub"),
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.65
    );

    const ctas = el.querySelectorAll(".hero-cta");
    tl.fromTo(
      ctas,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
      0.8
    );

    tl.fromTo(
      el.querySelector(".hero-scroll"),
      { opacity: 0 },
      { opacity: 0.5, duration: 0.6 },
      1.2
    );

    return () => {
      tl.kill();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[600px] bg-grafito overflow-hidden"
    >
      {/* Fondo degradado (base mientras carga la imagen) */}
      <div className="absolute inset-0 bg-gradient-to-br from-grafito via-grafito-800 to-grafito" />

      {/* Imagen de fondo */}
      <img
        src={`${import.meta.env.BASE_URL}images/entrenamiento.webp`}
        alt="Entrenamiento en MUV Vital"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Shader animado (blend screen: solo brillan las líneas sobre la foto) */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-[1] mix-blend-screen opacity-70">
          <ShaderAnimation />
        </div>
      </Suspense>

      {/* Overlay oscuro (legibilidad del texto) */}
      <div className="absolute inset-0 bg-grafito/60 z-[2]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-[3] h-full flex flex-col justify-center contenedor-muv"
      >
        <p className="hero-eyebrow opacity-0 font-general text-label tracking-[0.3em] text-metal mb-6">
          {HERO.eyebrow}
        </p>

        <h1 className="font-display text-hero text-mineral max-w-[14ch] mb-6">
          <span className="hero-h1-line block">{HERO.titulo}</span>
        </h1>

        <p className="hero-sub opacity-0 font-body text-lead text-mineral/80 max-w-[50ch] mb-10 leading-relaxed">
          {HERO.subtitulo}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="hero-cta opacity-0">
            <Button variant="primary-dark" onClick={() => scrollTo("acceso")}>
              {HERO.ctaPrimario}
              <span className="ml-2">&rarr;</span>
            </Button>
          </div>
          <div className="hero-cta opacity-0">
            <Button
              variant="ghost"
              onClick={() => scrollTo("metodo")}
              className="text-mineral/80 hover:text-mineral"
            >
              {HERO.ctaSecundario}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-mineral/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-vital"
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ height: "40%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
