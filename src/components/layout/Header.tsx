import { useEffect, useRef, useState } from "react";
import { navigation } from "../../content/landing";
import { Brand } from "../ui/Brand";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";

type HeaderProps = { onDownload: () => void };

export function Header({ onDownload }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    desktop.addEventListener("change", closeOnDesktop);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  function closeAndRun(action: () => void) {
    setMenuOpen(false);
    menuButton.current?.focus();
    action();
  }

  return (
    <header
      ref={header}
      className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <Container className="flex min-h-17 items-center justify-between gap-3 sm:gap-5 lg:min-h-19">
        <Brand showIcon={false} />
        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-4.25rem)] flex-col overscroll-contain overflow-y-auto border-b border-line bg-white px-4 py-5 shadow-lg shadow-black/5 sm:px-6 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-5 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center py-3 text-[15px] text-muted transition-colors hover:text-ink lg:text-xs"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 lg:hidden">
            <Button
              className="w-full sm:w-auto"
              onClick={() => closeAndRun(onDownload)}
            >
              <Icon name="download" size={16} />
              Descargar APK
            </Button>
          </div>
        </nav>
        <div className="ml-auto hidden shrink-0 items-center gap-2 sm:flex lg:ml-0">
          <Button size="small" onClick={onDownload}>
            <Icon name="download" size={14} />
            Descargar APK
          </Button>
        </div>
        <button
          ref={menuButton}
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-lg border border-line bg-white lg:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </Container>
    </header>
  );
}
