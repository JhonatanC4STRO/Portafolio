import { motion, useReducedMotion } from "motion/react";
import TextoAnimado from "./texto-animado";

const habilidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Git y GitHub",
  "Consumo de APIs",
  "Diseño responsive",
  "Vite",
  "npm",
  "Linux",
  "Docker",
  "VPS y dominios",
];

const aprendiendo = ["Next.js", "Spring Boot", "SQL", "PostgreSQL", "Inglés"];

export default function HojaDeVida() {
  const reducirMovimiento = useReducedMotion();

  return (
    <motion.section
      id="hoja-de-vida"
      aria-labelledby="titulo-hoja-de-vida"
      className="scroll-mt-4 overflow-hidden rounded-3xl bg-[#e9e2d5] px-5 py-20 text-neutral-950 sm:px-10 lg:px-16"
      initial={reducirMovimiento ? false : { opacity: 0, scale: 0.98 }}
      whileInView={reducirMovimiento ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] opacity-50">
          Perfil profesional
        </p>
        <h2
          id="titulo-hoja-de-vida"
          className="max-w-5xl text-[clamp(3rem,9vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]"
        >
          <TextoAnimado texto="Hoja de vida" />
        </h2>

        <div className="mt-14 grid gap-10 border-t border-neutral-950/25 pt-10 lg:grid-cols-[18rem_1fr]">
          <div>
            {/* Aquí se reemplazará el marcador por tu fotografía. */}
            <div className="flex aspect-[4/5] w-full max-w-72 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-neutral-950/30 bg-neutral-950/5 text-center">
              <span className="text-6xl font-black opacity-15" aria-hidden="true">
                JC
              </span>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] opacity-50">
                Espacio para fotografía
              </p>
            </div>

            <div className="mt-6 space-y-1 text-sm font-bold">
              <p>Florencia, Caquetá</p>
              <p className="opacity-60">Colombia</p>
              <a
                href="https://github.com/JhonatanC4STRO"
                target="_blank"
                rel="noreferrer"
                className="inline-block pt-3 underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div>
            <h3 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] sm:text-5xl">
              Desarrollador frontend junior
            </h3>
            <p className="mt-6 max-w-3xl text-lg font-bold leading-relaxed sm:text-xl">
              Convierto diseños de Figma en interfaces web modernas, adaptables y funcionales con React, JavaScript y Tailwind CSS. También tengo experiencia publicando proyectos con dominios, Docker y servidores VPS.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <article>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] opacity-50">
                  Formación
                </p>
                <h4 className="text-xl font-black uppercase">
                  Análisis y Desarrollo de Software
                </h4>
                <p className="mt-2 font-bold">SENA</p>
                <p className="mt-1 text-sm font-semibold opacity-60">
                  Enero de 2025 — Noviembre de 2026
                </p>
              </article>

              <article>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] opacity-50">
                  Experiencia adicional
                </p>
                <h4 className="text-xl font-black uppercase">
                  Atención al cliente
                </h4>
                <p className="mt-2 font-bold">Recepción de hotel</p>
                <p className="mt-1 text-sm font-semibold leading-relaxed opacity-60">
                  Comunicación con clientes, atención de solicitudes y solución de situaciones cotidianas.
                </p>
              </article>
            </div>

            <div className="mt-12 border-y border-neutral-950/20 py-8">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] opacity-50">
                Habilidades
              </p>
              <ul className="flex flex-wrap gap-2">
                {habilidades.map((habilidad) => (
                  <li
                    key={habilidad}
                    className="rounded-full border border-neutral-950/25 px-4 py-2 text-xs font-black uppercase"
                  >
                    {habilidad}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] opacity-50">
                Actualmente aprendiendo
              </p>
              <p className="font-bold">{aprendiendo.join(" · ")}</p>
            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-neutral-950/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-black uppercase">Documento descargable</p>
                <p className="mt-1 text-sm font-semibold opacity-60">
                  Se conectará cuando agreguemos el archivo definitivo.
                </p>
              </div>

              {/* Cambiar por un enlace a /hoja-de-vida.pdf cuando llegue el documento. */}
              <span
                aria-disabled="true"
                className="inline-flex min-h-14 cursor-not-allowed items-center justify-center rounded-xl bg-neutral-950 px-6 font-black uppercase tracking-wide text-white/50"
              >
                CV próximamente
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
