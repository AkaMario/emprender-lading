import { useEffect, useRef, useState, type RefObject } from "react";

export function useProductScroll(section: RefObject<HTMLElement | null>) {
  const progress = useRef(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const element = section.current;
    if (!element || reducedMotion) return;
    let frame = 0;
    let chapter = -1;

    function measure() {
      frame = 0;
      if (!element) return;
      const sticky = element.firstElementChild as HTMLElement;
      const top = parseFloat(getComputedStyle(sticky).top) || 0;
      const travel = element.offsetHeight - sticky.offsetHeight;
      const next = Math.min(
        1,
        Math.max(
          0,
          (top - element.getBoundingClientRect().top) / Math.max(1, travel),
        ),
      );
      progress.current = next;
      element.style.setProperty("--product-progress", String(next));
      const nextChapter = Math.min(2, Math.floor(next * 3));
      if (chapter !== nextChapter) {
        chapter = nextChapter;
        setActiveChapter(nextChapter);
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(measure);
    }

    const resize = new ResizeObserver(schedule);
    resize.observe(element);
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [section, reducedMotion]);

  function goToChapter(index: number) {
    const element = section.current;
    if (!element || reducedMotion) return;
    const sticky = element.firstElementChild as HTMLElement;
    const top = parseFloat(getComputedStyle(sticky).top) || 0;
    const travel = element.offsetHeight - sticky.offsetHeight;
    window.scrollTo({
      top:
        window.scrollY +
        element.getBoundingClientRect().top -
        top +
        travel * ((index + 0.5) / 3),
      behavior: "smooth",
    });
  }

  return { progress, activeChapter, reducedMotion, goToChapter };
}
