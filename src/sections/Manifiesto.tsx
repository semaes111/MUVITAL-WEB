import { useEffect, useRef, useState } from "react";
import { MANIFIESTO } from "@/constants";

export default function Manifiesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-mineral py-32 lg:py-40"
    >
      <div className="contenedor-muv">
        <div className="max-w-[900px]">
          {MANIFIESTO.map((phrase, i) => (
            <p
              key={i}
              className="font-display text-title text-grafito leading-tight mb-4 last:mb-0"
            >
              {phrase.split(" ").map((word, j) => (
                <span
                  key={j}
                  className="inline-block mr-[0.3em] transition-opacity duration-500 ease-muv"
                  style={{
                    opacity: visible ? 1 : 0.15,
                    transitionDelay: visible ? `${(i * 8 + j) * 24}ms` : "0ms",
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
