import { type ReactNode, useEffect, useRef, useState } from "react";

interface DeferredSectionProps {
  children: ReactNode;
  id?: string;
  minHeight?: number;
  rootMargin?: string;
}

export default function DeferredSection({
  children,
  id,
  minHeight = 720,
  rootMargin = "600px 0px",
}: DeferredSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={rootRef}
      id={id}
      className="deferred-section scroll-mt-16 lg:scroll-mt-20"
      style={shouldRender ? undefined : { minHeight }}
      aria-busy={!shouldRender}
    >
      {shouldRender ? children : null}
    </div>
  );
}
