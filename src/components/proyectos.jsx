import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TextoAnimado from "./texto-animado";

const proyectos = [
  {
    numero: "01",
    etiqueta: "Marketplace local",
    titulo: "ComercioLocal",
    descripcion:
      "Plataforma que conecta vecinos, emprendedores y compradores para descubrir, publicar y vender productos y servicios en su ciudad.",
    caracteristicas: ["Marketplace", "Búsqueda", "Comunidad"],
    imagen: "/comercilocal.png",
    posicionImagen: "left center",
    imagenAlt: "Página principal del proyecto ComercioLocal",
    enlace: "https://comerciolocal.shona.lat/",
    fondo: "#b7ff19",
    circulo: "#9b9da1",
    texto: "#0a0a0a",
    objetivo:
      "Dar visibilidad a la oferta de una comunidad y reunir en un mismo lugar la búsqueda, publicación y descubrimiento de productos y servicios.",
    enfoque: [
      "Organización clara de categorías y búsqueda.",
      "Flujos sencillos para explorar y publicar.",
      "Una identidad cercana que se siente local.",
    ],
    aporte:
      "Desarrollo de la interfaz y de los flujos de registro, inicio de sesión y publicación de productos y servicios.",
  },
  {
    numero: "02",
    etiqueta: "Plataforma educativa",
    titulo: "SABERHUB",
    descripcion:
      "Experiencia de aprendizaje gratuita con contenidos y herramientas prácticas sobre programación, ciberseguridad, redes e inteligencia artificial.",
    caracteristicas: ["Educación", "Laboratorios", "Cursos"],
    imagen: "/saberhub.png",
    posicionImagen: "left center",
    imagenAlt: "Página principal de la plataforma educativa SABERHUB",
    enlace: "https://saberhub.shona.lat/",
    fondo: "#4169ff",
    circulo: "#c9ff42",
    texto: "#080b24",
    objetivo:
      "Acercar conocimientos tecnológicos a más personas mediante una experiencia gratuita, ordenada y fácil de explorar.",
    enfoque: [
      "Contenido agrupado por áreas de aprendizaje.",
      "Jerarquía visual enfocada en descubrir recursos.",
      "Experiencia adaptable para estudiar desde distintos dispositivos.",
    ],
    aporte:
      "Desarrollo frontend de la plataforma, construcción de la interfaz adaptable y organización visual del contenido educativo.",
  },
  {
    numero: "03",
    etiqueta: "Analítica académica",
    titulo: "JUICIOS",
    descripcion:
      "Plataforma web que transforma reportes Excel de juicios evaluativos en consultas, perfiles de aprendices y analítica para apoyar el seguimiento formativo.",
    caracteristicas: ["Importación Excel", "Analítica", "Seguimiento"],
    imagen: "/juicios-evaluativos.png",
    posicionImagen: "center center",
    imagenAlt: "Dashboard del proyecto Juicios Evaluativos",
    enlace: "https://juicios.shona.lat/",
    fondo: "#dbeafe",
    circulo: "#ffffff",
    texto: "#071a38",
    objetivo:
      "Reemplazar la consulta manual de reportes Excel por una experiencia centralizada, filtrable y visual para entender el avance académico.",
    enfoque: [
      "Importación y procesamiento de reportes con validaciones antes de persistir los datos.",
      "Consultas organizadas por aprendices, competencias y resultados de aprendizaje.",
      "Dashboards y gráficos que convierten los juicios en indicadores accionables.",
    ],
    aporte:
      "Diseño e implementación full-stack: interfaz con React, TypeScript y ECharts, API con Spring Boot y JPA, persistencia en PostgreSQL y despliegue mediante Docker.",
  },
  {
    numero: "04",
    etiqueta: "Aplicación Android offline-first",
    titulo: "NOTIUM",
    descripcion:
      "Aplicación de notas que funciona sin conexión y sincroniza de forma segura los cambios, adjuntos e historial entre dispositivos cuando vuelve la red.",
    caracteristicas: ["Offline-first", "Sincronización", "Cifrado"],
    imagen: "/notium.png",
    posicionImagen: "center center",
    imagenAlt: "Presentación de Notium, aplicación Android de notas offline-first",
    enlace: "https://notium.shona.lat/",
    fondo: "#f2eee5",
    circulo: "#00aee8",
    texto: "#071a38",
    objetivo:
      "Mantener las notas disponibles incluso con una conexión inestable, sin sacrificar seguridad ni continuidad entre dispositivos.",
    enfoque: [
      "Persistencia local cifrada para crear, editar y consultar notas sin internet.",
      "Sincronización automática con resolución determinista y trazabilidad de conflictos.",
      "Arquitectura completa con cliente Flutter, API REST y despliegue en contenedores.",
    ],
    aporte:
      "Diseño e implementación integral del cliente Android y el servidor: arquitectura offline-first, base de datos cifrada, autenticación, sincronización, adjuntos, despliegue y pruebas automatizadas.",
  },
  {
    numero: "05",
    etiqueta: "Procesamiento documental con OCR",
    titulo: "IDENTIDAD CLARA",
    descripcion:
      "Sistema OCR que transforma documentos PDF en datos estructurados, revisables y exportables, con ejecución local mediante CPU o GPU NVIDIA.",
    caracteristicas: ["PaddleOCR", "Revisión", "Exportación"],
    imagen: "/identidad-clara.png",
    posicionImagen: "center top",
    imagenAlt: "Portada de Identidad Clara, sistema local de procesamiento OCR",
    enlace: "https://ocr.shona.lat/",
    fondo: "#e8f4fb",
    circulo: "#b9e5f5",
    texto: "#10192b",
    objetivo:
      "Convertir documentos de identidad en información estructurada que pueda revisarse, corregirse y exportarse sin depender de servicios OCR externos.",
    enfoque: [
      "Preparación de documentos con PyMuPDF y OpenCV antes del reconocimiento.",
      "Procesamiento local con PaddleOCR y extracción de campos estructurados.",
      "Revisión de resultados, persistencia y exportación a CSV o XLSX.",
    ],
    aporte:
      "Diseño e implementación integral del sistema: interfaz en Next.js, API con FastAPI, pipeline OCR, persistencia en SQLite, ejecución en contenedores para CPU o GPU NVIDIA y despliegue de la documentación pública.",
  },
];

