import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Icon } from "../../components/ui/Icon";

export function Hero({ onDownload }: { onDownload: () => void }) {
  return (
    <section
      className="bg-[radial-gradient(ellipse_at_50%_0%,#eef0f480,transparent_65%)] pt-12 pb-10 text-center sm:pt-16 md:pb-14 lg:pt-20"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <Container>
        <h1
          id="hero-title"
          className="mx-auto max-w-[970px] text-[clamp(2.125rem,6vw,3rem)] leading-[1.14] font-semibold tracking-[-1.3px] lg:text-[clamp(3rem,4.5vw,3.875rem)] lg:tracking-[-2.8px]"
        >
          Un punto de venta para
          <br className="hidden lg:block" />{" "}
          <span className="text-zinc-500">cinco tipos de emprendimiento.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[630px] text-[15px] leading-[1.8] text-muted md:mt-6">
          Restaurantes, alquileres, granel, comercio por unidad y servicios.
          Elige tu tipo de negocio y lleva su catálogo, ventas y operaciones
          desde Android, con los datos guardados en tu dispositivo.
        </p>
        <div className="mx-auto mt-7 flex w-full max-w-[400px] flex-col justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row">
          <Button onClick={onDownload}>
            <Icon name="android" size={18} />
            Descargar APK{" "}
            <span className="-ml-1 font-normal text-zinc-300">(Android)</span>
          </Button>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-line bg-white px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-zinc-50 sm:px-6"
            href="#caracteristicas"
          >
            Conocer funcionalidades
            <Icon name="arrow" size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
