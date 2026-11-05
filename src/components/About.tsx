import { dataScientistProfile, type ProfileData } from "@/data";
import { SectionHeading } from "./SectionHeading";

type Props = { profile?: ProfileData };

export default function About({ profile = dataScientistProfile }: Props) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="About" />

        <div className="max-w-2xl mt-8">
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {profile.about}
          </p>
        </div>
      </div>
    </section>
  );
}
