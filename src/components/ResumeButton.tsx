import { useState } from "react";
import { Download } from "lucide-react";
import { contact } from "../data/content";

const cls = "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:border-cyan hover:text-cyan";

export default function ResumeButton() {
  const [notice, setNotice] = useState(false);
  if (contact.resume) {
    return (
      <a href={contact.resume} download className={cls}>
        <Download size={18} aria-hidden /> View / Download resume
      </a>
    );
  }
  return (
    <div>
      <button type="button" onClick={() => setNotice(true)} className={cls}>
        <Download size={18} aria-hidden /> View / Download resume
      </button>
      <p role="status" className="mt-2 text-sm text-muted">{notice ? "My resume isn't ready yet. It will be available here soon." : ""}</p>
    </div>
  );
}
