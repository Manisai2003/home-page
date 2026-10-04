"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/animation/ThemeToggle";
import Button from "@/components/ui/Button";
import Crest from "@/components/ui/Crest";
import MobileNav from "@/components/layout/MobileNav";
import { NAV_ITEMS, URLS } from "@/data/site";

const MENU_ID = "mobile-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-[var(--nav-bg)] backdrop-blur-md transition-colors duration-500">
      <div className="wrap flex min-h-[72px] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 font-display text-lg leading-tight" aria-label="Tula's International School, home">
          <Crest />
          <span>
            Tula&apos;s International
            <br />
            School
          </span>
        </a>

        <nav aria-label="Primary" className="hidden gap-[clamp(14px,1.6vw,26px)] text-[0.95rem] font-medium min-[1100px]:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-2 after:absolute after:inset-x-0 after:bottom-0.5 after:h-[3px] after:origin-left after:scale-x-0 after:rounded after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button href={URLS.admission} className="hidden !min-h-11 sm:inline-flex">
            Apply now
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface min-[1100px]:hidden"
          >
            <span className="relative block h-0.5 w-5 rounded bg-current">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${open ? "top-0 rotate-45" : "-top-1.5"}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${open ? "top-0 -rotate-45" : "top-1.5"}`} />
            </span>
          </button>
        </div>
      </div>
      {open && <MobileNav id={MENU_ID} onNavigate={() => setOpen(false)} />}
    </header>
  );
}
