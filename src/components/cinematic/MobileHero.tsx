import type { CinematicHeroProps } from "@/components/cinematic/CinematicHero";

export default function MobileHero({
  brandName = "MÜV Vital",
  tagline1 = "Movimiento",
  tagline2 = "con criterio médico.",
  ctaHeading = "Solicita tu evaluación privada.",
  ctaDescription = "Entrenamiento personal y atención clínica coordinados en un único método.",
  ctaPrimaryLabel = "Solicitar evaluación",
  ctaSecondaryLabel = "Conocer el método",
  onPrimary,
  onSecondary,
  ctaPrimaryHref = "#/",
  ctaSecondaryHref = "#/",
  bgImage,
  imageLoading = "lazy",
  imageFetchPriority = "auto",
}: CinematicHeroProps) {
  const mobileBgImage = bgImage?.replace(/\.webp$/, "-mobile.webp");

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-grafito text-mineral">
      {bgImage && (
        <img
          src={bgImage}
          srcSet={mobileBgImage ? `${mobileBgImage} 959w, ${bgImage} 1672w` : undefined}
          alt=""
          aria-hidden="true"
          width={959}
          height={540}
          loading={imageLoading}
          fetchPriority={imageFetchPriority}
          decoding="async"
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-grafito via-grafito/80 to-grafito/35" />

      <div className="mobile-hero-content contenedor-muv relative z-10 w-full pb-14 pt-32">
        <img
          src={`${import.meta.env.BASE_URL}images/logo-muv-blanco.png`}
          alt={brandName}
          width={553}
          height={306}
          decoding="async"
          className="mb-6 h-auto w-36 object-contain object-left"
        />
        <p className="font-general mb-4 text-xs uppercase tracking-[0.24em] text-clinico">
          Club privado de salud y rendimiento
        </p>
        <h1 className="font-display max-w-[12ch] text-[clamp(3.15rem,13vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.035em] text-white">
          {tagline1} <span className="text-mineral">{tagline2}</span>
        </h1>
        <p className="font-body mt-6 max-w-[34rem] text-lg leading-relaxed text-mineral/80">
          {ctaDescription}
        </p>
        <p className="font-display mt-5 text-xl text-white">{ctaHeading}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {onPrimary ? (
            <button
              type="button"
              onClick={onPrimary}
              className="min-h-12 rounded-full bg-vital px-6 py-3 font-general font-semibold text-white shadow-lg"
            >
              {ctaPrimaryLabel}
            </button>
          ) : (
            <a href={ctaPrimaryHref} className="min-h-12 rounded-full bg-vital px-6 py-3 text-center font-general font-semibold text-white shadow-lg">
              {ctaPrimaryLabel}
            </a>
          )}
          {onSecondary ? (
            <button
              type="button"
              onClick={onSecondary}
              className="min-h-12 rounded-full border border-mineral/40 bg-grafito/50 px-6 py-3 font-general font-semibold text-mineral"
            >
              {ctaSecondaryLabel}
            </button>
          ) : (
            <a href={ctaSecondaryHref} className="min-h-12 rounded-full border border-mineral/40 bg-grafito/50 px-6 py-3 text-center font-general font-semibold text-mineral">
              {ctaSecondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
