import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import HomePage from "@/pages/Home";

const AvisoLegal = lazy(() => import("@/pages/AvisoLegal"));
const Privacidad = lazy(() => import("@/pages/Privacidad"));
const Cookies = lazy(() => import("@/pages/Cookies"));
const Experiencia = lazy(() => import("@/pages/Experiencia"));
const Efectos = lazy(() => import("@/pages/Efectos"));

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
