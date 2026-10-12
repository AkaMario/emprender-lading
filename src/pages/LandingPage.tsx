import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../sections/Hero/Hero";
import { Features } from "../sections/Features/Features";
import { Purpose } from "../sections/Purpose/Purpose";
import { Audiences } from "../sections/Audiences/Audiences";
import { HowItWorks } from "../sections/HowItWorks/HowItWorks";
import { Faq } from "../sections/Faq/Faq";
import { DownloadCta } from "../sections/DownloadCta/DownloadCta";
import { DownloadDialog } from "../features/download/DownloadDialog";

export function LandingPage() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const openDownload = () => setDownloadOpen(true);
  const closeDialog = () => setDownloadOpen(false);

  return (
    <>
      <a
        href="#contenido"
        className="fixed top-3 left-4 z-50 -translate-y-24 rounded-lg border border-ink bg-white px-5 py-3 focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Header onDownload={openDownload} />
      <main id="contenido">
        <Hero onDownload={openDownload} />
        <Features />
        <Purpose />
        <Audiences />
        <HowItWorks />
        <Faq />
        <DownloadCta onDownload={openDownload} />
      </main>
      <Footer onDownload={openDownload} />
      <DownloadDialog open={downloadOpen} onClose={closeDialog} />
    </>
  );
}
