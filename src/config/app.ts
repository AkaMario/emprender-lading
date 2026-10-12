import apkUrl from "../assets/Emprender.apk?url";

/** URL de distribución centralizada; el APK no se carga hasta solicitar la descarga. */
export const appConfig = {
  name: "Emprender",
  apkUrl: import.meta.env.VITE_APK_URL || apkUrl,
  apkFilename: "Emprender.apk",
} as const;
