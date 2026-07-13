import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  titulo: string;
  oscuro?: boolean;
  className?: string;
}

export default function SectionHeader({ eyebrow, titulo, oscuro = false, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <p className={`font-general text-label tracking-[0.3em] mb-4 ${oscuro ? "text-metal" : "text-metal"}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-display text-title max-w-[14ch] ${
          oscuro ? "text-mineral" : "text-grafito"
        }`}
      >
        {titulo}
      </h2>
    </motion.div>
  );
}
