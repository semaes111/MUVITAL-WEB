import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "muv-cookies-consent";

// Banner de aviso de cookies. Guarda la elección en localStorage.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Pequeño retardo para que aparezca tras cargar la web
        timer = setTimeout(() => setVisible(true), 800);
      }
    } catch {
      timer = setTimeout(() => setVisible(true), 0);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const decide = (value: "aceptadas" | "rechazadas") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* almacenamiento no disponible */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Aviso de cookies"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-3xl rounded-2xl border border-mineral/10 bg-grafito-800/95 p-5 shadow-2xl backdrop-blur-md lg:bottom-6 lg:p-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="font-body text-sm leading-relaxed text-mineral/80">
              Usamos cookies propias y de terceros para mejorar tu experiencia y analizar
              el uso del sitio. Puedes aceptarlas o rechazarlas. Consulta nuestra{" "}
              <a
                href="#/legal/cookies"
                className="text-vital underline underline-offset-2 hover:text-vital-dark"
              >
                política de cookies
              </a>
              .
            </p>

            <div className="flex flex-shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("rechazadas")}
                className="rounded-full border border-mineral/20 px-5 py-2.5 font-general text-sm font-medium text-mineral/80 transition-colors hover:bg-mineral/10"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => decide("aceptadas")}
                className="rounded-full bg-vital px-5 py-2.5 font-general text-sm font-semibold text-grafito transition-colors hover:bg-vital-dark"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
