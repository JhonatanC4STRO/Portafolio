const tecnologias = [
  { nombre: "HTML5", icono: "/html5.svg" },
  { nombre: "CSS", icono: "/css.svg" },
  { nombre: "JavaScript", icono: "/javascript.svg" },
  { nombre: "React", icono: "/react.svg" },
  { nombre: "Tailwind CSS", icono: "/tailwindcss.svg" },
  { nombre: "Spring Boot", icono: "/springboot.svg" },
];

function EmblemaTecnologia({ nombre, icono }) {
  return (
    <article className="group flex w-full flex-col items-center">
      <div className="flex h-24 w-40 items-center justify-center sm:h-28 sm:w-48">
        <img
          src={icono}
          alt=""
          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-1 text-xs font-black uppercase tracking-widest sm:text-sm">
        {nombre}
      </h3>
    </article>
  );
}

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="titulo-tecnologias"
      className="w-full px-2 py-6 text-neutral-950 sm:px-5"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="titulo-tecnologias"
          className="mx-auto mb-7 max-w-lg text-center text-sm font-black uppercase leading-[1.05] tracking-wider sm:text-lg"
        >
          {"Tecnolog\u00edas con las que construyo"}
          <br />
          experiencias sobresalientes
        </h2>

        <div className="grid grid-cols-2 justify-items-center gap-x-1 gap-y-6 lg:grid-cols-3">
          {tecnologias.map((tecnologia) => (
            <EmblemaTecnologia key={tecnologia.nombre} {...tecnologia} />
          ))}
        </div>

        <div
          id="hoja-de-vida"
          className="mt-10 flex scroll-mt-6 flex-col gap-5 border-t-2 border-neutral-950 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">
              Perfil profesional
            </p>
            <h3 className="mt-1 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Conoce mi experiencia
            </h3>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/CV-Jhonatan-Castro.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-black uppercase tracking-wide text-red-500 transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-current stroke-2"
              >
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
              Ver hoja de vida
            </a>

            <a
              href="/CV-Jhonatan-Castro.pdf"
              download="CV-Jhonatan-Castro.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-neutral-950 px-6 text-sm font-black uppercase tracking-wide transition-colors hover:bg-neutral-950 hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-current stroke-2"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
              </svg>
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
