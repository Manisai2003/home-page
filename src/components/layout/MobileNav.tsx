import { NAV_ITEMS } from "@/data/site";

type Props = { id: string; onNavigate: () => void };

export default function MobileNav({ id, onNavigate }: Props) {
  return (
    <nav id={id} aria-label="Mobile" className="border-b border-line bg-surface px-5 pb-5 pt-2 sm:px-10 min-[1100px]:hidden">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={onNavigate}
          className="block border-b border-line py-3.5 font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
