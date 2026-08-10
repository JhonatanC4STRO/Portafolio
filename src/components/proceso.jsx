import { motion, useReducedMotion } from "motion/react";
import TextoAnimado from "./texto-animado";

const pasos = [
  ["01", "Entender", "Definimos el problema, el usuario y el resultado que debe conseguir el proyecto."],
  ["02", "Diseñar", "Organizo la experiencia, pruebo ideas y construyo una dirección visual consistente."],
  ["03", "Desarrollar", "Convierto la propuesta en una interfaz funcional, adaptable y mantenible."],
  ["04", "Mejorar", "Valido detalles, rendimiento y oportunidades para que el producto pueda evolucionar."],
];

export default function Proceso() {
  const reducirMovimiento = useReducedMotion();

  return (
    <section
      id="proceso"
      aria-labelledby="titulo-proceso"
      className="min-h-[calc(100svh-1.5rem)] scroll-mt-4 overflow-hidden rounded-3xl bg-[#c9ff42] px-5 py-20 text-neutral-950 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] opacity-60">
          Cómo trabajo
        </p>
        <h2
          id="titulo-proceso"
          className="max-w-4xl text-[clamp(3rem,9vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]"
        >
          <TextoAnimado texto="Una idea, cuatro pasos" />
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map(([numero, titulo, descripcion], indice) => (
            <motion.article
              key={numero}
              className="flex min-h-64 flex-col justify-between rounded-3xl border-2 border-neutral-950/20 bg-[#c9ff42] p-6 transition-colors hover:bg-white"
              initial={reducirMovimiento ? false : { opacity: 0, y: 50, rotate: 2 }}
              whileInView={reducirMovimiento ? undefined : { opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: indice * 0.1 }}
            >
              <span className="text-xs font-black opacity-50">{numero}</span>
              <div>
                <h3 className="mb-3 text-2xl font-black uppercase">{titulo}</h3>
                <p className="text-sm font-semibold leading-relaxed opacity-65">
                  {descripcion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
