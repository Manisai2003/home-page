"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const TAGS = { div: motion.div, li: motion.li } as const;

type Props = {
  as?: keyof typeof TAGS;
  /** Position in a staggered group: each step adds 90ms. */
  index?: number;
  className?: string;
  children: ReactNode;
};

/** Fades and lifts its children into view once, when they enter the viewport. */
export default function Reveal({ as = "div", index = 0, className, children }: Props) {
  const Tag = TAGS[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.09 }}
    >
      {children}
    </Tag>
  );
}
