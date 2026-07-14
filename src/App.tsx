import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import Manifiesto from "@/sections/Manifiesto";
import Metodo from "@/sections/Metodo";
import Pilares from "@/sections/Pilares";
import Unidades from "@/sections/Unidades";
import Espacio from "@/sections/Espacio";
import Equipo from "@/sections/Equipo";
import GaleriaMarquee from "@/sections/GaleriaMarquee";
import Prueba from "@/sections/Prueba";
import Acceso from "@/sections/Acceso";

const AvisoLegal = lazy(() => import("@/pages/AvisoLegal"));
const Privacidad = lazy(() => import("@/pages/Privacidad"));
const Cookies = lazy(() => import("@/pages/Cookies"));
const Experiencia = lazy(() => import("@/pages/Experiencia"));
const Efectos = lazy(() => import("@/pages/Efectos"));

function HomePage() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <CinematicHero
        bgImage={`${import.meta.env.BASE_URL}images/soporte-frontal.webp`}
        imageLoading="eager"
        imageFetchPriority="high"
        onPrimary={() => scrollToId("acceso")}
        onSecondary={() => scrollToId("metodo")}
      />
      <Manifiesto />
      <Metodo />
      <Pilares />
      <Unidades />
      <Espacio />
      <Equipo />
      {/* Segunda estructura cinematográfica idéntica, con otra foto de fondo */}
      <CinematicHero
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
      <GaleriaMarquee />
      <Prueba />
      <Acceso />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legal/aviso-legal" element={<AvisoLegal />} />
          <Route path="/legal/privacidad" element={<Privacidad />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/efectos" element={<Efectos />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieBanner />
    </>
  );
}
