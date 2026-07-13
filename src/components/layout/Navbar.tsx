import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, HERO } from "@/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 50);
      setHidden(y > lastY && y > 100);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-muv",
          hidden && !mobileOpen && "-translate-y-full",
          atTop && !mobileOpen ? "bg-transparent" : "floating-nav"
        )}
      >
        <nav className="contenedor-muv flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-lg lg:text-xl font-semibold text-mineral tracking-tight"
          >
            MUV VITAL<span className="text-vital">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="nav-hover-btn font-general text-xs uppercase tracking-[0.2em] text-mineral/80 hover:text-mineral transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {link.titulo}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              variant="primary-dark"
              onClick={() => scrollTo("acceso")}
              className="text-xs uppercase tracking-[0.15em] px-5 py-2.5"
            >
              {HERO.ctaPrimario}
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-mineral p-2"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-grafito flex flex-col items-center justify-center gap-8 lg:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-display text-3xl text-mineral hover:text-vital transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.titulo}
            </button>
          ))}
          <Button
            variant="primary-dark"
            onClick={() => scrollTo("acceso")}
            className="mt-4 text-sm uppercase tracking-[0.15em]"
          >
            {HERO.ctaPrimario}
          </Button>
        </div>
      )}
    </>
  );
}
