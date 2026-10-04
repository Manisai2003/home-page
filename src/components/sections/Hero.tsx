"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import Mountains from "@/components/sections/Mountains";
import RegistrationCard from "@/components/sections/RegistrationCard";
import { HEADLINE, URLS } from "@/data/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const ySun = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yFar = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[var(--sky-top)] to-[var(--sky-bottom)]"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: ySun }}
        className="absolute bottom-[clamp(110px,17vw,240px)] left-[42%] -z-10 aspect-square w-[clamp(90px,13vw,180px)] rounded-full bg-[var(--sun)] shadow-[0_0_0_28px_var(--sun-glow)] transition-[background-color,box-shadow] duration-700"
      />
      <Mountains yFar={yFar} yMid={yMid} yNear={yNear} />

      <div className="wrap grid items-start gap-10 pb-[clamp(150px,20vw,260px)] pt-[clamp(36px,6vw,84px)] lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <div>
          <h1 id="hero-title" className="max-w-[13ch] text-[clamp(2.5rem,5.6vw,4.7rem)] tracking-[-0.01em]">
            {HEADLINE.map((word, i) => (
              <span key={word} className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.12 + i * 0.07 }}
                >
                  {word}
                </motion.span>{" "}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[46ch] text-[clamp(1.05rem,1.6vw,1.25rem)]">
            Tula&apos;s International School is a CBSE boarding school in Dehradun, Uttarakhand, where students are
            supported to excel in academics and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#register">Register now</Button>
            <Button href={URLS.virtualTour} variant="ghost" className="bg-bg">
              Take the virtual tour
            </Button>
          </div>
        </div>

        <RegistrationCard />
      </div>
    </section>
  );
}
