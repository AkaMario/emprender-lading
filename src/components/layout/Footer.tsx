import { Brand } from "../ui/Brand";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";

const footerLink =
  "inline-flex min-h-11 items-center py-2 text-sm leading-relaxed text-muted hover:text-ink hover:underline underline-offset-4 text-left lg:min-h-0 lg:py-0 lg:text-xs";

export function Footer({ onDownload }: { onDownload: () => void }) {
  return (
    <footer className="bg-white pt-14 md:pt-16">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-9 pb-12 min-[400px]:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-[2fr_1fr_1.25fr_1.1fr] lg:pb-14">
          <div className="min-[400px]:col-span-2 lg:col-span-1">
            <Brand />
            <p className="mt-5 max-w-[400px] text-sm leading-[1.8] lg:text-xs text-muted">
              Punto de venta simple, gratuito y diseñado para los pequeños
              negocios que hacen grandes cosas.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded bg-surface px-2.5 py-2 text-[10px]">
              <Icon name="heart" size={12} />
              Hecho para apoyar el comercio local
            </span>
          </div>
          <nav
            className="flex min-w-0 flex-col items-start gap-1 lg:gap-3.5"
            aria-label="Producto"
          >
            <h3 className="mb-1 text-sm font-semibold lg:text-xs">Producto</h3>
            <a className={footerLink} href="#caracteristicas">
              Características
            </a>
            <a className={footerLink} href="#como-funciona">
              Cómo funciona
            </a>
            <button className={footerLink} onClick={onDownload} type="button">
              Descargar app
            </button>
          </nav>
          <nav
            className="flex min-w-0 flex-col items-start gap-1 lg:gap-3.5"
            aria-label="Casos de uso"
          >
            <h3 className="mb-1 text-sm font-semibold lg:text-xs">
              Casos de uso
            </h3>
            <a className={footerLink} href="#cafeterias">
              Cafeterías y panaderías
            </a>
            <a className={footerLink} href="#boutiques">
              Boutiques y ropa
            </a>
            <a className={footerLink} href="#abarrotes">
              Tiendas de barrio
            </a>
            <a className={footerLink} href="#servicios">
              Servicios y barberías
            </a>
          </nav>
          <nav
            className="flex min-w-0 flex-col items-start gap-1 lg:gap-3.5"
            aria-label="Información"
          >
            <h3 className="mb-1 text-sm font-semibold lg:text-xs">
              Conoce Emprender
            </h3>
            <a className={footerLink} href="#por-que-gratis">
              Por qué es gratis
            </a>
            <a className={footerLink} href="#preguntas">
              Preguntas frecuentes
            </a>
            <a className={footerLink} href="#como-funciona">
              Guía de instalación
            </a>
            <a className={footerLink} href="#inicio">
              Volver al inicio ↑
            </a>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-line py-6 text-xs leading-relaxed text-muted sm:flex-row sm:gap-5">
          <p>
            © {new Date().getFullYear()} Emprender. Hecho para negocios
            independientes.
          </p>
          <span>Menos complicaciones. Más posibilidades.</span>
        </div>
      </Container>
    </footer>
  );
}
