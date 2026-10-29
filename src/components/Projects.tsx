import { motion } from "motion/react";
import Section from "./Section";
import { projects, type Project } from "../data/content";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }} className="group glass flex flex-col overflow-hidden rounded-2xl">
      <div className="aspect-video overflow-hidden bg-ink">
        <img src={p.image} alt={`${p.title} cover`} loading="lazy" width={800} height={450} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((t) => <li key={t} className="rounded-full bg-accent/15 px-2.5 py-1 text-xs text-[#b9a9ff]">{t}</li>)}
        </ul>
        <a href={`#/projects/${p.slug}`} className="mt-5 inline-flex w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-medium transition hover:brightness-110">View details</a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Selected work. Open any project for its stack, links, challenges and future plans.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
      </div>
    </Section>
  );
}
