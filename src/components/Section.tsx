import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = { id: string; title: string; intro?: string; children: ReactNode };

export default function Section({ id, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
