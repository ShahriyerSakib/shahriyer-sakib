import { profile } from "../data/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-muted">
      <SocialLinks className="mb-5 justify-center" />
      <p>© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
