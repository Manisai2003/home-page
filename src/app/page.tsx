import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Hero from "@/components/sections/Hero";
import LifeAtTis from "@/components/sections/LifeAtTis";
import Stages from "@/components/sections/Stages";
import Visit from "@/components/sections/Visit";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="top">
        <Hero />
        <Stages />
        <LifeAtTis />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
