import { lazy, Suspense } from "react";
import ResponsiveHero from "@/components/cinematic/ResponsiveHero";
import DeferredSection from "@/components/performance/DeferredSection";

const Manifiesto = lazy(() => import("@/sections/Manifiesto"));
const Metodo = lazy(() => import("@/sections/Metodo"));
const Pilares = lazy(() => import("@/sections/Pilares"));
const Unidades = lazy(() => import("@/sections/Unidades"));
const Espacio = lazy(() => import("@/sections/Espacio"));
const Equipo = lazy(() => import("@/sections/Equipo"));
const GaleriaMarquee = lazy(() => import("@/sections/GaleriaMarquee"));
const Prueba = lazy(() => import("@/sections/Prueba"));
const Acceso = lazy(() => import("@/sections/Acceso"));

function LazyContent({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default function HomePage() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <ResponsiveHero
        bgImage={`${import.meta.env.BASE_URL}images/soporte-frontal.webp`}
        imageLoading="eager"
        imageFetchPriority="high"
        onPrimary={() => scrollToId("acceso")}
        onSecondary={() => scrollToId("metodo")}
      />

      <DeferredSection minHeight={620} rootMargin="500px 0px">
        <LazyContent><Manifiesto /></LazyContent>
      </DeferredSection>
      <DeferredSection id="metodo" minHeight={1150}>
        <LazyContent><Metodo /></LazyContent>
      </DeferredSection>
      <DeferredSection id="pilares" minHeight={1050}>
        <LazyContent><Pilares /></LazyContent>
      </DeferredSection>
      <DeferredSection id="unidades" minHeight={1500}>
        <LazyContent><Unidades /></LazyContent>
      </DeferredSection>
      <DeferredSection id="espacio" minHeight={900}>
        <LazyContent><Espacio /></LazyContent>
      </DeferredSection>
      <DeferredSection id="equipo" minHeight={900}>
        <LazyContent><Equipo /></LazyContent>
      </DeferredSection>
      <DeferredSection minHeight={800}>
        <ResponsiveHero
          bgImage={`${import.meta.env.BASE_URL}images/soporte-posterior.webp`}
          imageLoading="lazy"
          imageFetchPriority="low"
          tagline1="Fuerza"
          tagline2="con seguimiento clínico."
          cardHeading="Tu progreso, medido."
          ctaHeading="Únete al club."
          onPrimary={() => scrollToId("acceso")}
          onSecondary={() => scrollToId("metodo")}
        />
      </DeferredSection>
      <DeferredSection minHeight={650}>
        <LazyContent><GaleriaMarquee /></LazyContent>
      </DeferredSection>
      <DeferredSection minHeight={750}>
        <LazyContent><Prueba /></LazyContent>
      </DeferredSection>
      <DeferredSection id="acceso" minHeight={1100} rootMargin="900px 0px">
        <LazyContent><Acceso /></LazyContent>
      </DeferredSection>
    </main>
  );
}
