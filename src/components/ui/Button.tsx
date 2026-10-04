import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "light" | "line";

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-transparent px-6 text-base font-semibold transition-[transform,background-color,color,border-color] duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-45 disabled:active:scale-100";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-crimson text-white hover:bg-crimson-dark",
  ghost: "border-ink text-ink hover:bg-ink hover:text-bg",
  light: "bg-white text-crimson hover:bg-[#f6e3e7]",
  line: "border-white text-white hover:bg-white hover:text-crimson",
};

type Common = { variant?: Variant; className?: string; children: ReactNode };
type AnchorProps = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href">;
type NativeProps = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

/** Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button({ variant = "primary", className = "", children, ...rest }: AnchorProps | NativeProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
