import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { education } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Educational qualification">
      <ul className="space-y-5">
        {education.map((e) => (
          <li key={e.degree} className="glass flex gap-4 rounded-2xl p-6">
            <GraduationCap className="mt-1 shrink-0 text-cyan" aria-hidden />
            <div>
              <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
              <p className="text-muted">{e.school} · {e.status}</p>
              <p className="mt-1 text-sm text-muted/80">{e.period}</p>
              <p className="mt-3 max-w-prose text-sm text-muted">{e.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
