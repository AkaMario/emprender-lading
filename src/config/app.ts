/** URL de distribución centralizada; el APK se descarga desde GitHub Releases. */
export const appConfig = {
  name: "Emprender",
  apkUrl:
    import.meta.env.VITE_APK_URL ||
    "https://github.com/AkaMario/emprender-lading/releases/download/app/Emprender.apk",
  apkFilename: "Emprender.apk",
} as const;
