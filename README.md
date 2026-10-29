# Md. Shahriyer Hossain: Portfolio

React + TypeScript + Vite + Tailwind CSS v4 + Motion (`motion/react`) + Lucide.

## Setup
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Edit content
All text, skills, projects, education, experience, and links live in `src/data/content.ts`.

## Requirements coverage
- Responsive navbar with section links and a mobile menu.
- Professional designation, supplied profile photo, hero introduction, and resume button.
- Social profile buttons and direct email/phone/optional WhatsApp contact links.
- About section covering the learning journey, preferred work, and an editable personal-interests prompt.
- Graphical skills groups, current CSE education, and university team-project experience.
- Three project cards with cover images and dedicated detail views for technology stack, description, live/repository links, challenges, and future improvements.
- Responsive dark UI, reduced-motion CSS support, SEO metadata, and Netlify build configuration.

Before publishing, replace the marked personal-interest prompt with your real hobbies, verify your contact/social URLs, add real screenshots and accurate project challenge notes, and add a resume PDF when ready. The portfolio itself is the third featured project until you replace it with another completed project. Links that are not yet known are intentionally left unavailable rather than fabricated.

Anything set to `null` (resume or project links) is rendered as an unavailable/not-yet-added state rather than a fake link.
- Resume: put `resume.pdf` in `public/`, then set `contact.resume = "/resume.pdf"`.
- Project screenshots: put images in `public/projects/` and set `image: "/projects/name.png"`.
- Update the `og:image` URL in `index.html` to your real domain.

## Deploy
**GitHub:** `git init && git add . && git commit -m "Initial commit"`, create a repo, then `git remote add origin <url> && git push -u origin main`.

**Netlify:** New site from Git, pick the repo. `netlify.toml` already sets build command `npm run build` and publish directory `dist`. Or run `npx netlify deploy --prod --dir=dist`.

## Notes
- Project detail pages use hash routes (`#/projects/<slug>`), so no server rewrites are needed on Netlify.
- Add projects in `src/data/content.ts` (`projects`). Each needs a cover image in `public/projects/`.
- Resume: when ready, add `public/resume.pdf` and set `contact.resume = "/resume.pdf"`. Until then the button shows a "not ready yet" message.