function ProyectoPantalla({ proyecto, indice, onAbrir }) {
  return (
    <article
      className="sticky top-3 isolate h-[calc(100svh-1.5rem)] overflow-hidden rounded-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.22)] motion-reduce:relative motion-reduce:top-auto"
      style={{
        backgroundColor: proyecto.fondo,
        color: proyecto.texto,
        zIndex: indice + 1,
      }}
    >
      <div className="group grid h-full grid-rows-[auto_auto_minmax(0,1fr)_auto] gap-3 p-5 sm:gap-4 sm:p-8 lg:p-10">
        <header className="relative z-20 flex items-start justify-between gap-5 text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
          <div>
            <p>Proyecto {proyecto.numero}</p>
            <p className="mt-1 opacity-65">{proyecto.etiqueta}</p>
          </div>

          <a
            href={proyecto.enlace}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-neutral-950 px-4 py-3 text-center text-white transition-transform hover:-translate-y-1 sm:px-5"
          >
            Visitar proyecto ↗
          </a>
        </header>

        <h3 className="relative z-20 max-w-full whitespace-nowrap text-[clamp(2rem,8vw,9rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
          <TextoAnimado texto={proyecto.titulo} />
        </h3>

        <div className="relative flex min-h-0 items-center justify-center overflow-hidden py-2">
          <button
            type="button"
            onClick={() => onAbrir(proyecto)}
            aria-label={`Abrir caso de estudio de ${proyecto.titulo}`}
            className="relative aspect-video max-h-full w-full max-w-5xl cursor-pointer overflow-hidden rounded-3xl border-2 border-neutral-950/20 shadow-2xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-current"
            style={{ backgroundColor: proyecto.circulo }}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.imagenAlt}
              style={{ objectPosition: proyecto.posicionImagen }}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-3 right-3 rounded-xl bg-neutral-950 px-4 py-3 text-xs font-black uppercase tracking-wider text-white sm:bottom-5 sm:right-5">
              Ver caso +
            </span>
          </button>
        </div>

        <footer className="relative z-20 grid items-end gap-5 border-t border-current/25 pt-5 md:grid-cols-[minmax(0,1fr)_auto]">
          <p className="max-w-lg text-sm font-bold leading-relaxed sm:text-base">
            {proyecto.descripcion}
          </p>

          <ul
            className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-black uppercase tracking-[0.12em] sm:text-sm md:justify-end"
            aria-label={`Características de ${proyecto.titulo}`}
          >
            {proyecto.caracteristicas.map((caracteristica) => (
              <li key={caracteristica}>#{caracteristica.replace(" ", "")}</li>
            ))}
          </ul>
        </footer>
      </div>
    </article>
  );
}

