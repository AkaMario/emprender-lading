import type { ComponentPropsWithoutRef } from "react";

export function Container({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`mx-auto w-[calc(100%-2rem)] max-w-[1200px] sm:w-[calc(100%-3rem)] xl:w-[calc(100%-5rem)] ${className}`}
      {...props}
    />
  );
}
