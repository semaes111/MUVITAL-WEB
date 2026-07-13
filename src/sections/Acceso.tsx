import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ACCESO, PASOS_ACCESO, FORMULARIO } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";

export default function Acceso() {
  const [estado, setEstado] = useState<"idle" | "enviando" | "exito" | "error">("idle");
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [rgpd, setRgpd] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const loadTime = useRef(Date.now());

  const validate = useCallback(() => {
    const form = formRef.current;
    if (!form) return false;
    const data = new FormData(form);
    const errs: Record<string, string> = {};

    if (!data.get("nombre")?.toString().trim()) errs.nombre = "Campo obligatorio";
    if (!data.get("telefono")?.toString().trim()) errs.telefono = "Campo obligatorio";
    const email = data.get("email")?.toString().trim();
    if (!email) errs.email = "Campo obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Email no válido";
    if (!data.get("objetivo")) errs.objetivo = "Selecciona una opción";
    if (!rgpd) errs.rgpd = "Debes aceptar la política de privacidad";

    const honeypot = data.get("_gotcha")?.toString();
    if (honeypot?.trim()) return false;
    if (Date.now() - loadTime.current < 3000) return false;

    setErrores(errs);
    return Object.keys(errs).length === 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rgpd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setEstado("enviando");
    setTimeout(() => setEstado("exito"), 1500);
  };

  const currentEstado = estado;

  return (
    <section id="acceso" className="bg-grafito py-32 lg:py-40">
      <div className="contenedor-muv">
        <SectionHeader eyebrow={ACCESO.subtitulo} titulo={ACCESO.titulo} oscuro />

        <p className="font-body text-lead text-mineral/70 max-w-[60ch] mb-6">
          {ACCESO.intro}
        </p>

        <p className="font-mono text-xs text-vital/60 mb-16">
          {ACCESO.aforo}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Pasos */}
          <div>
            <p className="font-general text-label tracking-[0.3em] text-metal mb-8">
              CÓMO EMPEZAR
            </p>
            <div className="space-y-8">
              {PASOS_ACCESO.map((paso) => (
                <motion.div
                  key={paso.numero}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-mono text-vital text-2xl flex-shrink-0 w-10">
                    {paso.numero}
                  </p>
                  <div>
                    <h3 className="font-display text-lg text-mineral mb-1">
                      {paso.nombre}
                    </h3>
                    <p className="font-body text-sm text-mineral/60 leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <motion.div
            className="card-grafito rounded-lg p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentEstado === "exito" ? (
              <div className="text-center py-12">
                <p className="font-display text-2xl text-vital mb-4">Recibido.</p>
                <p className="font-body text-mineral/70">{FORMULARIO.exito}</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl text-mineral mb-6">
                  {FORMULARIO.titulo}
                </h3>

                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                  <FormField
                    name="nombre"
                    label={FORMULARIO.campos.nombre.label}
                    placeholder={FORMULARIO.campos.nombre.placeholder}
                    required
                    error={errores.nombre}
                    autoComplete="name"
                  />

                  <FormField
                    name="telefono"
                    type="tel"
                    label={FORMULARIO.campos.telefono.label}
                    placeholder={FORMULARIO.campos.telefono.placeholder}
                    required
                    error={errores.telefono}
                    autoComplete="tel"
                  />

                  <FormField
                    name="email"
                    type="email"
                    label={FORMULARIO.campos.email.label}
                    placeholder={FORMULARIO.campos.email.placeholder}
                    required
                    error={errores.email}
                    autoComplete="email"
                  />

                  <FormField
                    name="objetivo"
                    type="select"
                    label={FORMULARIO.campos.objetivo.label}
                    required
                    error={errores.objetivo}
                    options={[...FORMULARIO.campos.objetivo.opciones]}
                  />

                  <FormField
                    name="horario"
                    type="select"
                    label={FORMULARIO.campos.horario.label}
                    options={[...FORMULARIO.campos.horario.opciones]}
                  />

                  <FormField
                    name="mensaje"
                    type="textarea"
                    label={FORMULARIO.campos.mensaje.label}
                    placeholder={FORMULARIO.campos.mensaje.placeholder}
                  />

                  {/* RGPD */}
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rgpd}
                        onChange={(e) => setRgpd(e.target.checked)}
                        className="mt-1 w-4 h-4 accent-vital flex-shrink-0"
                      />
                      <span className="font-body text-xs text-mineral/50 leading-relaxed">
                        {FORMULARIO.rgpd}
                      </span>
                    </label>
                    {errores.rgpd && (
                      <p className="mt-1 text-xs text-clinico-dark">{errores.rgpd}</p>
                    )}
                  </div>

                  <div aria-live="polite" className="sr-only">
                    {currentEstado === "enviando" ? "Enviando formulario" :
                     currentEstado === "error" ? "Error al enviar" : ""}
                  </div>

                  <Button
                    variant="primary-dark"
                    type="submit"
                    disabled={currentEstado === "enviando"}
                    className="w-full"
                  >
                    {currentEstado === "enviando" ? FORMULARIO.enviando : FORMULARIO.boton}
                    {currentEstado !== "enviando" && <span className="ml-2">&rarr;</span>}
                  </Button>

                  {currentEstado === "error" && (
                    <p className="mt-4 text-sm text-clinico-dark text-center">
                      {FORMULARIO.error}
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
