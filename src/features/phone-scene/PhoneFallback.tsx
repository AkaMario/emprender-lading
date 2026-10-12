import { AppIcon } from "../../components/ui/AppIcon";

/** Brand presentation, rather than an invented screenshot of the application. */
export function PhoneFallback() {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      aria-hidden="true"
    >
      <div className="relative aspect-[1/2.04] h-[80%] max-h-[580px] rotate-[-8deg] rounded-[2.25rem] border-[5px] border-zinc-500 bg-zinc-950 p-[5px] shadow-[18px_28px_55px_-15px_#17191c40] motion-reduce:rotate-0">
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.8rem] bg-white px-5">
          <div className="absolute top-3 left-1/2 size-2 -translate-x-1/2 rounded-full bg-zinc-950" />
          <AppIcon className="w-[75%]" />
          <span className="mt-6 text-[9px] tracking-[.22em] text-zinc-500">
            TU NEGOCIO, EN ANDROID
          </span>
          <div className="absolute bottom-3 h-1 w-12 rounded-full bg-zinc-900" />
        </div>
      </div>
    </div>
  );
}
