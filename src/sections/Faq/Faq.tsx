import { faqs } from "../../content/landing";
import { Icon } from "../../components/ui/Icon";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";

export function Faq() {
  return (
    <Section className="bg-surface-alt" id="preguntas">
      <SectionHeading
        centered
        eyebrow="DUDAS RESUELTAS"
        title="Preguntas frecuentes"
        description="Conoce cómo se registran los pagos, dónde se guardan tus datos y qué opciones ofrece cada modelo."
      />
      <div className="mx-auto mt-8 grid max-w-[850px] gap-3 md:mt-10">
        {faqs.map((faq) => (
          <details
            name="emprender-faq"
            className="group rounded-lg border border-line/70 bg-white"
            key={faq.question}
          >
            <summary className="flex min-h-14 list-none items-center justify-between gap-4 px-4 py-5 text-sm leading-relaxed font-medium sm:px-6">
              {faq.question}
              <Icon
                name="chevron"
                size={17}
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="max-w-[760px] px-4 pt-0 pb-6 text-sm leading-[1.8] text-muted sm:px-6">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
