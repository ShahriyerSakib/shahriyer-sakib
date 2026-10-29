import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-6xl sm:inset-x-6 sm:top-4">
      <div className="glass-header overflow-hidden rounded-2xl">
        <nav aria-label="Primary" className="flex h-14 items-center justify-between px-4 sm:px-5">
          <a href="#top" className="font-display text-lg font-semibold">
            {profile.shortName}<span className="text-cyan">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, -1).map((l) => (
              <li key={l.id} className="relative">
                {active === l.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <a href={`#${l.id}`} className={`relative block px-4 py-2 text-sm transition-colors ${active === l.id ? "text-text" : "text-muted hover:text-text"}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium shadow-[0_0_24px_-6px_var(--color-accent)] transition hover:brightness-110 lg:inline-block">
            Contact me
          </a>

          <button
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 px-3 pb-3 pt-2 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 ${l.id === "contact" ? "mt-2 bg-accent text-center font-medium" : active === l.id ? "bg-white/10 text-text" : "text-muted hover:bg-white/5 hover:text-text"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </header>
  );
}
