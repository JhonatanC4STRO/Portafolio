import Contacto from "./components/contacto";
// import HojaDeVida from "./components/hoja-de-vida";
import Proceso from "./components/proceso";
import Proyectos from "./components/proyectos";
import SeccionUno from "./components/seccion-uno";
import Servicios from "./components/servicios";
import SliderTexto from "./components/slider-texto";
import SobreMi from "./components/sobre-mi";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-neutral-950">
      <SliderTexto
        texto="DISEÑO CON INTENCIÓN • DESARROLLO WEB • EXPERIENCIAS DIGITALES • "
      />
      <main className="space-y-3 px-3 pb-3">
        <SeccionUno />
        <Proyectos />
        <SobreMi />
        <Servicios />
        <Proceso />
        {/* <HojaDeVida /> */}
        <Contacto />
      </main>

      <footer className="flex flex-col gap-2 px-6 py-8 text-xs font-bold uppercase tracking-widest text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>Jhonatan · Desarrollo web</p>
        <div className="flex flex-wrap gap-5">
          <a className="transition-colors hover:text-white" href="#hoja-de-vida">
            Hoja de vida
          </a>
          <a className="transition-colors hover:text-white" href="#inicio">
            Volver arriba ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
