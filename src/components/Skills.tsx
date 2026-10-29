import { motion } from "motion/react";
import { Database, Monitor, Server, Wrench } from "lucide-react";
import Section from "./Section";
import { skillGroups } from "../data/content";

const icons = { monitor: Monitor, server: Server, database: Database, wrench: Wrench };

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The technologies and tools I work with, grouped by area.">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((g, gi) => {
          const Icon = icons[g.icon as keyof typeof icons];
          return (
            <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.08 }} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-cyan"><Icon size={20} aria-hidden /></span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {g.items.map((s) => (
                  <li key={s} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center">
                    <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20 font-display text-sm font-semibold text-[#b9a9ff]">{s.slice(0, 2)}</span>
                    <span className="text-xs text-muted sm:text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
