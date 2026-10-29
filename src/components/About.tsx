import Section from "./Section";
import { about } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-prose space-y-4 leading-relaxed text-muted">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <ul className="space-y-4">
          {about.facts.map((f) => (
            <li key={f.label} className={`rounded-2xl p-5 ${f.placeholder ? "border border-dashed border-white/20" : "glass"}`}>
              <p className="font-medium">{f.label}</p>
              <p className="mt-1 text-sm text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
