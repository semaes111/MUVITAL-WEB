import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedTitle({ text, className = "", delay = 0 }: AnimatedTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".word");
    gsap.set(words, { opacity: 0, y: 12 });
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      delay,
    });
  }, [delay]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word inline-block mr-[0.3em]">
          {word}
        </span>
      ))}
    </div>
  );
}
