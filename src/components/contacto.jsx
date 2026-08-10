import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import TextoAnimado from "./texto-animado";

const correo = "shonano247@gmail.com";
const asunto = "Quiero hablar sobre un proyecto";
const mensaje =
  "Hola Jhonatan, vi tu portafolio y quisiera conversar contigo sobre un proyecto.";

export default function Contacto() {
  const reducirMovimiento = useReducedMotion();
  const [correoCopiado, setCorreoCopiado] = useState(false);

  const copiarCorreo = async () => {
    try {
      await navigator.clipboard.writeText(correo);
      setCorreoCopiado(true);
      window.setTimeout(() => setCorreoCopiado(false), 2000);
    } catch {
      window.location.href = `mailto:${correo}`;
    }
  };

  return (
    <motion.section
      id="contacto"
      aria-labelledby="titulo-contacto"
      className="scroll-mt-4 overflow-hidden rounded-3xl bg-orange-500 px-5 py-20 text-neutral-950 sm:px-10 lg:px-16"
      initial={reducirMovimiento ? false : { opacity: 0, scale: 0.97 }}
      whileInView={reducirMovimiento ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.25em]">
          ¿Tienes una idea?
        </p>
        <h2
          id="titulo-contacto"
          className="max-w-5xl text-5xl font-black uppercase leading-[0.82] tracking-tight sm:text-7xl lg:text-9xl"
        >
          <TextoAnimado texto="Hagamos algo increíble" />
        </h2>

        <motion.div
          className="mt-12 grid gap-8 border-t border-neutral-950/25 pt-8 lg:grid-cols-[1fr_22rem] lg:items-end"
          initial={reducirMovimiento ? false : { opacity: 0, y: 30 }}
          whileInView={reducirMovimiento ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <p className="max-w-2xl text-lg font-bold leading-relaxed sm:text-xl">
              Cuéntame brevemente qué necesitas y conversemos sobre cómo
              convertirlo en una experiencia digital sólida.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-neutral-950 px-6 font-black uppercase tracking-wide text-white transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                Enviar correo
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>

              <button
                type="button"
                onClick={copiarCorreo}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-neutral-950 px-6 font-black uppercase tracking-wide transition-colors hover:bg-neutral-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                {correoCopiado ? "Correo copiado ✓" : "Copiar correo"}
              </button>
            </div>

            <a
              href={`mailto:${correo}`}
              className="mt-5 inline-block break-all text-sm font-black underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60 sm:text-base"
            >
              {correo}
            </a>
            <p className="sr-only" aria-live="polite">
              {correoCopiado ? "Dirección de correo copiada" : ""}
            </p>
          </div>

          <aside className="rounded-2xl bg-neutral-950 p-6 text-white sm:p-7">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em]">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-lime-400 shadow-[0_0_14px_#a3e635]"
              />
              Disponible para proyectos
            </p>
            <p className="mt-5 text-sm font-bold leading-relaxed text-white/65">
              Trabajo freelance y oportunidades laborales, de forma remota o
              desde Florencia, Colombia.
            </p>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-white/45">
              Respondo normalmente en menos de 24 horas
            </p>
            <a
              href="https://github.com/JhonatanC4STRO"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-black uppercase underline decoration-2 underline-offset-4 transition-colors hover:text-orange-500"
            >
              Ver GitHub <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </motion.div>
      </div>
    </motion.section>
  );
}
