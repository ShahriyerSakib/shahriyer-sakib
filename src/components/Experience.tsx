import { Briefcase } from "lucide-react";
import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Professional work experience isn't added yet. This is the team experience I have so far.">
      <ul className="space-y-5">
        {experience.map((x) => (
          <li key={x.role} className="glass flex gap-4 rounded-2xl p-6">
            <Briefcase className="mt-1 shrink-0 text-cyan" aria-hidden />
            <div>
              <h3 className="font-display text-lg font-semibold">{x.role}</h3>
              <p className="text-muted">{x.org}</p>
              <p className="mt-1 text-sm text-muted/80">{x.period}</p>
              <p className="mt-3 max-w-prose text-sm text-muted">{x.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
