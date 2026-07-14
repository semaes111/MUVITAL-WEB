import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
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
import AvisoLegal from "@/pages/AvisoLegal";
import Privacidad from "@/pages/Privacidad";
import Cookies from "@/pages/Cookies";
import Experiencia from "@/pages/Experiencia";
import Efectos from "@/pages/Efectos";

function HomePage() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <CinematicHero
        bgImage={`${import.meta.env.BASE_URL}images/soporte-frontal.webp`}
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
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/legal/aviso-legal" element={<AvisoLegal />} />
            <Route path="/legal/privacidad" element={<Privacidad />} />
            <Route path="/legal/cookies" element={<Cookies />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/efectos" element={<Efectos />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
