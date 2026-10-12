import { features } from "../../content/landing";
import { IconTile } from "../../components/ui/IconTile";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function Features() {
  return (
    <Section id="caracteristicas">
      <SectionHeading
        eyebrow="LO ESENCIAL, BIEN HECHO"
        title="Todo lo que tu comercio necesita. Nada de lo que te estorbe."
        description="Menos fricción, más claridad. Herramientas pensadas para simplificar cada transacción y poner el foco donde importa: en tu negocio."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-5">
        {features.map((feature) => (
          <article
            className="flex min-w-0 flex-col items-start rounded-card border border-line/60 bg-white p-6 sm:min-h-[290px] lg:p-7"
            key={feature.title}
          >
            <IconTile name={feature.icon} />
            <h3 className="mt-5 text-base font-semibold tracking-[-.4px]">
              {feature.title}
            </h3>
            <p className="mt-2.5 text-sm leading-[1.8] text-muted">
              {feature.description}
            </p>
            <span className="mt-auto pt-5 text-[10px] leading-relaxed font-semibold tracking-[.6px] text-muted">
              {feature.detail}
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}
