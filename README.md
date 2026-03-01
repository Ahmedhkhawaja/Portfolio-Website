## Ahmed Hassan Khawaja — Portfolio

Next.js (App Router) + TypeScript portfolio with a lavender-forward theme system, fast project pages, and direct contact links (no email-sending form).

### Initial setup (commands)

Run these commands to create the project and install required packages/components:

```bash
# create next app
npx create-next-app@latest ahmed-portfolio --ts --app --eslint --tailwind --src-dir --import-alias "@/*"
cd ahmed-portfolio

# required packages
npm i next-themes framer-motion lucide-react clsx tailwind-merge lite-youtube-embed

# shadcn/ui init + components
npx shadcn@latest init
npx shadcn@latest add button card badge input separator sheet dropdown-menu tabs toast
```

Note: the current shadcn registry deprecates `toast`; this project uses `sonner` for toasts instead.

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### Editing projects

All projects are data-driven from:

- `src/data/projects.ts`

Add/edit projects in that file (slug, title, description, category, tech stack, links, dates, and body sections). Thumbnails live in `public/projects/`.

### Shadcn/ui notes

- Components live in `src/components/ui/`
- Theme tokens are CSS variables in `src/app/globals.css` (shadcn-compatible)
- Theme + accent switching uses `next-themes` and `data-accent` on the `<html>` element.

### Deploy to Vercel

1. Push the repo to GitHub.
2. In Vercel, click “New Project” and import the repo.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build` (default).
5. Output: Next.js default (no custom output directory).

After deploy, update `metadataBase` in `src/app/layout.tsx` and the base URL in `src/app/sitemap.ts` / `src/app/robots.ts` if you use a custom domain.
