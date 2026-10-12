import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Icon } from "../../components/ui/Icon";

export function DownloadCta({ onDownload }: { onDownload: () => void }) {
  return (
    <section
      className="py-14 md:py-20"
      id="descargar"
      aria-labelledby="download-title"
    >
      <Container>
        <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-brand px-5 py-8 text-white shadow-xl shadow-black/10 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-14 xl:px-16">
          <div className="pointer-events-none absolute -top-30 -right-25 size-64 rounded-full border border-white/5 shadow-[0_0_0_55px_#ffffff02,0_0_0_110px_#ffffff02]" />
          <div className="relative min-w-0">
            <h2
              id="download-title"
              className="mt-5 text-[clamp(1.625rem,3.5vw,2.375rem)] leading-[1.2] font-medium tracking-[-.8px] lg:tracking-[-1.4px]"
            >
              Digitaliza y ordena tu negocio
              <br className="hidden sm:block" /> hoy mismo.
            </h2>
            <p className="mt-5 text-sm leading-[1.8] text-zinc-400">
              Elige tu tipo de emprendimiento y registra tu catálogo.
              <br className="hidden sm:block" /> Lleva las ventas y la operación
              desde tu dispositivo Android.
            </p>
          </div>
          <div className="relative flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto">
            <Button
              variant="light"
              onClick={onDownload}
              className="w-full max-sm:gap-2 max-sm:px-4 sm:w-auto"
            >
              <Icon name="android" size={19} />
              Descargar APK gratis
              <Icon name="arrow" size={17} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
