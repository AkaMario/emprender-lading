import { useRef } from "react";
import { Container } from "../../components/ui/Container";
import { Icon } from "../../components/ui/Icon";
import { productStory } from "../../content/productStory";
import { PhoneScene } from "../../features/phone-scene/PhoneScene";
import { useProductScroll } from "../../features/phone-scene/useProductScroll";

export function ProductExperience() {
  const section = useRef<HTMLElement>(null);
  const { progress, activeChapter, reducedMotion, goToChapter } =
    useProductScroll(section);

  return (
    <section
      ref={section}
      id="experiencia"
      aria-label="Conoce Emprender en Android"
      className="relative h-[280svh] border-y border-line/60 bg-[#f5f5f7] lg:h-[320svh] motion-reduce:h-auto"
    >
      <div className="sticky top-17 h-[calc(100svh-4.25rem)] min-h-[480px] overflow-hidden lg:top-19 lg:h-[calc(100svh-4.75rem)] [@media(max-height:600px)_and_(min-width:600px)]:min-h-0 motion-reduce:static motion-reduce:h-auto">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#fff_0%,transparent_65%)]" />
        <Container className="relative grid h-full grid-rows-[minmax(0,1fr)_auto_auto] gap-y-2 pb-5 lg:grid-cols-[0.95fr_1.05fr] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-12 lg:pb-8 [@media(max-height:600px)_and_(min-width:600px)]:grid-cols-2 [@media(max-height:600px)_and_(min-width:600px)]:grid-rows-[minmax(0,1fr)_auto] [@media(max-height:600px)_and_(min-width:600px)]:gap-x-6 [@media(max-height:600px)_and_(min-width:600px)]:pb-2 motion-reduce:h-auto motion-reduce:py-12">
          <div className="relative row-start-1 min-h-0 lg:col-start-2 lg:row-span-1 [@media(max-height:600px)_and_(min-width:600px)]:col-start-2 motion-reduce:h-[420px]">
            <div className="pointer-events-none absolute inset-x-[28%] bottom-[6%] h-[6%] rounded-[50%] bg-zinc-800/10 blur-xl lg:inset-x-[22%]" />
            <PhoneScene progress={progress} reducedMotion={reducedMotion} />
          </div>
          <div className="row-start-2 self-center lg:col-start-1 lg:row-start-1 [@media(max-height:600px)_and_(min-width:600px)]:col-start-1 [@media(max-height:600px)_and_(min-width:600px)]:row-start-1">
            <p className="mb-3 text-[10px] font-semibold tracking-[.2em] text-muted sm:text-xs lg:mb-7">
              EMPRENDER PARA ANDROID
            </p>
            <div className="grid motion-reduce:gap-9">
              {productStory.map((chapter, index) => (
                <article
                  key={chapter.number}
                  aria-hidden={!reducedMotion && activeChapter !== index}
                  className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:col-auto motion-reduce:row-auto motion-reduce:translate-y-0 motion-reduce:opacity-100 ${activeChapter === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
                >
                  <h2 className="whitespace-pre-line text-[clamp(1.75rem,5.7vw,3.875rem)] leading-[1.05] font-semibold tracking-[-.05em] [@media(max-height:600px)_and_(min-width:600px)]:text-2xl">
                    {chapter.title}
                  </h2>
                  <p className="mt-3 max-w-[470px] text-[13px] leading-[1.75] text-muted sm:text-sm lg:mt-6 lg:text-base">
                    {chapter.description}
                  </p>
                  <p className="mt-5 hidden text-[10px] font-semibold tracking-[.13em] text-zinc-500 sm:block lg:mt-8 [@media(max-height:600px)_and_(min-width:600px)]:hidden">
                    {chapter.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="row-start-3 mt-4 flex items-center justify-between gap-3 border-t border-zinc-300/60 pt-3 lg:col-span-2 lg:row-start-2 lg:mt-0 lg:pt-5 [@media(max-height:600px)_and_(min-width:600px)]:col-span-2 [@media(max-height:600px)_and_(min-width:600px)]:row-start-2 [@media(max-height:600px)_and_(min-width:600px)]:mt-0 [@media(max-height:600px)_and_(min-width:600px)]:pt-1 motion-reduce:hidden">
            <nav
              aria-label="Capítulos de la presentación"
              className="flex gap-1 sm:gap-5"
            >
              {productStory.map((chapter, index) => (
                <button
                  key={chapter.number}
                  type="button"
                  onClick={() => goToChapter(index)}
                  aria-current={activeChapter === index ? "step" : undefined}
                  className={`relative inline-flex min-h-11 items-center gap-2 px-1 text-[11px] transition-colors sm:px-2 sm:text-xs ${activeChapter === index ? "text-ink" : "text-zinc-500 hover:text-ink"}`}
                >
                  <span className="font-mono text-[10px] text-zinc-400">
                    {chapter.number}
                  </span>
                  {chapter.label}
                  <span
                    className={`absolute inset-x-1 bottom-0 h-px origin-left bg-zinc-900 transition-transform duration-500 ${activeChapter === index ? "scale-x-100" : "scale-x-0"}`}
                  />
                </button>
              ))}
            </nav>
            <a
              href="#caracteristicas"
              className="inline-flex min-h-11 items-center gap-2 text-xs text-muted hover:text-ink"
              aria-label="Continuar a las funcionalidades"
            >
              <span className="hidden sm:inline">Sigue explorando</span>
              <Icon name="arrowDown" size={16} />
            </a>
          </div>
        </Container>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-zinc-900/70 motion-reduce:hidden"
          style={{ transform: "scaleX(var(--product-progress, 0))" }}
        />
      </div>
    </section>
  );
}
