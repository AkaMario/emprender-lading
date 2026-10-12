import { useEffect, useRef, useState, type RefObject } from "react";
import { PhoneFallback } from "./PhoneFallback";

type PhoneSceneProps = {
  progress: RefObject<number>;
  reducedMotion: boolean;
};

export function PhoneScene({ progress, reducedMotion }: PhoneSceneProps) {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element || reducedMotion) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        try {
          const { createPhoneScene } = await import("./createPhoneScene");
          if (cancelled) return;
          dispose = createPhoneScene(
            element!,
            progress,
            () => {
              if (!cancelled) setReady(true);
            },
            () => {
              if (!cancelled) setReady(false);
            },
          );
        } catch {
          // The static phone stays visible if WebGL or the lazy chunk is unavailable.
          element!.dataset.renderer = "fallback";
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(element);

    return () => {
      cancelled = true;
      observer.disconnect();
      dispose?.();
    };
  }, [progress, reducedMotion]);

  return (
    <div
      className="relative h-full min-h-0 w-full"
      role="img"
      aria-label="Teléfono Android en tres dimensiones con la identidad de Emprender"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${ready && !reducedMotion ? "opacity-0" : "opacity-100"}`}
      >
        <PhoneFallback />
      </div>
      <div
        ref={host}
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-700 [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full ${ready && !reducedMotion ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
