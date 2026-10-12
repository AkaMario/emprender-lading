import { installationSteps } from "../../content/landing";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <Section className="border-t border-line/60 bg-white" id="como-funciona">
      <SectionHeading
        centered
        eyebrow="DEL ARCHIVO A TU MOSTRADOR"
        title="Empezar es así de sencillo."
        description="Tu Android y las ganas de hacer crecer tu negocio. Eso es lo primero."
      />
      <ol className="mx-auto mt-8 grid max-w-[1000px] gap-8 md:mt-10 md:grid-cols-3 lg:gap-14">
        {installationSteps.map((step) => (
          <li key={step.number}>
            <span className="mb-5 block border-b border-line pb-4 text-sm text-zinc-400 tabular-nums">
              {step.number}
            </span>
            <h3 className="text-base font-semibold tracking-[-.4px]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.8] text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
