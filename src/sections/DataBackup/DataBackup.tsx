import { dataPractices } from "../../content/landing";
import { IconTile } from "../../components/ui/IconTile";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function DataBackup() {
  return (
    <Section className="bg-surface-alt" id="datos-y-respaldo">
      <SectionHeading
        centered
        eyebrow="DATOS Y RESPALDO"
        title="Tu operación se guarda en tu dispositivo."
        description="Emprender funciona con datos locales. Guarda tus respaldos manualmente para conservar una copia antes de cambiar de dispositivo o desinstalar la aplicación."
      />
      <div className="mx-auto mt-8 grid max-w-[1060px] gap-4 md:mt-10 lg:grid-cols-3 lg:gap-5">
        {dataPractices.map((practice) => (
          <article
            className="min-w-0 rounded-card border border-line/60 bg-white p-6 lg:p-7"
            key={practice.title}
          >
            <IconTile name={practice.icon} />
            <h3 className="mt-5 text-base font-semibold tracking-[-.3px]">
              {practice.title}
            </h3>
            <p className="mt-2.5 text-sm leading-[1.8] text-muted">
              {practice.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
