import { motion, useReducedMotion } from "motion/react";
import TextoAnimado from "./texto-animado";

const servicios = [
  ["01", "Frontend", "Conversión de diseños en interfaces rápidas, adaptables y visualmente consistentes."],
  ["02", "Integración", "Consumo de APIs y conexión de datos con interfaces claras para el usuario."],
  ["03", "Diseño responsive", "Experiencias cuidadas para celulares, tabletas y computadores."],
  ["04", "Publicación web", "Configuración de dominios, variables de entorno, Docker y despliegue en VPS."],
];

export default function Servicios() {
  const reducirMovimiento = useReducedMotion();

  return (
    <motion.section
      id="servicios"
      aria-labelledby="titulo-servicios"
      className="flex min-h-[calc(100svh-1.5rem)] scroll-mt-4 items-center overflow-hidden rounded-3xl bg-neutral-950 px-5 py-20 text-white sm:px-10 lg:px-16"
      initial={reducirMovimiento ? false : { opacity: 0, y: 50 }}
      whileInView={reducirMovimiento ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-white/50">
          Lo que puedo aportar
        </p>
        <h2
          id="titulo-servicios"
          className="max-w-5xl text-[clamp(2.8rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.06em]"
        >
          <TextoAnimado texto="Diseño y tecnología" />
        </h2>

        <div className="mt-14 border-y border-white/20">
          {servicios.map(([numero, titulo, descripcion], indice) => (
            <motion.article
              key={numero}
              className="group grid gap-3 border-b border-white/20 py-6 last:border-b-0 sm:grid-cols-[3rem_15rem_1fr] sm:items-center"
              initial={reducirMovimiento ? false : { opacity: 0, x: 40 }}
              whileInView={reducirMovimiento ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: indice * 0.08 }}
            >
              <span className="text-xs font-black text-white/40">{numero}</span>
              <h3 className="text-xl font-black uppercase transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                {titulo}
              </h3>
              <p className="max-w-xl text-sm font-semibold leading-relaxed text-white/60 sm:text-base">
                {descripcion}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
