import { AppIcon } from "./AppIcon";

export function Brand({ showIcon = true }: { showIcon?: boolean }) {
  return (
    <a
      className="inline-flex shrink-0 items-center gap-2.5 text-[19px] font-bold tracking-[-.7px]"
      href="#inicio"
      aria-label="Emprender, ir al inicio"
    >
      {showIcon && <AppIcon />}
      <span>
        Emprender<span className="text-zinc-500">.</span>
      </span>
    </a>
  );
}
