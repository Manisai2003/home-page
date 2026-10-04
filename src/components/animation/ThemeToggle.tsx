"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const useMounted = () => useSyncExternalStore(subscribe, () => true, () => false);

/** Animated switch between light and dark themes. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-pressed={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative h-9 w-[62px] shrink-0 rounded-full border border-line bg-surface"
    >
      <motion.span
        className="absolute left-[3px] top-[3px] grid h-7 w-7 place-items-center rounded-full"
        animate={{ x: dark ? 26 : 0, backgroundColor: dark ? "#ECE6F5" : "#F0B323" }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      >
        <motion.svg
          viewBox="0 0 24 24"
          className="absolute h-4 w-4"
          fill="none"
          stroke="#1D1A22"
          strokeWidth="2.2"
          strokeLinecap="round"
          animate={{ opacity: dark ? 0 : 1, rotate: dark ? 90 : 0, scale: dark ? 0.5 : 1 }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 24 24"
          className="absolute h-4 w-4"
          fill="#1D1A22"
          animate={{ opacity: dark ? 1 : 0, rotate: dark ? 0 : -90, scale: dark ? 1 : 0.5 }}
        >
          <path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5z" />
        </motion.svg>
      </motion.span>
    </button>
  );
}
