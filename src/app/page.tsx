import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <Hero data={profile} />
        <About data={profile} />
        <Projects data={profile} />
        <Experience data={profile} />
        <Achievements data={profile} />
        <Contact data={profile} />
      </main>
      <Footer data={profile} />
    </div>
  );
}
