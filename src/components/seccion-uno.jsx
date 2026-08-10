import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Encabezado from "./encabezado";
import Tecnologias from "./tecnologias";

export default function SeccionUno() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[210vh] scroll-mt-4 overflow-x-clip rounded-lg bg-red-500 text-neutral-950"
    >
      <Encabezado></Encabezado>
      <div className="relative flex min-h-[125vh] items-center justify-center overflow-visible">
        {/* Esta capa suma la rotacion producida por el scroll. */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute size-[95vmax]"
          style={{
            rotate: reduceMotion ? 0 : scrollRotate,
            y: 300,
          }}
        >
          {/* Esta capa mantiene la rueda girando automaticamente. */}
          <motion.div
            className="size-full"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          >
            <svg viewBox="0 0 1000 1000" className="size-full overflow-visible">
              <defs>
                <path
                  id="rueda-texto"
                  d="M 500,500 m -440,0 a 440,440 0 1,1 880,0 a 440,440 0 1,1 -880,0"
                />
              </defs>

              <text
                fill="currentColor"
                fontSize="100"
                fontWeight="900"
                letterSpacing="-2"
              >
                <textPath
                  href="#rueda-texto"
                  lengthAdjust="spacing"
                  textLength="2700"
                >
                  DESARROLLO WEB {"\u2022"} FRONTEND {"\u2022"} REACT {"\u2022"}
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>

        <div className="relative z-10 flex w-[88vw] max-w-4xl translate-y-[200px] flex-col items-center">
          <h1 className="mb-6 max-w-3xl text-center text-2xl font-bold  uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-7xl">
            Convierto diseños en interfaces web
          </h1>
          <Tecnologias />
        </div>
      </div>
    </section>
  );
}
