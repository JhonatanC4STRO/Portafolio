import { motion, useReducedMotion } from "motion/react";

const contenedor = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const letra = {
  oculto: { opacity: 0, y: "0.8em", rotate: 4 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 150, damping: 18 },
  },
};

export default function TextoAnimado({ texto, className = "" }) {
  const reducirMovimiento = useReducedMotion();

  if (reducirMovimiento) {
    return <span className={className}>{texto}</span>;
  }

  return (
    <motion.span
      aria-label={texto}
      className={`inline-block ${className}`}
      variants={contenedor}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {Array.from(texto).map((caracter, indice) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          key={`${caracter}-${indice}`}
          variants={letra}
        >
          {caracter === " " ? "\u00A0" : caracter}
        </motion.span>
      ))}
    </motion.span>
  );
}
