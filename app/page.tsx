import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1f2421] text-[#f3f7f4] relative selection:bg-[#49a078] selection:text-[#1f2421]">
      <Preloader />
      <Navbar />
      <Hero />
      <Statement />
      <Philosophy />
      <Services />
      <TechStack />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
