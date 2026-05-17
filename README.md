# 🚀 Nexora — Premium AI Startup Landing Page

A modern, production-ready landing page built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. All content is managed from a single JSON file — no touching component code needed.

---

## ✨ Features

- ⚡ **Next.js 14** with App Router & TypeScript
- 🎨 **Framer Motion** — fade, slide, scale, stagger, hover, scroll-triggered animations
- 🌙 **Dark / Light mode** with system preference detection
- 📱 **Fully responsive** — mobile-first design
- 📝 **Single JSON CMS** — edit all content in `data/siteContent.json`
- 🧩 **Reusable components** — Button, Badge, Cards, SectionWrapper, Navbar, Footer
- 🚀 **Vercel-ready** — zero config deployment
- 🔒 **Production-grade** — SEO metadata, accessibility, scroll-smooth

---

## 📁 Folder Structure

```
nexora/
├── data/
│   └── siteContent.json        ← ✏️  EDIT ALL CONTENT HERE
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css          ← Global styles, CSS variables, animations
│   │   ├── layout.tsx           ← Root layout with metadata
│   │   └── page.tsx             ← Main page assembling all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Sticky nav with mobile menu & theme toggle
│   │   │   └── Footer.tsx       ← Footer with columns from JSON
│   │   ├── sections/
│   │   │   ├── Hero.tsx         ← Hero with stats & ticker
│   │   │   ├── About.tsx        ← About with pillars grid
│   │   │   ├── Services.tsx     ← Services/features cards
│   │   │   ├── Pricing.tsx      ← 3-column pricing table
│   │   │   └── Contact.tsx      ← Contact form + info
│   │   └── ui/
│   │       ├── Button.tsx       ← Reusable button (4 variants)
│   │       ├── Badge.tsx        ← Section label badge
│   │       ├── SectionWrapper.tsx ← Scroll-animated section wrapper
│   │       └── ThemeProvider.tsx ← Dark/light theme context
│   ├── hooks/
│   │   └── useInView.ts         ← IntersectionObserver hook
│   └── lib/
│       ├── utils.ts             ← cn(), animation variants
│       └── icons.ts             ← Lucide icon lookup map
├── .gitignore
├── .eslintrc.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## ✏️ Editing Content (No Code Required)

**All text, links, icons, and structure** lives in one place:

```
data/siteContent.json
```

### What you can change:

| Section | What's editable |
|---------|----------------|
| `site` | Brand name, tagline, description, logo letter, URL |
| `nav` | Navigation links, CTA button text/link |
| `hero` | Badge text, headline, subheadline, CTAs, stats, ticker items |
| `about` | Badge, headline, body text, pillar cards (icon, title, description) |
| `services` | Badge, headline, all service cards (icon, tag, title, description, features, accent color) |
| `pricing` | Badge, headline, all plans (name, price, features, CTA, highlight flag) |
| `contact` | Badge, headline, email, phone, address, social links, form placeholders |
| `footer` | Tagline, link columns (heading + links) |

### Icon Names (for `icon` fields)

Icons come from [Lucide React](https://lucide.dev). Available names in `src/lib/icons.ts`:
`Zap`, `Shield`, `Brain`, `Globe`, `Bot`, `BarChart3`, `Plug`, `Users`, `Lock`, `Cpu`, `Twitter`, `Linkedin`, `Github`, `Mail`, `Phone`, `MapPin`

To add more: edit `src/lib/icons.ts` and import from `lucide-react`.

---

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org))
- npm / yarn / pnpm

### Steps

```bash
# 1. Unzip the project
unzip nexora.zip && cd nexora

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 🐙 GitHub Setup

```bash
# 1. Initialize git repo
git init

# 2. Stage all files
git add .

# 3. First commit
git commit -m "feat: initial Nexora landing page"

# 4. Create repo on GitHub (via UI or CLI)
gh repo create nexora --public --push --source .

# OR if you created the repo manually:
git remote add origin https://github.com/YOUR_USERNAME/nexora.git
git branch -M main
git push -u origin main
```

---

## 🚀 Vercel Deployment

### Option A — One-Click (Recommended)

1. Push your code to GitHub (steps above)
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — zero configuration needed!

### Option B — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# ? Set up and deploy "nexora"? → Y
# ? Which scope? → select your account
# ? Link to existing project? → N
# ? What's your project's name? → nexora
# ? In which directory is your code? → ./
# ✅ Deployed to https://nexora.vercel.app
```

### Option C — Direct Build

```bash
npm run build    # Creates .next/ production build
npm start        # Start production server locally
```

---

## 🌙 Dark Mode

Dark mode is auto-detected from system preferences on first visit. Users can toggle with the sun/moon button in the navbar. Preference is saved to `localStorage`.

To change the **default theme**, edit `src/components/ui/ThemeProvider.tsx`:
```ts
const preferred = saved ?? "dark"; // change "dark" to "light"
```

---

## 🎨 Customizing Colors

Edit `tailwind.config.ts` to change the brand palette:

```ts
brand: {
  500: "#0ea5e9",   // ← main brand color (currently sky blue)
  // ...
},
accent: {
  DEFAULT: "#6ee7f7",  // ← gradient accent
},
```

Then update CSS variables in `src/app/globals.css` if needed.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework with App Router |
| `framer-motion` | Animations |
| `tailwindcss` | Utility-first CSS |
| `lucide-react` | Icon library |
| `clsx` + `tailwind-merge` | Class name utilities |

---

## 🔧 Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📄 License

MIT — free to use and modify for any project.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
