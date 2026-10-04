import Reveal from "@/components/animation/Reveal";
import Button from "@/components/ui/Button";
import { ADDRESS, EMAIL, HELPLINE, HELPLINE_HREF, URLS } from "@/data/site";

const linkCls = "underline decoration-2 underline-offset-[3px]";

export default function Visit() {
  return (
    <section aria-labelledby="visit-title" className="relative overflow-hidden bg-crimson py-[clamp(64px,9vw,110px)] text-white">
      <svg viewBox="0 0 1440 400" aria-hidden="true" className="pointer-events-none absolute -bottom-px -right-10 w-[min(720px,90%)] opacity-[0.14]">
        <path fill="#fff" d="M0 220 120 160 210 205 330 120 450 190 560 140 690 210 820 110 950 185 1070 135 1200 200 1320 150 1440 190V400H0Z" />
      </svg>

      <div className="wrap relative grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
        <Reveal>
          <h2 id="visit-title" className="max-w-[14ch] text-[clamp(2rem,4vw,3.2rem)]">Visit us in Dehradun</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={URLS.virtualTour} variant="light">Take the virtual tour</Button>
            <Button href={URLS.directions} variant="line">Get directions</Button>
          </div>
        </Reveal>

        <Reveal index={2}>
          <dl className="grid gap-4">
            <div><dt className="text-[0.95rem] font-bold opacity-85">Address</dt><dd className="mt-0.5 text-[1.1rem]">{ADDRESS}</dd></div>
            <div><dt className="text-[0.95rem] font-bold opacity-85">Admission helpline</dt><dd className="mt-0.5 text-[1.1rem]"><a className={linkCls} href={HELPLINE_HREF}>{HELPLINE}</a></dd></div>
            <div><dt className="text-[0.95rem] font-bold opacity-85">Email</dt><dd className="mt-0.5 text-[1.1rem]"><a className={linkCls} href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
