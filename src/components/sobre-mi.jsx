import { motion, useReducedMotion } from "motion/react";
import TextoAnimado from "./texto-animado";

const valores = [
  ["01", "Claridad", "Cada decisión visual debe ayudar a entender y usar mejor el producto."],
  ["02", "Detalle", "Las pequeñas interacciones convierten una interfaz correcta en una experiencia memorable."],
  ["03", "Evolución", "Construyo bases flexibles que pueden crecer sin perder coherencia."],
];

export default function SobreMi() {
  const reducirMovimiento = useReducedMotion();

  return (
    <motion.section
      id="sobre-mi"
      aria-labelledby="titulo-sobre-mi"
      className="scroll-mt-4 rounded-3xl bg-[#e9e2d5] px-5 py-20 text-neutral-950 sm:px-10 lg:px-16"
      initial={reducirMovimiento ? false : { opacity: 0, y: 60 }}
      whileInView={reducirMovimiento ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em]">
            Sobre mí
          </p>
          <h2
            id="titulo-sobre-mi"
            className="text-4xl font-black uppercase leading-[0.9] sm:text-6xl"
          >
            <TextoAnimado texto="Desarrollo con intención" />
          </h2>
        </div>

        <div>
          <motion.p
            className="max-w-2xl text-xl font-bold leading-tight sm:text-3xl"
            initial={reducirMovimiento ? false : { opacity: 0, y: 24 }}
            whileInView={reducirMovimiento ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Soy Jhonatan, estudiante de Análisis y Desarrollo de Software en el SENA y desarrollador frontend enfocado en convertir diseños en interfaces modernas, adaptables y funcionales.
          </motion.p>

          <motion.div
            className="mt-12 divide-y divide-neutral-950/20 border-y border-neutral-950/20"
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              oculto: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {valores.map(([numero, titulo, descripcion]) => (
              <motion.article
                key={numero}
                className="grid gap-3 py-6 sm:grid-cols-[3rem_9rem_1fr]"
                variants={{
                  oculto: reducirMovimiento ? {} : { opacity: 0, x: 35 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-black opacity-50">{numero}</span>
                <h3 className="font-black uppercase">{titulo}</h3>
                <p className="text-sm font-semibold leading-relaxed opacity-65">
                  {descripcion}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
