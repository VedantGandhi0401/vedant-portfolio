import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { softwareEngineerProfile } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <Hero profile={softwareEngineerProfile} />
      <About profile={softwareEngineerProfile} />
      <Experience profile={softwareEngineerProfile} />
      <Projects profile={softwareEngineerProfile} />
      <Skills profile={softwareEngineerProfile} />
      <Resume profile={softwareEngineerProfile} />
      <Contact />
      <Footer />
    </main>
  );
}
