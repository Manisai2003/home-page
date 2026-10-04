import { motion, type MotionValue } from "framer-motion";

type Props = { yFar: MotionValue<number>; yMid: MotionValue<number>; yNear: MotionValue<number> };

const SVG_CLS = "absolute bottom-0 left-0 h-full w-full";
const PATH_CLS = "transition-[fill] duration-700";

/** Three ridge silhouettes. Colours come from CSS variables, so they follow the theme. */
export default function Mountains({ yFar, yMid, yNear }: Props) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[clamp(170px,30vw,400px)]">
      <motion.svg viewBox="0 0 1440 400" preserveAspectRatio="none" className={SVG_CLS} style={{ y: yFar }}>
        <path className={`${PATH_CLS} fill-[color:var(--ridge-far)]`} d="M0 220 120 160 210 205 330 120 450 190 560 140 690 210 820 110 950 185 1070 135 1200 200 1320 150 1440 190V400H0Z" />
      </motion.svg>
      <motion.svg viewBox="0 0 1440 400" preserveAspectRatio="none" className={SVG_CLS} style={{ y: yMid }}>
        <path className={`${PATH_CLS} fill-[color:var(--ridge-mid)]`} d="M0 280 100 235 220 270 360 200 480 262 610 215 760 285 900 225 1040 272 1180 220 1320 268 1440 240V400H0Z" />
      </motion.svg>
      <motion.svg viewBox="0 0 1440 400" preserveAspectRatio="none" className={SVG_CLS} style={{ y: yNear }}>
        <path className={`${PATH_CLS} fill-[color:var(--ridge-near)]`} d="M0 340 140 305 280 335 430 290 590 338 740 300 900 342 1050 304 1210 340 1340 312 1440 330V400H0Z" />
      </motion.svg>
    </div>
  );
}
