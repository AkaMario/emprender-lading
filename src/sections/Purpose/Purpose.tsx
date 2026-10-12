import { principles } from "../../content/landing";
import { IconTile } from "../../components/ui/IconTile";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function Purpose() {
  return (
    <Section className="bg-surface-alt" id="por-que-gratis">
      <SectionHeading
        centered
        eyebrow="PROPÓSITO Y COMPROMISO"
        title="Empezar a emprender no debería costarte más."
        description="Creemos que dar los primeros pasos con un negocio no debe significar atarse a costos fijos ni comisiones sobre tus ventas. Una herramienta directa, sin letra chica ni suscripciones forzadas."
      />
      <div className="mx-auto mt-8 grid max-w-[1060px] gap-4 md:mt-10 lg:grid-cols-3 lg:gap-5">
        {principles.map((principle) => (
          <article
            className="min-w-0 rounded-card border border-line/60 bg-white p-6 lg:p-7"
            key={principle.title}
          >
            <IconTile name={principle.icon} />
            <h3 className="mt-5 text-base font-semibold tracking-[-.3px]">
              {principle.title}
            </h3>
            <p className="mt-2.5 text-sm leading-[1.8] text-muted">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
