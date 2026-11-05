import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dataScientistProfile, softwareEngineerProfile, type ProfileData } from "@/data";
import { siteConfig } from "@/data";
import { siteUrl } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const profiles: Record<string, ProfileData> = {
  "data-scientist": dataScientistProfile,
  "software-engineer": softwareEngineerProfile,
};

type Props = {
  params: Promise<{ role: string }>;
};

export async function generateStaticParams() {
  return Object.keys(profiles).map((role) => ({ role }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { role } = await params;
  const profile = profiles[role];
  if (!profile) return {};

  const title = `${siteConfig.name} | ${profile.role}`;
  const description = profile.description;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    robots: {
      // Keep role-specific pages out of search engine indexes
      // so only the main / page is discoverable publicly.
      index: false,
      follow: false,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/resume/${role}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function RolePage({ params }: Props) {
  const { role } = await params;
  const profile = profiles[role];

  if (!profile) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience profile={profile} />
      <Projects profile={profile} />
      <Skills profile={profile} />
      <Resume profile={profile} />
      <Contact />
      <Footer />
    </main>
  );
}
