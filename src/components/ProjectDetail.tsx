import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/content";

function LinkButton({ href, label, icon }: { href: string | null; label: string; icon: React.ReactNode }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:border-cyan hover:text-cyan">{icon} {label}</a>
  ) : (
    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/20 px-5 py-2.5 text-sm text-muted/70">{icon} {label}: not added yet</span>
  );
}

export default function ProjectDetail({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug);
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <a href="#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan"><ArrowLeft size={16} aria-hidden /> Back to projects</a>
      {!p ? (
        <div className="mt-10">
          <h1 className="font-display text-3xl font-semibold">Project not found</h1>
          <p className="mt-3 text-muted">That project doesn't exist. Go back to the projects list and pick another one.</p>
        </div>
      ) : (
        <article className="mt-6">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>
          {p.placeholder && <p className="mt-3 text-sm text-cyan">Placeholder project: replace this with real work.</p>}
          <img src={p.image} alt={`${p.title} cover`} width={800} height={450} className="mt-8 aspect-video w-full rounded-2xl border border-line object-cover" />
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={p.live} label="Live project" icon={<ExternalLink size={16} aria-hidden />} />
            <LinkButton href={p.github} label="GitHub repository" icon={<Github size={16} aria-hidden />} />
          </div>
          <div className="mt-12 space-y-10">
            <section><h2 className="font-display text-xl font-semibold">Description</h2><p className="mt-3 max-w-prose leading-relaxed text-muted">{p.description}</p></section>
            <section>
              <h2 className="font-display text-xl font-semibold">Main technology stack</h2>
              <ul className="mt-3 flex flex-wrap gap-2">{p.stack.map((t) => <li key={t} className="rounded-full bg-accent/15 px-3 py-1.5 text-sm text-[#b9a9ff]">{t}</li>)}</ul>
            </section>
            <section><h2 className="font-display text-xl font-semibold">Challenges faced</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-muted">{p.challenges.map((c) => <li key={c}>{c}</li>)}</ul></section>
            <section><h2 className="font-display text-xl font-semibold">Potential improvements and future plans</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-muted">{p.improvements.map((c) => <li key={c}>{c}</li>)}</ul></section>
          </div>
        </article>
      )}
    </main>
  );
}
