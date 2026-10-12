type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`min-w-0 max-w-[700px] ${centered ? "mx-auto text-center" : ""}`}
    >
      <p className="text-[11px] leading-relaxed font-bold tracking-[1.4px] text-muted uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[clamp(1.625rem,3.5vw,2.25rem)] leading-[1.24] font-semibold tracking-[-.8px] md:tracking-[-1.3px]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-[640px] text-[15px] leading-[1.8] text-muted ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
