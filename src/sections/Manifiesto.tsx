import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MANIFIESTO } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Manifiesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const phrasesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const phrases = phrasesRef.current;
    if (!section || !phrases) return;

    const words = phrases.querySelectorAll(".manifiesto-word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      words,
      { opacity: 0.15 },
      {
        opacity: 1,
        stagger: 0.03,
        duration: 0.4,
        ease: "power1.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-mineral py-32 lg:py-40"
    >
      <div className="contenedor-muv">
        <div ref={phrasesRef} className="max-w-[900px]">
          {MANIFIESTO.map((phrase, i) => (
            <p
              key={i}
              className="font-display text-title text-grafito leading-tight mb-4 last:mb-0"
            >
              {phrase.split(" ").map((word, j) => (
                <span key={j} className="manifiesto-word inline-block mr-[0.3em]">
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
