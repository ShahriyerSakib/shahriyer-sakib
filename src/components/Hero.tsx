import { motion } from "motion/react";
import { profile } from "../data/content";
import ResumeButton from "./ResumeButton";
import SocialLinks from "./SocialLinks";

const words = profile.headline.split(" ");

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div aria-hidden className="drift absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-accent/25 blur-[110px]" />
      <div aria-hidden className="drift absolute -right-16 top-40 -z-10 h-72 w-72 rounded-full bg-cyan/15 blur-[110px]" style={{ animationDelay: "-6s" }} />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-sm text-cyan sm:text-base">
            {profile.designation}
          </motion.p>

          <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.6 }} className="mt-8 space-y-6">
            <div className="flex flex-wrap items-start gap-4">
              <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-medium shadow-[0_0_30px_-6px_var(--color-accent)] transition hover:brightness-110">View my work</a>
              <ResumeButton />
            </div>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative">
          <div aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/50 to-cyan/30 opacity-40 blur-2xl" />
          <img src="/profile.png" alt={`Portrait of ${profile.name}`} width={1672} height={940} className="relative aspect-[4/5] w-full rounded-3xl border border-line object-cover object-[68%_center] sm:aspect-[4/4.2]" fetchPriority="high" />
        </motion.div>
      </div>
    </section>
  );
}
