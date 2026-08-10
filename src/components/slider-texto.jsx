import MarqueeModule from "react-fast-marquee";

// El paquete CommonJS puede llegar envuelto en `default` con Vite 8.
const Marquee = MarqueeModule.default ?? MarqueeModule;

export default function SliderTexto({
  texto = "LOREM IPSUM \u2022 DISE\u00d1O WEB \u2022 DESARROLLO CREATIVO \u2022",
  velocidad = 80,
  direccion = "left",
}) {
  return (
    <section
      aria-label={texto}
      className="overflow-hidden bg-neutral-950 py-2 text-gray-300 sm:py-3"
    >
      <Marquee
        autoFill
        direction={direccion}
        gradient
        gradientColor="#0a0a0a"
        // gradientWidth={120}
        speed={velocidad}
      >
        <span
          aria-hidden="true"
          className="text-sm font-bold uppercase leading-none tracking-tight"
        >
          {texto}
        </span>
      </Marquee>
    </section>
  );
}
