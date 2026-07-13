import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import Hero from "@/sections/Hero";
import Manifiesto from "@/sections/Manifiesto";
import Metodo from "@/sections/Metodo";
import Pilares from "@/sections/Pilares";
import Unidades from "@/sections/Unidades";
import Espacio from "@/sections/Espacio";
import Equipo from "@/sections/Equipo";
import Prueba from "@/sections/Prueba";
import Acceso from "@/sections/Acceso";
import AvisoLegal from "@/pages/AvisoLegal";
import Privacidad from "@/pages/Privacidad";
import Cookies from "@/pages/Cookies";

function HomePage() {
  return (
    <main>
      <Hero />
      <Manifiesto />
      <Metodo />
      <Pilares />
      <Unidades />
      <Espacio />
      <Equipo />
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
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
