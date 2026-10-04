"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Mode = "default" | "link" | "text";

const SIZE: Record<Mode, number> = { default: 34, link: 60, text: 12 };
const MODE_STYLE: Record<Mode, string> = {
  default: "",
  link: "bg-[color-mix(in_srgb,var(--accent)_18%,transparent)]",
  text: "bg-accent",
};

const TEXT_INPUTS = "input[type=text], input[type=tel], input[type=email]";
const INTERACTIVE = "a, button, select, label";

/** Ring that follows the mouse and grows over interactive elements. Fine pointers only. */
export default function CustomCursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useReducedMotion();
  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const enabled = finePointer && !reduceMotion;

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;
      setMode(target.closest(TEXT_INPUTS) ? "text" : target.closest(INTERACTIVE) ? "link" : "default");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[150] rounded-full border-2 border-accent ${MODE_STYLE[mode]}`}
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: SIZE[mode], height: SIZE[mode], opacity: visible ? 0.9 : 0 }}
      transition={{ duration: 0.25 }}
    />
  );
}
