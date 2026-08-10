const enlaces = [
  ["Inicio", "#inicio"],
  ["Proyectos", "#proyectos"],
  ["Servicios", "#servicios"],
  ["Proceso", "#proceso"],
  ["Sobre mí", "#sobre-mi"],
  ["Hoja de vida", "#hoja-de-vida"],
  ["Contacto", "#contacto"],
];

export default function Encabezado() {
  return (
    <header className="relative z-20 rounded-t-xl px-6 py-7 text-neutral-950 sm:px-9 lg:px-11">
      <div className="grid min-h-20 grid-cols-2 items-center gap-x-6 gap-y-7 md:grid-cols-[1.3fr_0.75fr_1fr_0.75fr_auto]">
        <p className="max-w-56 text-sm font-black uppercase leading-[1.05] tracking-wide sm:text-base">
          Creando experiencias
          <br />
          digitales con impacto
        </p>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="text-base font-black uppercase leading-[1.05] tracking-wide">
            <li>
              <a className="transition-opacity hover:opacity-60" href="#inicio">
                <span aria-hidden="true">● </span>Inicio
              </a>
            </li>
            <li>
              <a className="ml-4 transition-opacity hover:opacity-60" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li>
              <a className="transition-opacity hover:opacity-60" href="#servicios">
                Servicios
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="justify-self-end text-3xl font-black uppercase leading-none tracking-[-0.09em] transition-transform hover:scale-105 md:justify-self-center lg:text-4xl"
        >
          Jhonatan
        </a>

        <nav aria-label="Enlaces secundarios" className="hidden md:block">
          <ul className="text-base font-black uppercase leading-[1.05] tracking-wide">
            <li>
              <a className="transition-opacity hover:opacity-60" href="#sobre-mi">
                Sobre mí
              </a>
            </li>
            <li>
              <a className="transition-opacity hover:opacity-60" href="#hoja-de-vida">
                Hoja de vida
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#contacto"
          className="group relative col-span-2 flex min-h-14 items-center justify-center justify-self-end rounded-xl bg-neutral-950 px-6 text-sm font-black uppercase tracking-wide text-white transition-transform hover:-translate-y-1 md:col-span-1 md:text-base"
        >
          <span className="absolute left-2 top-2 size-1 rounded-full bg-neutral-600 transition-colors group-hover:bg-[#ff1a1a]" />
          <span className="absolute right-2 top-2 size-1 rounded-full bg-neutral-600 transition-colors group-hover:bg-[#ff1a1a]" />
          <span className="absolute bottom-2 left-2 size-1 rounded-full bg-neutral-600 transition-colors group-hover:bg-[#ff1a1a]" />
          <span className="absolute bottom-2 right-2 size-1 rounded-full bg-neutral-600 transition-colors group-hover:bg-[#ff1a1a]" />
          Hablemos
        </a>
      </div>

      <nav
        aria-label="Navegación móvil"
        className="mt-5 border-t border-neutral-950/20 pt-4 md:hidden"
      >
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black uppercase tracking-wide">
          {enlaces.map(([nombre, destino]) => (
            <li key={destino}>
              <a className="transition-opacity hover:opacity-60" href={destino}>
                {nombre}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
