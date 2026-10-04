import Reveal from "@/components/animation/Reveal";
import { LIFE_ROWS, URLS } from "@/data/site";

export default function LifeAtTis() {
  return (
    <section aria-labelledby="life-title" className="py-[clamp(64px,9vw,120px)]">
      <div className="wrap">
        <Reveal>
          <h2 id="life-title" className="max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)]">Where your child can excel</h2>
          <p className="mt-4 max-w-[52ch] text-muted">A nurturing environment, built to bring out every student&apos;s potential.</p>
        </Reveal>

        <ul className="mt-10 border-t border-line">
          {LIFE_ROWS.map((row, i) => (
            <Reveal
              key={row.title}
              as="li"
              index={i + 1}
              className="relative isolate overflow-hidden border-b border-line before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-surface before:transition-transform before:duration-500 hover:before:scale-y-100 focus-within:before:scale-y-100"
            >
              <a href={URLS.home} className="group grid gap-2 px-1 py-7 md:grid-cols-[1.1fr_1.2fr_auto] md:items-center md:gap-8 md:px-5 md:py-9">
                <h3 className="text-[clamp(1.7rem,3.4vw,2.6rem)] transition-transform duration-500 md:group-hover:translate-x-2">{row.title}</h3>
                <p className="max-w-[46ch] text-muted">{row.text}</p>
                <span className="font-semibold text-accent">{row.cta}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
