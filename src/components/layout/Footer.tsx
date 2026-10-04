import Crest from "@/components/ui/Crest";
import { ADDRESS, EMAIL, FOOTER_LINKS, HELPLINE, HELPLINE_HREF, SOCIAL_LINKS } from "@/data/site";

const linkCls = "inline-block py-1.5 text-[#d6d1de] hover:text-white hover:underline";
const headCls = "mb-3.5 font-body text-base font-bold text-white";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] pb-8 pt-14 text-[#e9e6ee]">
      <div className="wrap">
        <div className="grid gap-9 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 font-display text-lg text-white">
              <Crest />
              <span>Tula&apos;s International School</span>
            </div>
            <address className="not-italic text-[#d6d1de]">
              {ADDRESS}
              <br />
              <a href={HELPLINE_HREF} className={linkCls}>{HELPLINE}</a>
              <br />
              <a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a>
            </address>
          </div>

          <nav aria-labelledby="quick-links-title" id="quick-links">
            <h2 id="quick-links-title" className={headCls}>Quick links</h2>
            <ul>
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}><a href={l.href} className={linkCls}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social media">
            <h2 className={headCls}>Follow TIS</h2>
            <ul>
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}><a href={l.href} className={linkCls}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-white/15 pt-5 text-sm text-[#b4aebf]">
          Copyright &copy; 2026 Tula&apos;s International School, Dehradun | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
