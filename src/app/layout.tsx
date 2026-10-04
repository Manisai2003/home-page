import type { Metadata } from "next";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "@fontsource/figtree/700.css";
import "@fontsource/young-serif/400.css";
import "./globals.css";
import CustomCursor from "@/components/animation/CustomCursor";
import ScrollProgress from "@/components/animation/ScrollProgress";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Tula's International School, Dehradun | Admissions",
  description:
    "Unlock your child's potential at Tula's International School, Dehradun. A CBSE boarding school in Uttarakhand with world-class education, state-of-the-art facilities and a nurturing environment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <a
            href="#register"
            className="absolute -top-20 left-3 z-[200] rounded-lg bg-crimson px-4 py-2.5 text-white focus:top-3"
          >
            Skip to registration
          </a>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
