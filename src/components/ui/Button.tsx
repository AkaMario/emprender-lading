import type { ComponentPropsWithoutRef } from "react";

const variants = {
  primary: "border-transparent bg-brand text-white shadow-sm hover:bg-zinc-800",
  secondary:
    "border-line bg-white text-ink hover:border-zinc-300 hover:bg-zinc-50",
  light: "border-transparent bg-white text-ink hover:bg-zinc-200",
} as const;

const sizes = {
  small: "min-h-11 gap-2 px-4 py-2.5 text-[13px]",
  regular: "min-h-12 gap-2.5 px-6 py-3.5 text-sm",
} as const;

const buttonBase =
  "inline-flex items-center justify-center rounded-lg border font-semibold leading-snug transition-colors disabled:cursor-not-allowed disabled:opacity-40";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  variant = "primary",
  size = "regular",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${buttonBase} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
