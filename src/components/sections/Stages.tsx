import Reveal from "@/components/animation/Reveal";
import { STAGES } from "@/data/site";

/** Offsets make the four steps climb from left to right on large screens. */
const CLIMB = ["lg:mt-[90px]", "lg:mt-[60px]", "lg:mt-[30px]", "lg:mt-0"];

export default function Stages() {
  return (
    <section id="stages" aria-labelledby="stages-title" className="bg-ridge-near py-[clamp(64px,9vw,120px)] text-[#f3f5f7] transition-colors duration-700">
      <div className="wrap">
        <Reveal>
          <h2 id="stages-title" className="max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)]">Application stages</h2>
          <p className="mt-4 max-w-[52ch] opacity-85">Four steps take you from registration to the interview.</p>
        </Reveal>

        <ol className="mt-12 grid gap-4 lg:grid-cols-4 lg:items-start lg:gap-5">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.title} as="li" index={i + 1} className={`rounded-2xl border border-white/20 bg-white/[0.06] p-6 ${CLIMB[i]}`}>
              <span className="block font-display text-[2.6rem] leading-none text-gold">{i + 1}</span>
              <h3 className="mt-3.5 text-[1.3rem]">{stage.title}</h3>
              <p className="mt-2.5 opacity-90">{stage.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