function CasoEstudio({ proyecto, onCerrar }) {
  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cerrarConEscape = (evento) => {
      if (evento.key === "Escape") onCerrar();
    };

    window.addEventListener("keydown", cerrarConEscape);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [onCerrar]);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 p-3 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) onCerrar();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`caso-${proyecto.numero}`}
        className="mx-auto min-h-full max-w-6xl overflow-hidden rounded-3xl p-5 sm:p-8 lg:p-12"
        style={{ backgroundColor: proyecto.fondo, color: proyecto.texto }}
        initial={{ y: 60, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="flex items-start justify-between gap-5 border-b border-current/25 pb-5 text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
          <div>
            <p>Caso de estudio {proyecto.numero}</p>
            <p className="mt-1 opacity-60">{proyecto.etiqueta}</p>
          </div>
          <button
            type="button"
            autoFocus
            onClick={onCerrar}
            className="rounded-xl bg-neutral-950 px-5 py-3 text-white transition-transform hover:rotate-2"
          >
            Cerrar ×
          </button>
        </header>

        <h2
          id={`caso-${proyecto.numero}`}
          className="my-10 text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]"
        >
          {proyecto.titulo}
        </h2>

        <img
          src={proyecto.imagen}
          alt={proyecto.imagenAlt}
          className="aspect-video w-full rounded-3xl border-2 border-current/20 object-cover shadow-2xl"
          style={{ objectPosition: proyecto.posicionImagen }}
        />

        <div className="grid gap-10 py-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] opacity-60">
              El objetivo
            </p>
            <p className="text-2xl font-black leading-tight sm:text-4xl">
              {proyecto.objetivo}
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] opacity-60">
                Enfoque
              </p>
              <ol className="border-y border-current/25">
                {proyecto.enfoque.map((punto, indice) => (
                  <li
                    key={punto}
                    className="grid grid-cols-[2rem_1fr] gap-3 border-b border-current/25 py-4 text-sm font-bold last:border-b-0 sm:text-base"
                  >
                    <span className="opacity-50">0{indice + 1}</span>
                    {punto}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] opacity-60">
                Mi aporte
              </p>
              <p className="font-bold leading-relaxed">{proyecto.aporte}</p>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-5 border-t border-current/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold opacity-60">
            ¿Quieres explorar el resultado completo?
          </p>
          <a
            href={proyecto.enlace}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-neutral-950 px-6 font-black uppercase tracking-wide text-white transition-transform hover:-translate-y-1"
          >
            Visitar proyecto ↗
          </a>
        </footer>
      </motion.div>
    </motion.div>
  );
}

export default function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);

  return (
    <section
      id="proyectos"
      aria-labelledby="titulo-proyectos"
      className="scroll-mt-3 space-y-3"
    >
      <h2 id="titulo-proyectos" className="sr-only">
        Proyectos publicados
      </h2>

      {proyectos.map((proyecto, indice) => (
        <ProyectoPantalla
          key={proyecto.numero}
          proyecto={proyecto}
          indice={indice}
          onAbrir={setProyectoActivo}
        />
      ))}

      <AnimatePresence>
        {proyectoActivo && (
          <CasoEstudio
            proyecto={proyectoActivo}
            onCerrar={() => setProyectoActivo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
