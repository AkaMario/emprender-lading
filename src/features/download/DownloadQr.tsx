import { useEffect, useRef, useState } from "react";
import downloadQr from "../../assets/qr-code.png";

const cells = Array.from({ length: 64 }, (_, index) => index);

export function DownloadQr() {
  const frame = useRef<HTMLDivElement>(null);
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealing(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (frame.current) observer.observe(frame.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frame}
      className="relative mt-4 size-48 max-w-full shrink-0 overflow-hidden rounded-lg border border-line bg-white p-2"
    >
      <img
        src={downloadQr}
        alt="Código QR para descargar Emprender en Android"
        width={1148}
        height={1148}
        className="size-full object-contain"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 overflow-hidden motion-reduce:hidden"
      >
        <div className="grid size-full grid-cols-8 grid-rows-8">
          {cells.map((cell) => (
            <span
              key={cell}
              className={`bg-white ${revealing ? "animate-qr-cell-reveal" : ""}`}
              style={{ animationDelay: `${((cell * 17) % 64) * 14}ms` }}
            />
          ))}
        </div>
        {revealing && (
          <span className="absolute inset-0 animate-qr-scan border-t border-ink/40" />
        )}
      </div>
    </div>
  );
}
