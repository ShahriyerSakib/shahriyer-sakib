import { Mail, MessageCircle, Phone } from "lucide-react";
import Section from "./Section";
import SocialLinks from "./SocialLinks";
import { contact } from "../data/content";

const items = [
  { label: "Email", value: contact.email, href: contact.email ? `mailto:${contact.email}` : null, Icon: Mail, external: false },
  { label: "Phone", value: contact.phone, href: contact.phone ? `tel:${contact.phone}` : null, Icon: Phone, external: false },
  { label: "WhatsApp", value: contact.whatsapp ? `+${contact.whatsapp}` : null, href: contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : null, Icon: MessageCircle, external: true },
];

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" intro="Reach me directly by email, phone or WhatsApp.">
      <ul className="grid gap-4 sm:grid-cols-3">
        {items.filter((i) => i.href).map(({ label, value, href, Icon, external }) => (
          <li key={label}>
            <a href={href!} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="glass flex h-full items-center gap-4 rounded-2xl p-5 transition hover:border-accent">
              <Icon className="shrink-0 text-cyan" aria-hidden />
              <span className="min-w-0"><span className="block font-medium">{label}</span><span className="block truncate text-sm text-muted">{value}</span></span>
            </a>
          </li>
        ))}
      </ul>
      <SocialLinks className="mt-8" />
    </Section>
  );
}
