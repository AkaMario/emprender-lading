import { appConfig } from "../../config/app";
import { AppIcon } from "../../components/ui/AppIcon";
import { Dialog } from "../../components/ui/Dialog";
import { Icon } from "../../components/ui/Icon";

export function DownloadDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} titleId="download-dialog-title">
      <div className="px-5 pt-8 pb-6 sm:p-9">
        <AppIcon className="mb-6 size-16" />
        <p className="text-[10px] font-semibold tracking-widest text-muted uppercase">
          Tu próximo paso
        </p>
        <h2
          id="download-dialog-title"
          className="mt-2 text-2xl font-semibold tracking-[-.8px]"
        >
          Lleva Emprender a tu negocio.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Descarga la aplicación gratis e instálala directamente en tu teléfono
          o tablet Android.
        </p>
        <a
          href={appConfig.apkUrl}
          download={appConfig.apkFilename}
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-3 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-zinc-800 sm:gap-3 sm:px-5 sm:text-sm"
        >
          <Icon name="download" size={18} />
          Descargar Emprender.apk
        </a>
        <p className="mt-3 text-center text-[11px] text-muted">
          Archivo APK · Para Android · Sin suscripción
        </p>
        <div className="mt-6 rounded-xl border border-line bg-surface p-4 sm:p-5">
          <h3 className="text-xs font-semibold">Después de descargar</h3>
          <ol className="mt-4 space-y-3 text-[13px] leading-relaxed text-muted">
            <li className="flex gap-3">
              <span className="font-semibold text-ink">01</span>Abre
              Emprender.apk desde tus descargas.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-ink">02</span>Si Android lo
              solicita, autoriza a tu navegador para instalar la aplicación.
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-ink">03</span>Toca Instalar,
              abre Emprender y prepara tu negocio.
            </li>
          </ol>
        </div>
        <p className="mt-5 text-[11px] leading-relaxed text-muted">
          ¿Estás en un computador? Abre esta página desde tu Android o
          transfiere el archivo a tu dispositivo.
        </p>
      </div>
    </Dialog>
  );
}
