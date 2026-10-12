import type { ComponentPropsWithoutRef } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section className={`py-14 md:py-20 lg:py-24 ${className}`} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
