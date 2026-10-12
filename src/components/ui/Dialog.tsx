import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  titleId: string;
  children: ReactNode;
  wide?: boolean;
};

/** El diálogo nativo gestiona el foco, el teclado y la interacción con el fondo. */
export function Dialog({
  open,
  onClose,
  titleId,
  children,
  wide = false,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog?.open) dialog?.showModal();
    if (!open && dialog?.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const { left, right, top, bottom } =
          event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < left ||
          event.clientX > right ||
          event.clientY < top ||
          event.clientY > bottom
        )
          onClose();
      }}
      className={`fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] overscroll-contain overflow-y-auto rounded-2xl border border-line bg-white p-0 text-ink shadow-2xl sm:max-h-[90dvh] ${wide ? "max-w-[880px]" : "max-w-[480px]"}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar ventana"
        className="absolute top-3 right-3 z-10 grid size-11 place-items-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 sm:top-4 sm:right-4"
      >
        <Icon name="close" size={18} />
      </button>
      {children}
    </dialog>
  );
}
