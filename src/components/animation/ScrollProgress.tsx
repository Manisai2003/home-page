"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Reading-progress bar fixed to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[120] h-1 origin-left bg-gradient-to-r from-crimson to-gold"
      style={{ scaleX }}
    />
  );
}
