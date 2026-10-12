import appIcon from "../../assets/android-icon-monochrome.png";

/** Identidad visual compartida de la app; los textos adyacentes dan su nombre. */
export function AppIcon({ className = "size-10" }: { className?: string }) {
  return (
    <img
      src={appIcon}
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
