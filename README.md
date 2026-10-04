# Tula's International School (TIS) - Homepage Redesign

A modern, animated redesign of the TIS admissions homepage ([admission.tis.edu.in](https://admission.tis.edu.in/)), focused on conversion, fluid animation and mobile responsiveness. The registration form sits in the hero so the main action is visible straight away.

## Live Demo
- **Live URL:** _add your Vercel / Netlify link here_
- **Repository:** _add your GitHub repo link here_

## Tech Stack
- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS with CSS-variable theme tokens
- **Animation:** Framer Motion
- **Theme:** next-themes
- **Fonts:** Young Serif and Figtree via `@fontsource` (self-hosted, no network fetch at build time)
- **Deployment:** Vercel

## Standout Features Implemented
1. **Custom cursor** (`animation/CustomCursor`): a spring-driven ring that grows over links and buttons and shrinks over text fields. Hidden on touch devices (`pointer: coarse`) and when reduced motion is requested.
2. **Scroll-triggered reveals** (`animation/Reveal`): staggered fade-and-lift using `whileInView` with `viewport={{ once: true }}`, 0.5s each.
3. **Animated dark/light theme switcher** (`animation/ThemeToggle`): spring-animated toggle; the hero scene changes from day to dusk (the sun becomes a moon). Follows the system setting and remembers the choice.
4. **Scroll progress bar** (`animation/ScrollProgress`): `useScroll` smoothed with `useSpring`.

Also: hero mountain parallax (`useScroll` + `useTransform`), and a registration form with validation and an OTP flow.

> The OTP step is a **demo**: any 6 digits verify and nothing is sent to a server. Replace `sendOtp` / `onSubmit` in `RegistrationCard.tsx` with your real API calls.

## Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## Deploy
Import the repo in Vercel (framework preset: Next.js) and deploy. No environment variables are needed.

## Component Architecture Overview
```
src/
├── app/                  # layout.tsx, page.tsx, globals.css (theme tokens)
├── components/
│   ├── ui/               # Button, Crest
│   ├── layout/           # TopBar, Navbar, MobileNav, Footer
│   ├── sections/         # Hero, Mountains, RegistrationCard, Stages, LifeAtTis, Visit
│   ├── animation/        # ScrollProgress, CustomCursor, ThemeToggle, Reveal
│   └── Providers.tsx     # ThemeProvider + MotionConfig (reducedMotion="user")
├── hooks/                # useMediaQuery, useOtpCooldown
├── data/                 # site.ts: nav, stages, links, contact details
└── lib/                  # validators.ts: name, mobile and email checks
```

## Notes for Review
- Static content lives in `data/site.ts`; components stay presentational.
- Colours come from CSS variables in `globals.css` and are mapped in `tailwind.config.ts`, so the whole page follows the theme.
- `useMediaQuery` uses `useSyncExternalStore` so server and client markup match (no hydration warnings).
- Animations only use `transform` and `opacity` for smooth 60 FPS.

## Brand Identity Retained
- Crimson (`#B90124`) and yellow accents, headline, nav labels, form fields, application stages text, address, contact details and footer links from the original site.
- The crest is a placeholder; swap in the official TIS logo from tis.edu.in.
- The "E-Prospectus" footer link is omitted because its `href` is `undefined` on the live site.
# home-page
