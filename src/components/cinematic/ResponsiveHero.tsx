import { lazy, Suspense } from "react";
import MobileHero from "@/components/cinematic/MobileHero";
import type { CinematicHeroProps } from "@/components/cinematic/CinematicHero";
import { useMobile } from "@/hooks/useMobile";

const DesktopHero = lazy(() =>
  import("@/components/cinematic/CinematicHero").then((module) => ({
    default: module.CinematicHero,
  }))
);

function DesktopHeroFallback({ bgImage }: CinematicHeroProps) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-grafito">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          width={1672}
          height={941}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
    </div>
  );
}

export default function ResponsiveHero(props: CinematicHeroProps) {
  const isMobile = useMobile(768);

  if (isMobile) return <MobileHero {...props} />;

  return (
    <Suspense fallback={<DesktopHeroFallback {...props} />}>
      <DesktopHero {...props} />
    </Suspense>
  );
}
