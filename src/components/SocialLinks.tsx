import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { contact } from "../data/content";

const all = [
  { label: "GitHub", href: contact.github, Icon: Github },
  { label: "LinkedIn", href: contact.linkedin, Icon: Linkedin },
  { label: "Facebook", href: contact.facebook, Icon: Facebook },
  { label: "Instagram", href: contact.instagram, Icon: Instagram },
  { label: "YouTube", href: contact.youtube, Icon: Youtube },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {all.filter((s) => s.href).map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href!} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:border-cyan hover:text-cyan">
            <Icon size={20} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
