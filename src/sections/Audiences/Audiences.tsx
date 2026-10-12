import { audiences } from "../../content/landing";
import { IconTile } from "../../components/ui/IconTile";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function Audiences() {
  return (
    <Section id="para-quien">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:gap-12">
        <SectionHeading
          eyebrow="CINCO TIPOS DE EMPRENDIMIENTO"
          title="Elige el modelo de tu negocio."
        />
        <p className="max-w-[620px] text-sm leading-[1.8] text-muted lg:max-w-[370px]">
          Al configurar la app eliges un solo tipo para tu base de datos. Cada
          modelo tiene su catálogo y sus operaciones; la elección queda guardada
          y no se puede cambiar desde la app.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-5">
        {audiences.map((audience) => (
          <article
            className="flex min-w-0 scroll-mt-24 flex-col items-start rounded-card border border-line/60 bg-white p-6 sm:min-h-[290px]"
            key={audience.id}
            id={audience.id}
          >
            <IconTile name={audience.icon} />
            <h3 className="mt-5 text-base font-semibold tracking-[-.4px]">
              {audience.title}
            </h3>
            <p className="mt-2.5 text-sm leading-[1.8] text-muted">
              {audience.description}
            </p>
            <span className="mt-auto pt-5 text-xs leading-relaxed text-muted">
              {audience.detail}
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}
